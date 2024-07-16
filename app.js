const fs = require("fs");
const express = require("express");
const path = require("path");
const axios = require("axios");
const { parse } = require("querystring");
const send = require("send");
const http = require("http");
const $ = require("jquery");
const mongoose = require("mongoose");
const Booking = require("./models/bookingModels");
const session = require("express-session");
const mamopay = require("@api/mamopay");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const API_KEY = process.env.RAYAN_SECRET_KEY;
const MAMO_API_KEY = process.env.MAMO_PAY_KEY;

//console.log(MAMO_API_KEY);
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware for session management
app.use(
  session({
    secret: "eyJhbGciOiJodHRwO",
    resave: false,
    saveUninitialized: true,
  })
);

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
// Handle POST requests
app.post("/api-data", async (req, res) => {
  try {
    const response = await axios.post(
      "http://raynaapi.raynatours.com/api/Tour/tourstaticdata",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/tour-price", async (req, res) => {
  try {
    const response = await axios.post(
      "http://raynaapi.raynatours.com/api/Tour/touroption",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/activity-click", async (req, res) => {
  try {
    const response = await axios.post(
      "http://raynaapi.raynatours.com/api/Tour/tourStaticDataById",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/tour-options", async (req, res) => {
  try {
    const response = await axios.post(
      "http://raynaapi.raynatours.com/api/Tour/touroptionstaticdata",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error making API request:", error.message);
    res.status(500).send("Error processing POST request");
  }
});

app.post("/time-slot", async (req, res) => {
  try {
    const response = await axios.post(
      "http://raynaapi.raynatours.com/api/Tour/timeslot",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    res.json(response.data);
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

mongoose
  .connect(
    "mongodb+srv://admin:QyeDCWTDUOHWbxL4@dubaibookerdb.j3ohhgq.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to DB");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Mamo API Integration
mamopay.server("https://sandbox.dev.business.mamopay.com/manage_api/v1", {
  headers: {
    Authorization: `Bearer ${MAMO_API_KEY}`,
  },
});

// Example GET request to Mamo API
app.get("/mamo-business-details", async (req, res) => {
  try {
    const response = await mamopay.get();
    res.json(response.data);
  } catch (error) {
    console.error("Error making GET request to Mamo API:", error.message);
    res.status(500).send("Error processing GET request");
  }
});
