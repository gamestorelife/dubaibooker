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
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mamopay = require("@api/mamopay");

const app = express();

app.use(bodyParser.json());

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
    process.env.MONGO_URI ||
      "mongodb+srv://admin:QyeDCWTDUOHWbxL4@dubaibookerdb.j3ohhgq.mongodb.net/"
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

// Route to save cart data and passenger details to session
app.post("/save-cart", (req, res) => {
  const { uniqueNo, count, TourDetails, passengers } = req.body;

  // Store the received data in the session
  req.session.cart = {
    uniqueNo: uniqueNo || generateUniqueNo(),
    count: count || TourDetails.length,
    TourDetails: TourDetails,
  };

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

const options = {
  key: fs.readFileSync("cloudflare/cloudflare_private_key.pem"),
  cert: fs.readFileSync("cloudflare/cloudflare_certificate.pem"),
};

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
