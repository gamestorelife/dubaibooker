document.addEventListener("DOMContentLoaded", async function () {
  const apiDataContainer = document.getElementById("api-data-container");
  const tourContainer = document.getElementById("tour-container");

  // Check if there is a selected city in local storage
  const selectedCity = sessionStorage.getItem("selectedCity");

  // Static list of tour names to hide from rendering
  const toursToHide = [
    "Not Working ",
    "Glow Garden",
    "Donut Ride Dubai",
    "Banana Boat Ride",
    "Kayaking in Dubai ",
    "Dubai To Abu Dhabi Intercity Transfers",
    "Ras Al Khaimah Dessert Safari From Dubai",
    "Dubai Safari Park",
    "Russian Guide Modern Night Dubai Tour From Dubai",
    "Sunset Marina Dhow Cruise",
    "Etisalat SIM Card for tourists",
    "Pluma Show Circus in Dubai",
    "Mohit Chauhan Live in Dubai",
    "Atul Khatri Live in Dubai",
    "Colors Laughter Night ft Abishek Kumar And Nirmal Pillai",
    "Speed Boat in Dubai",
    "Colors Laughter Night ft Gaurav Kapoor",
    "Colors Laughter Night ft Kanan Gill",
    "Biswa Kalyan Rath Live in Dubai",
    "Dubai Water sports activities",
    "Amit Tandon Live in Dubai",
    "Heritage Desert Safari Dubai",
  ];

  // Function to check if a tour should be hidden
  function isTourHidden(tourName) {
    // Trim whitespace from the tour name before checking
    return toursToHide.includes(tourName.trim());
  }

  async function getTourImageSource(tour) {
    // First try to use the imageCaptionName as a URL if it exists
    if (tour.imageCaptionName && 
        (tour.imageCaptionName.startsWith('http://') || 
         tour.imageCaptionName.startsWith('https://'))) {
      try {
        // Check if the image URL is valid
        const response = await fetch(tour.imageCaptionName, { method: 'HEAD' });
        if (response.ok) {
          return tour.imageCaptionName;
        }
      } catch (error) {
        console.log(`Remote image not available, using fallback: ${error}`);
      }
    }
    
    // Fallback to local image path
    return `images/${tour.tourName.toLowerCase().replace(/\s+/g, "-")}.jpg`;
  }

  async function processTours(tours) {
    // Clear previous content in tourContainer
    tourContainer.innerHTML = "";
    const uniqueTourIds = new Set();

    // Use for...of instead of forEach for async operations
    for (const tour of tours) {
      // Check if the tour should be hidden based on its name
      if (isTourHidden(tour.tourName)) {
        console.log(`Tour "${tour.tourName}" is on the hidden list and will not be rendered.`);
        continue; // Skip the rest of the loop for this tour
      }

      // Check if the tour ID is already in the set, if so, skip rendering
      if (uniqueTourIds.has(tour.tourId)) {
        continue;
      }

      const imageSrc = await getTourImageSource(tour);
      
      const tourDiv = document.createElement("div");
      tourDiv.className = "tour";
      tourDiv.innerHTML = `
        <div>
          <img src="${imageSrc}" 
            alt="${tour.imageCaptionName || tour.tourName}" 
            style="width: 100%; border-radius: 25px 25px 0 0;" 
            onerror="this.onerror=null; this.src='images/default-tour.jpg';"
          />
        </div>
        <div style="padding:10px;">
          <h3 class="tourname">${tour.tourName}</h3>
          <p>City: ${tour.cityName}</p>
        </div>
      `;

      uniqueTourIds.add(tour.tourId);

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
    }
  }

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
      await processTours(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    console.log("No selected city found.");
  }

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
      await processTours(data.result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });
});
