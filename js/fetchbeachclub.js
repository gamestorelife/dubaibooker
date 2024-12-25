document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/retrieve-reservation");
    if (!response.ok) {
      throw new Error("Failed to fetch transfer data");
    }

    const data = await response.json();

    // Call the function to render the data
    renderBeachClub(data);
  } catch (error) {
    console.error("Error fetching transfer data:", error);
  }
});

function renderBeachClub(data) {
  const renderBookingDetails = document.getElementById("renderBeachClub");

  if (data) {
    // Format the data as desired
    renderBookingDetails.innerHTML = `
      <div class="bookingdetailsContainer">
         
          <div class="d-flex justify-content-between">
              <div> <p><strong>Reservation Date & Time:</strong></p> </div>
              <div> <p> ${data.reservation.date} <i class="fa-sharp fa-regular fa-timer"></i> </p> </div>
          </div>
         
          <div id="flight-number" class="fligh-number-container" >
             <div><p><strong>Number of Adults:</strong></p>  </div>
                  <div><p> ${data.reservation.adults}  <i class="fa-duotone fa-thin fa-user"></i></p> </div>
          </div>
          
          
      </div> `;
  } else {
    renderBookingDetails.innerHTML = "<p>No transfer data found.</p>";
  }
}
