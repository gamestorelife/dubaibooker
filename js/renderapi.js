/* JS API Rendrering */

/* When the Page is Loading  */
document.addEventListener("DOMContentLoaded", async function () {
  const apiDataContainer = document.getElementById("api-data-container");
  const tourContainer = document.getElementById("tour-container");

  // Check if there is a selected city in local storage
  const selectedCity = sessionStorage.getItem("selectedCity");

  if (selectedCity) {
    try {
      const response = await fetch("/api-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ CountryId: 13063, cityId: selectedCity }),
      });

      const data = await response.json();
      const responseData = data;

      // Clear previous content in tourContainer
      tourContainer.innerHTML = "";

      // Create div elements dynamically for each tour
      responseData.result.forEach((tour) => {
        const tourDiv = document.createElement("div");
        tourDiv.className = "tour";
        tourDiv.innerHTML = `
				<div>
					<img src="images/${tour.tourName.toLowerCase().replace(/\s+/g, "-")}.jpg" 
				alt="${
          tour.imageCaptionName
        }" style="width: 100%; border-radius: 25px 25px 0 0;" />
				</div>
				
					<div style="padding:10px;">
						<h3 class="tourname">${tour.tourName}</h3>
                    	<p>City: ${tour.cityName}</p>
                   		
					</div>
                 
                    <!-- Add more details as needed -->
               `;

        // Create a unique container for each tourId
        const tourIdContainer = document.createElement("div");
        tourIdContainer.id = `tourId-${tour.tourId}`;
        tourIdContainer.className = "tour-id-container";
        tourIdContainer.appendChild(tourDiv);

        // Append the tour container to the main container
        tourContainer.appendChild(tourIdContainer);

        // Add click event listener to each tour container
        tourIdContainer.addEventListener("click", function () {
          // Extract tourId and contractId from the container's ID
          const tourId = tour.tourId;
          const contractId = tour.contractId; // Assuming you have contractId in your tour object
          const countryId = tour.countryId;
          const cityId = tour.cityId;
          const toDayDate = new Date();

          const day = toDayDate.getDate();
          const month = toDayDate.getMonth() + 1; // Note: month is zero-indexed, so add 1 to get the correct month
          const year = toDayDate.getFullYear();
          const travelDate = `${day}-${month}-${year}`;
          const travelDateForm = `${year}-${month}-${day}`;

          sessionStorage.setItem("tourId", tourId);
          sessionStorage.setItem("contractId", contractId);
          sessionStorage.setItem("countryId", countryId);
          sessionStorage.setItem("cityId", cityId);
          sessionStorage.setItem("travelDate", travelDate);
          sessionStorage.setItem("travelDateForm", travelDateForm);

          console.log(`Today is ${day}-${month}-${year}`);
          console.log(
            `Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`
          );
          console.log(travelDate);

          const redirectUrl = `/tour-option.html`;

          // Redirect to the constructed URL
          window.location.href = redirectUrl;
        });
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    console.log("No selected city found.");
  }

  //////////////////////////////////////////////////////////////////////////////

  // The current Page Form
  const apiForm = document.getElementById("api-form");

  apiForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const cityId = document.getElementById("cityId").value;
    console.log(cityId);

    try {
      const response = await fetch("/api-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ CountryId: 13063, cityId: cityId }),
      });

      const data = await response.json();
      const responseData = data;

      // Clear previous content in tourContainer
      tourContainer.innerHTML = "";

      // Create div elements dynamically for each tour
      responseData.result.forEach((tour) => {
        const tourDiv = document.createElement("div");
        tourDiv.className = "tour";
        tourDiv.innerHTML = `
				<div>
					<img src="images/${tour.tourName.toLowerCase().replace(/\s+/g, "-")}.jpg" 
				alt="${
          tour.imageCaptionName
        }" style="width: 100%; border-radius: 25px 25px 0 0;" /></div>
				
					<div style="padding:10px;">
						<h3>${tour.tourName}</h3>
                    	<p>City: ${tour.cityName}</p>
                   		
					</div>
                 
                    <!-- Add more details as needed -->
                `;

        // Create a unique container for each tourId
        const tourIdContainer = document.createElement("div");
        tourIdContainer.id = `tourId-${tour.tourId}`;
        tourIdContainer.className = "tour-id-container";
        tourIdContainer.appendChild(tourDiv);

        // Append the tour container to the main container
        tourContainer.appendChild(tourIdContainer);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });
});

// <p>Tour Description: ${tour.tourShortDescription}</p>
