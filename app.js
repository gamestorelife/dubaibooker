const fs = require("fs");
const express = require("express");
const path = require("path");
const axios = require("axios");
const { parse } = require("querystring");
const send = require("send");
const http = require("http");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Booking = require("./models/bookingModels");
const CartItem = require("./models/cartModel");
const ApartmentBooking = require("./models/apartmentBooking");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mamopay = require("@api/mamopay");
const nodemailer = require("nodemailer");
const cors = require("cors");
const crypto = require("crypto");
require("dotenv").config(); // Load environment variables from .env file

const app = express();

app.use(bodyParser.json());

// Initialize Mamo Pay SDK
if (process.env.MAMO_PAY_KEY) {
  mamopay.auth(process.env.MAMO_PAY_KEY);
} else {
  console.warn("MAMO_PAY_KEY not found in environment variables");
}

// app.use((req, res, next) => {
//  // console.log("Headers:", req.headers);
//  // console.log("Request Body:", req.body);
//   next();
// });

const nonce = crypto.randomBytes(16).toString("base64");
// app.use((req, res, next) => {
//   res.locals.nonce = nonce;
//   res.setHeader(
//     "Content-Security-Policy",
//     `default-src 'self'; ` +
//       `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://maxst.icons8.com https://fonts.cdnfonts.com; ` +
//       `font-src 'self' https://fonts.gstatic.com https://fonts.cdnfonts.com; ` +
//       `img-src 'self' data: https://i.ibb.co https://www.dubaibooker.com; ` +
//       `connect-src 'self'; ` +
//       `script-src 'self' 'nonce-${nonce}'; ` +
//       `frame-ancestors 'self'`
//   );
//   next();
// });

// Load environment variables
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const jqueryPath = path.resolve(
  __dirname,
  "node_modules/jquery/dist/jquery.min.js"
);
const $ = require(jqueryPath);

const API_KEY = process.env.RAYAN_SECRET_KEY;
const MAMO_API_KEY = process.env.MAMO_PAY_KEY;

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

// Middleware for session management
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 14 * 24 * 60 * 60, // 14 days
      autoRemove: "native",
    }),
    cookie: { secure: false }, // Set secure: true if using HTTPS
  })
);

// app.set("trust proxy", 1); // Required for apps behind proxies like Cloudflare

// app.use(
//   cors({
//     origin: ["https://www.dubaibooker.com", "http://localhost:3000"],
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.get("/confirmation.html", (req, res) => {
  res.sendFile(path.join(__dirname, "confirmation.html"));
});

// Route to save cart data and passenger details to session
app.post("/save-cart", (req, res) => {
  const { uniqueNo, count, TourDetails, passengers } = req.body;

 
   // Store the received data in the session
    req.session.cart = {
        uniqueNo: uniqueNo || generateUniqueNo(),
        TourDetails: TourDetails || []
    };

    // Add count only if it exists in the request (for multiple items)
    if (count) {
        req.session.cart.count = count;
    }

    // If passengers are provided, include them in the session
    if (passengers) {
        req.session.cart.passengers = passengers;
    }
    
    console.log("Session after saving cart:", req.session);
  // Save session and send response
  req.session.save((err) => {
    if (err) {
      console.error("Error saving session:", err);
      return res.status(500).send("Error saving session");
    }
    console.log("Session saved:", req.session);
    res.status(200).send("Cart saved successfully");
  });
});

// Route to retrieve cart data from session
app.get("/get-cart-data", (req, res) => {
  console.log("Session ID:", req.sessionID);
  console.log("Session when retrieving cart:", req.session);

  if (req.session && req.session.cart) {
    res.status(200).json(req.session.cart);
  } else {
    console.log("No cart data found in session");
    res.status(404).json({ message: "No cart data found in session" });
  }
});

app.post("/cart-selecteditem", (req, res) => {
  const cartItemsArray = req.body; // Directly capture the array of cart items

  try {
    // Save the cart items in the session
    req.session.cartItems = cartItemsArray;

    // Explicitly save the session to ensure it's persisted
    req.session.save((err) => {
      if (err) {
        console.error("Error saving session:", err);
        return res.status(500).send("Error saving session");
      }

      console.log("Cart items saved:", req.session.cartItems);
      res.status(200).json({
        message: "Cart items saved successfully",
        cartItems: req.session.cartItems,
      });
    });
  } catch (error) {
    console.error("Error saving cart items:", error);
    res.status(500).json({ message: "Error saving cart items" });
  }
});

// GET endpoint to retrieve the current saved session for the cart
app.get("/cart-session", (req, res) => {
  console.log("Request Body:", req.body); // Add this line to inspect the incoming body
  // Check if there is cart data in the session
  if (req.session.cartItems) {
    console.log("Cart items in session:", req.session.cartItems);
    res.status(200).json({
      message: "Cart items retrieved successfully",
      cartItems: req.session.cartItems,
    });
  } else {
    console.log("No cart items found in session");
    res.status(404).json({ message: "No cart items found in session" });
  }
});

