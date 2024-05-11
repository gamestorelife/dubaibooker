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

const API_KEY =
  "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MWE4MjhjMC1iNzI0LTQwMWEtYmM3NS0wZTcxZjUzYjJjZjkiLCJVc2VySWQiOiI0NDU0MCIsIlVzZXJUeXBlIjoiQWdlbnQiLCJQYXJlbnRJRCI6IjAiLCJFbWFpbElEIjoiZHluYW1pc2NhcGl0YWx1YWVAZ21haWwuY29tIiwiaXNzIjoiaHR0cDovL3JheW5hYXBpLnJheW5hdG91cnMuY29tIiwiYXVkIjoiaHR0cDovL3JheW5hYXBpLnJheW5hdG91cnMuY29tIn0.TD-kr0ILWSyo-NTm-LE3SfnRuM_Xa5qXwxs5BgjTz8Y";

const PORT = process.env.PORT || 3000;

const app = express();

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

// Handle other static files
app.use(express.static(path.join(__dirname)));

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
