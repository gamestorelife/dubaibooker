document
  .getElementById("gettransfer-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const pickupLocation = document.getElementById("pick-up-location").value;
    const dropOffLocation = document.getElementById("drop-off-location").value;
    const pickupDate = document.getElementById("date-book-trans").value;
    const pickupTime = document.getElementById("pickupTime").value;
    const numberOfAdults = document.getElementById("number-of-adults").value;

    // Check if required fields are filled
    const missingFields = [];
    if (!pickupLocation) missingFields.push("Pickup Location");
    if (!dropOffLocation) missingFields.push("Drop-off Location");
    if (!pickupDate) missingFields.push("Pickup Date");
    if (!pickupTime) missingFields.push("Pickup Time");
    if (!numberOfAdults) missingFields.push("Number of Adults");

    if (missingFields.length > 0) {
      alert(
        `Please fill in the following required fields:\n- ${missingFields.join(
          "\n- "
        )}`
      );
      return; // Stop the form submission
    }

    const formData = {
      pickupLocation,
      dropOffLocation,
      pickupDate,
      pickupTime,
      flightNumber: document.getElementById("flightNumber").value,
      returnPickupDate: document.getElementById("return-date-hide").value,
      returnPickupTime: document.getElementById("return-pickup-time").value,
      returnFlightNumber: document.getElementById("return-flight-number").value,
      numberOfAdults,
      numberOfChildren: document.getElementById("number-of-children").value,
      numberOfLuggage: document.getElementById("number-of-luggage").value,
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
        window.location.href = "get-transfer.html";
      } else {
        alert("Failed to save transfer data.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });
