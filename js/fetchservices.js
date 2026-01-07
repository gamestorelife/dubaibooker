document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/get-services-data");
    if (!response.ok) {
      throw new Error("Failed to fetch services data");
    }

    const data = await response.json();
    console.log("Fetched services data:", data);

    // Call the function to render the data
    renderBeachClub(data);
  } catch (error) {
    console.error("Error fetching services data:", error);
  }
});

function renderBeachClub(data) {
  const renderBookingDetails = document.getElementById("renderBeachClub");

  // Extract servicesData from the response
  const servicesData = data.servicesData || data;

  if (servicesData) {
    // Access the properties from servicesData, not from the root data object
    renderBookingDetails.innerHTML = `
      <div class="bookingdetailsContainer">
          <div class="d-flex justify-content-between">
              <div> <p>Services Date</p> </div>
              <div> <p> ${servicesData.Date || 'N/A'} <i class="fa-sharp fa-regular fa-timer"></i> </p> </div>
          </div>

          <div class="d-flex justify-content-between">
              <div> <p>Number of days</p> </div>
              <div> <p> ${servicesData.Days || 'N/A'} <i class="fa-sharp fa-regular fa-timer"></i> </p> </div>
          </div>
         
          <div id="flight-number" class="fligh-number-container" >
             <div><p>Number of Adults:</p>  </div>
             <div><p> ${servicesData.Adults || '0'} <i class="fa-duotone fa-thin fa-user"></i></p> </div>
          </div>
          
      </div> `;
  } else {
    renderBookingDetails.innerHTML = "<p>No services data found.</p>";
  }
}