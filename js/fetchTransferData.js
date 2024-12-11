document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/get-transfer-data");
    if (!response.ok) {
      throw new Error("Failed to fetch transfer data");
    }

    const data = await response.json();

    // Call the function to render the data
    renderTransferData(data);
  } catch (error) {
    console.error("Error fetching transfer data:", error);
  }
});

function renderTransferData(data) {
  const renderBookingDetails = document.getElementById("renderBookingDetails");

  if (data) {
    // Format the data as desired
    renderBookingDetails.innerHTML = `
    <div class="bookingdetailsContainer">
        <div class="locationContainer">
            <div>
            <p><strong>Pick Up Location:</strong></p>
            <p><i class="fa-solid fa-location-dot"></i> ${data.pickupLocation}</p>
            </div>
             <div><i class="fa-regular fa-arrow-up-arrow-down"></i></div>
  
            <div>
            <p><strong>Drop Off Location:</strong></p>
            <p><i class="fa-solid fa-location-dot"></i> ${data.dropOffLocation}</p>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <div> <p><strong>Pickup Date & Time:</strong></p> </div>
            <div> <p> ${data.pickupDate} <i class="fa-sharp fa-regular fa-timer"></i> </p> </div>
        </div>
       
        <div id="flight-number" class="fligh-number-container" >
            <div><p><strong>Flight Number:</strong></p>  </div>
            <div><p> ${data.flightNumber} <i class="fa-light fa-plane-departure"></i>  </p> </div>
        </div>
        <div id="returnContainer">
           <div class="d-flex justify-content-between">
                <div><p><strong>Return Pickup Date & Time:</strong></p>  </div>
                <div><p> ${data.returnPickupDate} <i class="fa-sharp fa-regular fa-timer"></i></p> </div>
           </div>
          
           <div id="return-flight-number" class="fligh-number-container">
                <div><p><strong>Return Flight Number:</strong></p>  </div>
                <div><p> ${data.returnFlightNumber}  <i class="fa-light fa-plane-departure"></i>  </p> </div>
           </div>
        </div>
        <div class="d-flex justify-content-between">
                <div><p><strong>Number of Adults:</strong></p>  </div>
                <div><p> ${data.numberOfAdults}  <i class="fa-duotone fa-thin fa-user"></i></p> </div>
           </div>
        <div class="fligh-number-container" id="number-Children">
                <div><p><strong> Number of Children: </strong></p>  </div>
                <div><p>  ${data.numberOfChildren} <i class="fa-duotone fa-thin fa-child"></i> </p> </div>
        </div>
         <div class="fligh-number-container" id="number-Luggage">
                <div><p><strong> Number of Luggage: </strong></p>  </div>
                <div><p>  ${data.numberOfLuggage} <i class="fa-solid fa-suitcase-rolling"></i></p> </div>
        </div>
        <div></div>
    </div> `;

    // Hide returnContainer if returnPickupDate is empty
    if (data.returnPickupDate === "") {
      document.getElementById("returnContainer").style.display = "none";
    }

    if (data.flightNumber === "") {
      document.getElementById("flight-number").style.display = "none";
    }
    if (data.returnFlightNumber === "") {
      document.getElementById("return-flight-number").style.display = "none";
    }
    if (data.numberOfChildren === "Not selected") {
      document.getElementById("number-Children").style.display = "none";
    }
    if (data.numberOfLuggage === "Not Selected") {
      document.getElementById("number-Luggage").style.display = "none";
    }
  } else {
    renderBookingDetails.innerHTML = "<p>No transfer data found.</p>";
  }
}
