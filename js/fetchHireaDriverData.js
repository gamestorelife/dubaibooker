document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/retrieve-hire-driver");
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
  const renderBookingDetails = document.getElementById(
    "renderhireadriverDetails"
  );

  if (data) {
    // Format the data as desired
    renderBookingDetails.innerHTML = `
    <div class="bookingdetailsContainer">
       
        <div class="d-flex justify-content-between">
            <div> <p><strong>Start Date & Time:</strong></p> </div>
            <div> <p> ${data.startDate} <i class="fa-sharp fa-regular fa-timer"></i> </p> </div>
        </div>
       
        <div id="flight-number" class="fligh-number-container" >
           <div><p><strong>Number of Adults:</strong></p>  </div>
                <div><p> ${data.adults}  <i class="fa-duotone fa-thin fa-user"></i></p> </div>
        </div>
        <div class="fligh-number-container" id="number-Children">
                <div><p><strong> Number of Children: </strong></p>  </div>
                <div><p>  ${data.children} <i class="fa-duotone fa-thin fa-child"></i> </p> </div>
        </div>
        <div id="returnContainer">
           <div class="d-flex justify-content-between">
                <div><p><strong>How Many Days:</strong></p>  </div>
                <div><p> ${data.hireDays} <i class="fa-light fa-calendar-day"></i></p> </div>
           </div>
          
           <div id="return-flight-number" class="fligh-number-container">
                <div><p><strong>Hours Per Day:</strong></p>  </div>
                <div><p> ${data.hoursPerDay} <i class="fa-sharp fa-regular fa-timer"></i>   </p> </div>
           </div>
        </div>
        
        
         
        <div></div>
    </div> `;

    // Hide Children if Children is empty

    if (data.children === "Not selected") {
      document.getElementById("number-Children").style.display = "none";
    }
  } else {
    renderBookingDetails.innerHTML = "<p>No transfer data found.</p>";
  }
}
