document
  .getElementById("gettransfer-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      pickupLocation: document.getElementById("pick-up-location").value,
      dropOffLocation: document.getElementById("drop-off-location").value,
      pickupDate: document.getElementById("date-book-trans").value,
      pickupTime: document.getElementById("pickupTime").value,
      flightNumber: document.getElementById("flightNumber").value,
      returnPickupDate: document.getElementById("return-date-hide").value,
      returnPickupTime: document.getElementById("return-pickup-time").value,
      returnFlightNumber: document.getElementById("return-flight-number").value,
      numberOfAdults: document.getElementById("number-of-adults").value,
      numberOfChildren: document.getElementById("number-of-children").value,
      numberOfLuggage: document.getElementById("number-of-luggage").value,

      // Include other form data as necessary
    };

    try {
      const response = await fetch("/save-transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // alert("Transfer data saved successfully!");
        // Redirect to a success page or perform other actions as needed
        window.location.href = "get-transfer.html";
      } else {
        alert("Failed to save transfer data.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });
