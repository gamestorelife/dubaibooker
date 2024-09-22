const mongoose = require("mongoose");

// Define the ApartmentBooking schema
const apartmentBookingSchema = new mongoose.Schema({
  checkInDate: { type: String, required: true },
  checkOutDate: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  childAges: { type: [Number] },
});

// Create the ApartmentBooking model
const ApartmentBooking = mongoose.model(
  "ApartmentBooking",
  apartmentBookingSchema
);

module.exports = ApartmentBooking;
