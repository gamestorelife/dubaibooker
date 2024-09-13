const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  serviceUniqueId: { type: String, required: true },
  timeSlotId: { type: String, default: "" },
  tourId: { type: String, required: true },
  optionId: { type: String, required: true },
  adult: { type: String, required: true },
  child: { type: String, required: true },
  infant: { type: String, required: true },
  tourDate: { type: String, required: true },
  duration: { type: String, required: true },
  startTime: { type: String, required: true },
  transferId: { type: String, required: true },
  adultRate: { type: String, required: true },
  childRate: { type: String, required: true },
  serviceTotal: { type: String, required: true },
  tourName: { type: String, required: true },
  tourOtionName: { type: String, required: true },
  transferType: { type: String, required: true },
  departureTime: { type: String, required: true },
  pickupLocation: { type: String, default: "" },
  remarks: { type: String, default: "" },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