// Remove item from cart by serviceUniqueId
app.delete("/remove-from-cart/:serviceUniqueId", (req, res) => {
  const serviceUniqueId = req.params.serviceUniqueId;

  // Check if the cartItems array exists in the session
  if (req.session.cartItems && req.session.cartItems.length > 0) {
    // Find the index of the item with the matching serviceUniqueId
    const itemIndex = req.session.cartItems.findIndex(
      (item) => item.serviceUniqueId === serviceUniqueId
    );

    if (itemIndex !== -1) {
      // Remove the item from the cartItems array
      req.session.cartItems.splice(itemIndex, 1);

      // Save the session after removal
      req.session.save((err) => {
        if (err) {
          console.error("Error saving session after item removal:", err);
          return res.status(500).send("Error saving session");
        }

        res.status(200).json({
          message: "Item removed from cart",
          cartItems: req.session.cartItems,
        });
      });
    } else {
      res.status(404).json({ message: "Item not found in cart" });
    }
  } else {
    res.status(404).json({ message: "No cart items found in session" });
  }
});

// Utility function to generate unique number
function generateUniqueNo() {
  const timestamp = Date.now().toString();
  const randomNumber = Math.floor(Math.random() * 1000).toString();
  return timestamp + randomNumber;
}

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tourrender.html", (req, res) => {
  res.sendFile(path.join(__dirname, "tourrender.html"));
});

app.get("/tour-option.html", (req, res) => {
  res.sendFile(path.join(__dirname, "tour-option.html"));
});

app.get("/cardrender.html", (req, res) => {
  res.sendFile(path.join(__dirname, "cardrender.html"));
});

// Handle POST requests using built-in fetch API
app.post("/api-data", async (req, res) => {
  try {
    //console.log("Incoming body:", req.body);
    const response = await fetch(
      "http://raynaapi.raynatours.com/api/Tour/tourstaticdata",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/tour-price", async (req, res) => {
  try {
    const response = await fetch(
      "http://raynaapi.raynatours.com/api/Tour/touroption",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/activity-click", async (req, res) => {
  try {
    const response = await fetch(
      "http://raynaapi.raynatours.com/api/Tour/tourStaticDataById",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/tour-options", async (req, res) => {
  try {
    const response = await fetch(
      "http://raynaapi.raynatours.com/api/Tour/touroptionstaticdata",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/time-slot", async (req, res) => {
  try {
    const response = await fetch(
      "http://raynaapi.raynatours.com/api/Tour/timeslot",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/bookings", async (req, res) => {
  try {
    const response = await fetch(
      "http://raynaapi.raynatours.com/api/Booking/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});





app.post("/user-booking", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(200).json(booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/user-booking", async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.status(200).json(bookings);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/user-booking/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Handle other static files
app.use(express.static(path.join(__dirname)));

// Add item to cart
app.get("/add-to-cart/:item", (req, res) => {
  const item = req.params.item;
  req.session.cart = req.session.cart || {};
  req.session.cart[item] = req.session.cart[item]
    ? req.session.cart[item] + 1
    : 1;
  res.send("Item added to cart");

  // Add the item to the session cart
  req.session.cart.push(item);

  // Save the session
  req.session.save((err) => {
    if (err) {
      console.error("Failed to save session:", err);
      return res.status(500).send("Failed to save session");
    }
    res.send("Item added to cart");
  });
});

// View cart
app.get("/cart", (req, res) => {
  res.json(req.session.cart || {});
});

// Remove item from cart
app.get("/remove-from-cart/:item", (req, res) => {
  const item = req.params.item;
  if (req.session.cart && req.session.cart[item]) {
    delete req.session.cart[item];
    req.session.save(() => {
      res.send({ success: true, message: "Item removed from cart" });
    });
  } else {
    res.send({ success: false, message: "Item not found in cart" });
  }
});

// Example GET request to Mamo API
app.get("/mamo-business-details", async (req, res) => {
  try {
    const response = await axios.get(
      "https://sandbox.dev.business.mamopay.com/manage_api/v1/me",
      {
        headers: {
          Authorization: `Bearer ${MAMO_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error making GET request to Mamo API:",
      error.response ? error.response.data : error.message
    );
    res.status(500).send("Error processing GET request");
  }
});

// POST route to create payment link using Mamo Pay API
app.post("/create-payment-link", async (req, res) => {
  try {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${MAMO_API_KEY}`, // Ensure your MAMO_API_KEY is correctly set in .env
      },
      data: {
        title: req.body.title,
        description: req.body.description,
        active: req.body.active,
        return_url: req.body.return_url,
        failure_return_url: req.body.failure_return_url,
        amount: req.body.amount,
        amount_currency: req.body.amount_currency,
      },
    };

    // Make the request to Mamo Pay API
    const response = await axios({
      url: "https://sandbox.dev.business.mamopay.com/manage_api/v1/links",
      method: options.method,
      headers: options.headers,
      data: options.data,
    });

    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error creating Mamo payment link:",
      error.response?.data || error.message
    );
    res.status(500).json({
      error: "Failed to create payment link",
      details: error.response?.data || error.message,
    });
  }
});

//Villa Form
app.post("/submit-apartment-booking", async (req, res) => {
  try {
    const {
      apartIndate,
      apartOutdate,
      apartAlladult,
      apartAllKids,
      apartAge1,
      apartAge2,
      apartAge3,
      apartAge4,
      apartAge5,
      apartAge6,
    } = req.body;

    const childAges = [
      apartAge1,
      apartAge2,
      apartAge3,
      apartAge4,
      apartAge5,
      apartAge6,
    ].filter((age) => age !== undefined);

    // Create a new booking object
    const newBooking = new ApartmentBooking({
      checkInDate: apartIndate,
      checkOutDate: apartOutdate,
      adults: apartAlladult,
      children: apartAllKids,
      childAges: childAges,
    });

    // Save the booking to the database
    await newBooking.save();

    // Save booking data to the session
    req.session.bookingData = {
      checkInDate: apartIndate,
      checkOutDate: apartOutdate,
      adults: apartAlladult,
      children: apartAllKids,
      childAges: childAges,
    };

    req.session.save((err) => {
      if (err) {
        console.error("Error saving session:", err);
        return res.status(500).send("Error saving session");
      }
      res.status(200).json({ message: "Booking saved successfully" });
    });
  } catch (error) {
    console.error("Error saving booking:", error.message);
    res.status(500).json({ message: "Error saving booking" });
  }
});

//Villa Form Get
app.get("/retrieve-apartment-booking", (req, res) => {
  // Check if session data exists for the apartment booking
  if (req.session && req.session.bookingData) {
    res.status(200).json({
      message: "Booking data retrieved successfully",
      data: req.session.bookingData,
    });
  } else {
    res.status(404).json({ message: "No booking data found in session" });
  }
});


// Add these routes to app.js

// 1. Route to SAVE services data to session
app.post("/save-services-data", (req, res) => {
    console.log("POST /save-services-data called with:", req.body);
    
    const { servicesCategory, servicesDate, servicesDays, servicesAdults } = req.body;
    
    // Add validation
    if (!servicesCategory || !servicesDate || !servicesDays || !servicesAdults) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Save reservation data to session
    req.session.servicesData = {
        category: servicesCategory,
        Date: servicesDate,
        Days: servicesDays,
        Adults: servicesAdults,
    };

    // Determine redirection URL
    let redirectUrl;
    switch (servicesCategory) {
        case "20":
            redirectUrl = "/PrivateChef.html";
            break;
        case "21":
            redirectUrl = "/PrivateSecurity.html";
            break;
        case "22":
            redirectUrl = "/PrivateConcierge.html";
            break;
        case "23":
            redirectUrl = "/SpaMassage.html";
            break; 
        case "24":
            redirectUrl = "/PersonalTrainer.html";
            break; 
        case "25":
            redirectUrl = "/Barber.html";
            break;
        case "26":
            redirectUrl = "/Shisha.html";
            break;
        case "27":
            redirectUrl = "/Nails.html";
            break;
        case "28":
            redirectUrl = "/Hairdresser.html";
            break;   
        case "29":
            redirectUrl = "/Bartender.html";
            break;
        case "30":
            redirectUrl = "/YogaClass.html";
            break;  
        case "31":
            redirectUrl = "/TennisInstructor.html";
            break;                            
        default:
            redirectUrl = "/";
    }

    req.session.save((err) => {
        if (err) {
            console.error("Error saving services data to session:", err);
            return res.status(500).json({ 
                message: "Error saving data",
                redirectUrl: "/"  // Optional: send default redirect on error
            });
        }
        
        console.log("Services data successfully saved to session ID:", req.sessionID);
        console.log("Redirecting to:", redirectUrl);
        
       
        
        // Send ONE response with both message and redirect URL
        res.status(200).json({ 
            message: "Services data saved successfully", 
            redirectUrl 
        });
    });
});


// 2. Route to RETRIEVE services data from session
app.get("/get-services-data", (req, res) => {
    console.log("GET /get-services-data requested. Session ID:", req.sessionID);
    
    if (req.session.servicesData) {
        console.log("Found services data:", req.session.servicesData);
        res.status(200).json({ 
            servicesData: req.session.servicesData  // Wrap in servicesData property
        });
    } else {
        console.log("No services data found in session:", req.session);
        res.status(404).json({ message: "No services data found in session" });
    }
});

// POST route to handle form data and send Villa emails
app.post("/send-booking-email", (req, res) => {
  const { villaname, name, email, phone, insurance, comments, bookingDetails } =
    req.body;
  console.log(req.body);

  // Create the Nodemailer transporter for sending emails
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: "developers@mykonosbooker.com", // Replace with your Gmail address
      pass: "Welcome@2024", // Replace with your Gmail password or app password
    },
  });

  // Define the welcome email options
  const userMailOptions = {
    from: '"Dubai Booker" <developers@mykonosbooker.com>',
    to: email,
    subject: "Welcome to DubaiBooker",
    text: `Dear ${name},\n\nThank you for booking with us! Here are your booking details:\nVilla Name: ${bookingDetails.villaname}\nCheck-in Date: ${bookingDetails.checkInDate}\nCheck-out Date: ${bookingDetails.checkOutDate}\nNumber of Adults: ${bookingDetails.adults}\nNumber of Children: ${bookingDetails.children}\n\nLooking forward to hosting you!\n\nBest Regards,\nDubai Booker Team`,
    html: `<p>Dear ${name},</p><p>Thank you for booking with us! Here are your booking details:</p><ul><li>Villa Name: ${villaname}</li><li>Check-in Date: ${bookingDetails.checkInDate}</li><li>Check-out Date: ${bookingDetails.checkOutDate}</li><li>Number of Adults: ${bookingDetails.adults}</li><li>Number of Children: ${bookingDetails.children}</li></ul><p>Looking forward to hosting you!</p><p>Best Regards,<br/>Dubai Booker Team</p>`,
  };

  // Define the admin notification email options
  const adminMailOptions = {
    from: '"Dubai Booker" <developers@mykonosbooker.com>',
    to: "freerapper666@gmail.com", // Replace with admin email address
    subject: "New Booking Received",
    text: `New booking received from ${name}.\n\nBooking Details:\nVilla Name: ${
      bookingDetails.villaname
    }\nCheck-in Date: ${bookingDetails.checkInDate}\nCheck-out Date: ${
      bookingDetails.checkOutDate
    }\nNumber of Adults: ${bookingDetails.adults}\nNumber of Children: ${
      bookingDetails.children
    }\nChild Ages: ${bookingDetails.childAges.join(
      ", "
    )}\n\nComments: ${comments}\nInsurance: ${
      insurance ? "Yes" : "No"
    }\nPhone: ${phone}`,
    html: `<p>New booking received from ${name}.</p><p>Booking Details:</p><ul>
    <li>Villa Name: ${villaname}</li>
    <li>Check-in Date: ${bookingDetails.checkInDate}</li><li>Check-out Date: ${
      bookingDetails.checkOutDate
    }</li><li>Number of Adults: ${
      bookingDetails.adults
    }</li><li>Number of Children: ${
      bookingDetails.children
    }</li><li>Child Ages: ${bookingDetails.childAges.join(
      ", "
    )}</li></ul><p>Comments: ${comments}</p>
    <p>Insurance: ${insurance ? "Yes" : "No"}</p>
    <p>Phone: ${phone}</p><p>Email: ${email}</p>`,
  };

  // Send welcome email to the user
  transporter.sendMail(userMailOptions, (userError, userInfo) => {
    if (userError) {
      console.error("Error sending welcome email:", userError); // Log error details
      return res
        .status(500)
        .json({ message: "Failed to send welcome email", error: userError });
    }
    console.log("Welcome email sent: " + userInfo.response);

    // Send notification email to the admin
    transporter.sendMail(adminMailOptions, (adminError, adminInfo) => {
      if (adminError) {
        console.error("Error sending admin email:", adminError); // Log error details
        return res
          .status(500)
          .json({ message: "Failed to send admin email", error: adminError });
      }
      console.log("Admin email sent: " + adminInfo.response);
      res.status(200).json({ message: "Emails sent successfully" });
    });
  });
});

// Route to handle location suggestions
app.get("/search-locations", async (req, res) => {
  const input = req.query.input; // Get the user input from query parameter
  const API_KEY = process.env.POSITIONSTACK_API_KEY;

  try {
    const response = await axios.get(
      "https://api.positionstack.com/v1/forward",
      {
        params: {
          access_key: API_KEY,
          query: input,
          country: "AE", // Restrict to UAE
          limit: 5, // Limit number of suggestions
        },
      }
    );

    const suggestions = response.data.data.map((location) => location.label);
    res.json(suggestions); // Send suggestions back to the frontend
  } catch (error) {
    console.error("Error fetching location suggestions:", error);
    res.status(500).send("Error fetching location suggestions");
  }
});

app.post("/save-transfer", (req, res) => {
  const {
    pickupLocation,
    dropOffLocation,
    pickupDate,
    pickupTime,
    flightNumber,
    returnPickupDate,
    returnPickupTime,
    returnFlightNumber,
    numberOfAdults,
    numberOfChildren,
    numberOfLuggage,

    // Capture additional fields here as needed
  } = req.body;

  req.session.transferData = {
    pickupLocation,
    dropOffLocation,
    pickupDate,
    pickupTime,
    flightNumber,
    returnPickupDate,
    returnPickupTime,
    returnFlightNumber,
    numberOfAdults,
    numberOfChildren,
    numberOfLuggage,
    // Store additional fields as needed
  };

  req.session.save((err) => {
    if (err) {
      console.error("Error saving transfer data to session:", err);
      return res.status(500).send("Error saving transfer data");
    }
    res.status(200).json({ message: "Transfer data saved successfully" });
  });
});

app.get("/get-transfer-data", (req, res) => {
  if (req.session.transferData) {
    res.status(200).json(req.session.transferData);
  } else {
    res.status(404).json({ message: "No transfer data found in session" });
  }
});

// Send Get Transfer Email

app.post("/send-gettransfer-email", async (req, res) => {
  const { name, email, phone, carType, insurance, comments, bookingDetails } =
    req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "developers@mykonosbooker.com",
      pass: "Welcome@2024",
    },
  });

  // Define welcome email to the client
  // Path to the user email HTML template
  const templatePath = path.join(__dirname, "user-email-template.html");

  // Read and populate the HTML template
  const populateTemplate = (template, data) => {
    return template.replace(/\${(.*?)}/g, (_, key) => {
      const keys = key.split("."); // Support nested keys
      return keys.reduce((acc, k) => (acc ? acc[k] : ""), data) || "";
    });
  };

  let htmlTemplate = "";
  try {
    htmlTemplate = fs.readFileSync(templatePath, "utf-8");
  } catch (error) {
    console.error("Error loading HTML template:", error);
    return res.status(500).json({ message: "Failed to load email template" });
  }

  // Populate template with booking details
  const populatedHtml = populateTemplate(htmlTemplate, {
    name,
    comments,
    bookingDetails,
  });

  // Define the user email with the HTML template
  const userMailOptions = {
    from: '"Dubai Booker" <developers@mykonosbooker.com>',
    to: email,
    subject: "Welcome to DubaiBooker - Booking Confirmation",
    html: populatedHtml, // Use the populated HTML content
  };

  // Define notification email to admin
  const adminMailOptions = {
    from: '"Dubai Booker" <developers@mykonosbooker.com>',
    to: "freerapper666@gmail.com",
    subject: "New Get-Transfer Booking Received",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2c3e50;">New Booking Received</h2>
        <p style="margin: 0 0 10px;">Hello,</p>
        <p style="margin: 0 0 10px;">A new booking has been made from Dubaibooker. Here are the details:</p>
  
        <h3 style="color: #2c3e50; margin-top: 20px;">Customer Information</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Name:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Email:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Phone:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${phone}</td>
          </tr>
        </table>
  
        <h3 style="color: #2c3e50;">Booking Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Car Type:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${carType}</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Pickup Location:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.pickupLocation}</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Drop-off Location:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.dropOffLocation}</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Pickup Date & Time:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.pickupDate}</td>
          </tr>
          
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Flight Number:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.flightNumber}</td>
          </tr>
        </table>
  
        <h3 style="color: #2c3e50;">Return Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Return Pickup Date & Time:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.returnPickupDate}</td>
          </tr>
        
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Return Flight Number:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.returnFlightNumber}</td>
          </tr>
        </table>
  
        <h3 style="color: #2c3e50;">Passenger Information</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Number of Adults:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.numberOfAdults}</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Number of Children:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.numberOfChildren}</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #ddd;">Number of Luggage:</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${bookingDetails.numberOfLuggage}</td>
          </tr>
        </table>
  
        <h3 style="color: #2c3e50;">Additional Information</h3>
        <p>Comments: ${comments}</p>
        
  
        <p style="margin-top: 20px; font-size: 0.9em; color: #555;">
          This email was automatically generated. If you have any questions, please contact us.
        </p>
      </div>
    `,
  };

  try {
    // Send confirmation email to the user
    await transporter.sendMail(userMailOptions);

    // Send notification email to admin
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ message: "Failed to send emails" });
  }
});

// Route to handle hireDriver form submission
app.post("/submit-hire-driver", (req, res) => {
  const { startDate, adults, children, hireDays, hoursPerDay } = req.body;

  // Save form data in session
  req.session.hireDriverData = {
    startDate,
    adults,
    children,
    hireDays,
    hoursPerDay,
  };

  req.session.save((err) => {
    if (err) {
      console.error("Error saving session:", err);
      return res.status(500).send("Error saving session");
    }
    res.status(200).json({ message: "Hire a driver data saved successfully" });
  });
});

// Route to retrieve hireDriver form data
app.get("/retrieve-hire-driver", (req, res) => {
  if (req.session.hireDriverData) {
    res.status(200).json(req.session.hireDriverData);
  } else {
    res.status(404).json({ message: "No hire driver data found in session" });
  }
});

// Endpoint to handle "Hire a Driver" form submission and send emails
app.post("/submit-hire-driver-email", async (req, res) => {
  try {
    // Retrieve session data
    const hireDriverData = req.session.hireDriverData;
    if (!hireDriverData) {
      return res.status(400).json({ message: "No session data found" });
    }

    // Extract form inputs
    const { name, email, phone, insurance, comments } = req.body;

    // Email setup
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "developers@mykonosbooker.com", // Replace with your email
        pass: "Welcome@2024", // Replace with your email password
      },
    });

    // Define welcome email to the client
    // Path to the user email HTML template
    const templatePath = path.join(__dirname, "hireadriver-welcome-email.html");

    // Read and populate the HTML template
    const populateTemplate = (template, data) => {
      return template.replace(/\${(.*?)}/g, (_, key) => {
        const keys = key.split("."); // Support nested keys
        return keys.reduce((acc, k) => (acc ? acc[k] : ""), data) || "";
      });
    };

    let htmlTemplate = "";
    try {
      htmlTemplate = fs.readFileSync(templatePath, "utf-8");
    } catch (error) {
      console.error("Error loading HTML template:", error);
      return res.status(500).json({ message: "Failed to load email template" });
    }

    // Populate template with booking details
    const populatedHtml = populateTemplate(htmlTemplate, {
      name,
      comments,
      hireDriverData,
    });

    // Admin email content
    const adminMailOptions = {
      from: '"Dubai Booker" <developers@mykonosbooker.com>',
      to: "freerapper666@gmail.com", // Admin email
      subject: "New Hire-a-Driver Booking Notification",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0056b3;">New Hire-a-Driver Booking</h2>
          <p>Hello Admin,</p>
          <p>You have received a new booking request. Below are the details:</p>
    
          <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Start Date:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${
                hireDriverData.startDate
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Adults:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${
                hireDriverData.adults
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Children:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${
                hireDriverData.children
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Hire Days:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${
                hireDriverData.hireDays
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Hours per Day:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${
                hireDriverData.hoursPerDay
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Comments:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${
                comments || "None"
              }</td>
            </tr>
          </table>
    
          <p style="margin-top: 20px;">Best regards,<br>Dubai Booker Team</p>
        </div>
      `,
    };

    // Client email content
    const userMailOptions = {
      from: '"Dubai Booker" <developers@mykonosbooker.com>',
      to: email,
      subject: "Booking Confirmation - Hire a Driver",
      html: populatedHtml,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ message: "Failed to send emails", error });
  }
});

// Reservations Form Submission
app.post("/submit-reservation", (req, res) => {
  const { categorynumber, reservationDate, reservationsadults } = req.body;

  // Save reservation data to session
  req.session.reservation = {
    date: reservationDate,
    adults: reservationsadults,
    category: categorynumber,
  };

  req.session.save((err) => {
    if (err) {
      console.error("Error saving session:", err);
      return res.status(500).send("Error saving session");
    }

    console.log("Session data saved:", req.session.reservation);

    // Determine redirection URL
    let redirectUrl;
    switch (categorynumber) {
      case "19":
        redirectUrl = "/beachclubs.html";
        break;
      case "20":
        redirectUrl = "/nightclubs.html";
        break;
      case "21":
        redirectUrl = "/restaurants.html";
        break;
      default:
        redirectUrl = "/";
    }

    // Log the redirection URL
    // console.log("Redirecting to main:", redirectUrl);

    // Perform the redirection
    res.json({ redirectUrl }); // Correct JSON response
  });
});

// Retrieve the Reservation data from
app.get("/retrieve-reservation", (req, res) => {
  if (req.session && req.session.reservation) {
    res.status(200).json({
      message: "Reservation data retrieved successfully",
      reservation: req.session.reservation,
    });
  } else {
    res.status(404).json({ message: "No reservation data found in session" });
  }
});

app.post("/send-reservation-email", async (req, res) => {
  const {
    reservationItem,
    name,
    email,
    phone,
    comments,
    reservationDate,
    adults,
  } = req.body;

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "developers@mykonosbooker.com",
      pass: "Welcome@2024", // Use your actual password
    },
  });

 // Welcome email content for the client
const clientEmailContent = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://i.ibb.co/cKPMmF42/logo.png" alt="Company Logo" style="max-width: 150px; height: auto;">
    </div>
    <h2 style="color: #0056b3; text-align: center;">Reservation Confirmation</h2>
    <p>Dear ${name},</p>
    <p>Thank you for your reservation with **Dubai Booker**. We're excited to confirm your booking!</p>
    
    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
      <h3 style="color: #0056b3;">Your Booking Details:</h3>
      <ul style="list-style-type: none; padding: 0;">
        <li style="margin-bottom: 10px;"><strong>Reservation Item:</strong> ${reservationItem}</li>
        <li style="margin-bottom: 10px;"><strong>Date & Time:</strong> ${reservationDate}</li>
        <li style="margin-bottom: 10px;"><strong>Number of Adults:</strong> ${adults}</li>
        <li style="margin-bottom: 10px;"><strong>Comments:</strong> ${comments || "None"}</li>
      </ul>
    </div>
    
    <p style="margin-top: 20px;">We look forward to hosting you and providing a great experience.</p>
    <p style="margin-top: 20px;">If you have any questions or need to make changes, please don't hesitate to contact us.</p>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
      <p style="font-size: 12px; color: #777;">Best regards,<br>The Dubai Booker Team</p>
    </div>
  </div>
`;

  // Notification email content for the admin
  const adminEmailContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #0056b3;">New Reservation Booking</h2>
      <p>Hello Admin,</p>
      <p>You have received a new booking request. Below are the details:</p>

      <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Reservation Date & Time:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${reservationDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Adults:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${adults}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Reservation Item:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${reservationItem}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Comments:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${
            comments || "None"
          }</td>
        </tr>
      </table>

      <p style="margin-top: 20px;">Best regards,<br>Dubai Booker Team</p>
    </div>
  `;

  try {
    // Send welcome email to the client
    await transporter.sendMail({
      from: '"Dubai Booker" <developers@mykonosbooker.com>',
      to: email,
      subject: "Reservation Confirmation",
      html: clientEmailContent,
    });

    // Send notification email to the admin
    await transporter.sendMail({
      from: '"Dubai Booker" <developers@mykonosbooker.com>',
      to: "freerapper666@gmail.com", // Replace with the admin's email
      subject: "New Reservation Notification",
      html: adminEmailContent,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ message: "Failed to send emails" });
  }
});

app.post("/send-services-email", async (req, res) => {
  const {
    reservationItem,
    name,
    email,
    phone,
    comments,
    servicesCategory,
    servicesDate,
    servicesDays,
    servicesAdults,
  } = req.body;

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "developers@mykonosbooker.com",
      pass: "Welcome@2024",
    },
  });

 // Map category codes to human-readable names
const getCategoryName = (categoryCode) => {
  switch(categoryCode) {
    case "20": return "Private Chef";
    case "21": return "Private Security";
    case "22": return "Private Concierge";
    case "23": return "Spa - Massage";
    case "24": return "Personal Trainer";
    case "25": return "Barber";
    case "26": return "Shisha";
    case "27": return "Nails";
    case "28": return "Hairdresser";
    case "29": return "Bartender";
    case "30": return "Yoga Class";
    case "31": return "Tennis Instructor";
    default: return "Service";
  }
};

  const categoryName = getCategoryName(servicesCategory);

  // Welcome email content for the client
  const clientEmailContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://i.ibb.co/cKPMmF42/logo.png" alt="Company Logo" style="max-width: 150px; height: auto;">
      </div>
      <h2 style="color: #0056b3; text-align: center;">Service Reservation Confirmation</h2>
      <p>Dear ${name},</p>
      <p>Thank you for your service reservation with <strong>Dubai Booker</strong>. We're excited to confirm your booking!</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
        <h3 style="color: #0056b3;">Your Service Booking Details:</h3>
        <ul style="list-style-type: none; padding: 0;">
          <li style="margin-bottom: 10px;"><strong>Service Type:</strong> ${categoryName}</li>
          <li style="margin-bottom: 10px;"><strong>Selected Service:</strong> ${reservationItem}</li>
          <li style="margin-bottom: 10px;"><strong>Start Date:</strong> ${servicesDate}</li>
          <li style="margin-bottom: 10px;"><strong>Number of Days:</strong> ${servicesDays}</li>
          <li style="margin-bottom: 10px;"><strong>Number of Adults:</strong> ${servicesAdults}</li>
          <li style="margin-bottom: 10px;"><strong>Comments:</strong> ${comments || "None"}</li>
        </ul>
      </div>
      
      <p style="margin-top: 20px;">We look forward to providing you with an exceptional service experience.</p>
      <p style="margin-top: 20px;">If you have any questions or need to make changes, please don't hesitate to contact us.</p>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #777;">Best regards,<br>The Dubai Booker Team</p>
        <p style="font-size: 12px; color: #777;">Contact: ${phone}</p>
      </div>
    </div>
  `;

  // Notification email content for the admin
  const adminEmailContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #0056b3;">New Service Reservation Booking</h2>
      <p>Hello Admin,</p>
      <p>You have received a new <strong>${categoryName}</strong> service booking request. Below are the details:</p>

      <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Customer Name:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Service Category:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${categoryName} (Code: ${servicesCategory})</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Selected Service:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${reservationItem}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Start Date:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${servicesDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Number of Days:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${servicesDays}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Number of Adults:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${servicesAdults}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Comments:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${comments || "None"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Booking Time:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
        </tr>
      </table>

      <p style="margin-top: 20px; padding: 10px; background-color: #f0f8ff; border-left: 4px solid #0056b3;">
        <strong>Note:</strong> This is a service reservation. Please follow up with the customer to confirm availability and finalize arrangements.
      </p>

      <p style="margin-top: 20px;">Best regards,<br>Dubai Booker Team</p>
    </div>
  `;

  try {
    // Send welcome email to the client
    await transporter.sendMail({
      from: '"Dubai Booker" <developers@mykonosbooker.com>',
      to: email,
      subject: `${categoryName} Reservation Confirmation`,
      html: clientEmailContent,
    });

    // Send notification email to the admin
    await transporter.sendMail({
      from: '"Dubai Booker" <developers@mykonosbooker.com>',
      to: "freerapper666@gmail.com", // Replace with the admin's email
      subject: `New ${categoryName} Service Reservation - ${name}`,
      html: adminEmailContent,
    });

    res.status(200).json({ message: "Service reservation emails sent successfully" });
  } catch (error) {
    console.error("Error sending service emails:", error);
    res.status(500).json({ message: "Failed to send service reservation emails" });
  }
});

