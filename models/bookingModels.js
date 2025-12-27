const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    uniqueNo: {
        type: String,
        required: true
    },
    // Make count optional since it's only required for multiple items
    count: {
        type: Number,
        required: false // Change to false
    },
    TourDetails: [{
        serviceUniqueId: String,
        tourId: String,
        optionId: String,
        adult: Number,
        child: Number,
        infant: Number,
        tourDate: String,
        timeSlotId: String,
        startTime: String,
        transferId: String,
        pickup: String,
        adultRate: Number,
        childRate: Number,
        serviceTotal: Number
    }],
    passengers: [{
        serviceType: String,
        prefix: String,
        firstName: String,
        lastName: String,
        email: String,
        mobile: String,
        nationality: String,
        message: String,
        leadPassenger: Number,
        paxType: String,
        clientReferenceNo: Number
    }]
}, {
    timestamps: true
});

// Pre-save hook to generate uniqueNo and serviceUniqueId
bookingSchema.pre("save", async function (next) {
  const booking = this;

  // Generate uniqueNo
  if (!booking.uniqueNo) {
    // Logic to generate uniqueNo
    booking.uniqueNo = generateUniqueNo(); // You need to implement this function
  }

  // Generate serviceUniqueId for each TourDetail
  booking.TourDetails.forEach((tourDetail) => {
    if (!tourDetail.serviceUniqueId) {
      // Logic to generate serviceUniqueId
      tourDetail.serviceUniqueId = generateServiceUniqueId(); // You need to implement this function
    }
  });

  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
