const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    uniqueNo: {
      type: Number,
      required: true,
      unique: true,
    },
    count: {
      type: Number,
      required: true,
    },
    TourDetails: [
      {
        serviceUniqueId: {
          type: Number,
          required: true,
        },
        tourId: Number,
        optionId: Number,
        adult: Number,
        child: Number,
        infant: Number,
        tourDate: Date,
        timeSlotId: String,
        startTime: String,
        transferId: Number,
        pickup: String,
        adultRate: Number,
        childRate: Number,
        serviceTotal: Number,
      },
    ],
    passengers: [
      {
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
        clientReferenceNo: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

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