// Register Webhook
app.post("/register-webhook", async (req, res) => {
  const { url, enabled_events, auth_header } = req.body;

  try {
    const response = await fetch(
      "https://sandbox.dev.business.mamopay.com/manage_api/v1/webhooks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MAMO_API_KEY}`, // Replace with your actual API key
        },
        body: JSON.stringify({
          url,
          enabled_events,
          auth_header,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      res.json({ message: "Webhook registered successfully", data });
    } else {
      res.status(response.status).json({ error: data.messages });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Cart Finalization and Booking with Rayna API

// Add this to app.js


// Add this new endpoint to app.js
app.post("/finalize-booking-sequence", async (req, res) => {
    try {
        const cartData = req.session.cart;
        if (!cartData) return res.status(400).json({ 
            success: false, 
            message: "No session data found" 
        });

        // STEP 1: Call Rayna Booking API
        const bookingResponse = await fetch("http://raynaapi.raynatours.com/api/Booking/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RAYAN_SECRET_KEY}`,
            },
            body: JSON.stringify(cartData),
        });

        const bookingResult = await bookingResponse.json();
        console.log("Booking Response:", JSON.stringify(bookingResult, null, 2));

        // Check if booking was successful
        if (bookingResult.statuscode === 200 && !bookingResult.error && bookingResult.result) {
            // SUCCESS CASE - Extract booking IDs dynamically
            let referenceNo = bookingResult.result.referenceNo || ""; // AGT351742712251960
            let bookingId = "";
            
            // Try to get bookingId from different possible locations
            if (bookingResult.result.bookingId) {
                // From ticket response structure
                bookingId = bookingResult.result.bookingId;
            } else if (bookingResult.result.details && bookingResult.result.details[0] && bookingResult.result.details[0].bookingId) {
                // From booking response structure
                bookingId = bookingResult.result.details[0].bookingId;
            } else if (bookingResult.result.referenceNo) {
                // Use referenceNo as fallback
                bookingId = bookingResult.result.referenceNo;
            }
            
            console.log("Extracted - Booking ID:", bookingId, "Reference:", referenceNo);
            
            const uniqueNo = cartData.uniqueNo;
            
            // STEP 2: Prepare payload for GetBookedTickets
            const ticketPayload = {
                uniqNO: uniqueNo,
                referenceNo: referenceNo,
                bookedOption: (bookingResult.result.details || []).map(detail => ({
                    serviceUniqueId: detail.serviceUniqueId,
                    bookingId: detail.bookingId || bookingId
                }))
            };

            console.log("Ticket Payload:", JSON.stringify(ticketPayload, null, 2));

            try {
                // STEP 3: Call Rayna Ticket API
                const ticketResponse = await fetch("http://raynaapi.raynatours.com/api/Booking/GetBookedTickets", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.RAYAN_SECRET_KEY}`,
                    },
                    body: JSON.stringify(ticketPayload),
                });

                const ticketResult = await ticketResponse.json();
                console.log("Ticket Response:", JSON.stringify(ticketResult, null, 2));

                // If ticket API returns bookingId, use that
                if (ticketResult.result && ticketResult.result.bookingId) {
                    bookingId = ticketResult.result.bookingId;
                }
                
                // If ticket API returns referenceNo, use that
                if (ticketResult.result && ticketResult.result.referenceNo) {
                    referenceNo = ticketResult.result.referenceNo;
                }

                // Send success response to frontend with correct structure
                res.json({
                    success: true,
                    bookingId: bookingId, // Dynamic numeric ID
                    referenceNo: referenceNo, // Dynamic AGT reference
                    ticketURL: ticketResult.result?.ticketURL || "", // Dynamic ticket URL
                    tickets: [{
                        pdfPath: ticketResult.result?.ticketURL || "",
                        optionName: ticketResult.result?.optionName || ""
                    }]
                });
                
            } catch (ticketError) {
                // If ticket API fails, still return success for booking
                console.error("Ticket API Error:", ticketError);
                res.json({
                    success: true,
                    bookingId: bookingId,
                    referenceNo: referenceNo,
                    ticketURL: "",
                    tickets: [],
                    ticketError: "Tickets not available at this time"
                });
            }
            
        } else {
            // ERROR CASE - like error 169
            console.error("Booking API Error:", bookingResult);
            
            res.json({
                success: false,
                message: bookingResult.error?.description || "Booking failed",
                fullResponse: bookingResult
            });
        }
    } catch (error) {
        console.error("Sequence Error:", error);
        res.status(500).json({ 
            success: false,
            message: "Internal Server Error",
            error: error.message 
        });
    }
});





const options = {
  key: fs.readFileSync("cloudflare/cloudflare_private_key.pem"),
  cert: fs.readFileSync("cloudflare/cloudflare_certificate.pem"),
};

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
