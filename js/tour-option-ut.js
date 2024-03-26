document.addEventListener("DOMContentLoaded", async function () {
  const tourContainer = document.getElementById("act-mainInfo");

  const tourId = sessionStorage.getItem("tourId");
  const contractId = sessionStorage.getItem("contractId");
  const countryId = sessionStorage.getItem("countryId");
  const cityId = sessionStorage.getItem("cityId");
  const travelDate = sessionStorage.getItem("travelDate");
  const travelDateForm = sessionStorage.getItem("travelDateForm");

  console.log(
    `Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`
  );
  console.log(travelDate);
  console.log(travelDateForm);

  if (tourId) {
    try {
      // 1st POST
      const response = await fetch("/activity-click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CountryId: countryId,
          cityId: cityId,
          tourId: tourId,
          contractId: contractId,
          travelDate: travelDate,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // 2nd Price POST
      const priceResponse = await fetch("/tour-price", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tourId: tourId,
          contractId: contractId,
          travelDate: travelDateForm,
          noOfAdult: "1",
        }),
      });

      if (!priceResponse.ok) {
        throw new Error("Network response for price was not ok");
      }

      const priceData = await priceResponse.json();

      // Extract adult price from the response
      const adultPrice = priceData.result[0].adultPrice;
      console.log("Adult Price:", adultPrice);

      const tour = data.result[0]; // Define the tour variable here
      // const tourImages = tour.tourImages; // Extract the tourImages array
      const tourImages = tour.tourImages || []; // Extract the tourImages array, or set it to an empty array if undefined

      const responseData = data;

      // Clear previous content in tourContainer
      tourContainer.innerHTML = "";

      const tourDiv = document.createElement("div");
      tourDiv.className = "tour";

      if (tourImages.length > 0 && tourImages[0].imagePath) {
        let slideshowItems = "";

        tourImages.forEach((image) => {
          slideshowItems += `
                        <li>
                            <img src="${image.imagePath}" alt="${image.imageCaptionName}" uk-cover>
                        </li>
                    `;
        });

        tourDiv.innerHTML = `
                    <div>
                        <div class="hotel_slider_container">
                            <div class="m-grid">
                                <div uk-grid>
                                    <div class="uk-width-1-2">
                                        <div id="slideshow" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
                                            <ul class="uk-slideshow-items">
                                                ${slideshowItems}
                                            </ul>
                                            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                                            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
      }

      tourDiv.innerHTML += `
                    <div style="padding:5px;">
                    <div class="tour-head-name">
                    <h3 class="tourname hotel_title">${tour.tourName}</h3>
                    <a href="${tour.googleMapUrl}"><i class="fa-sharp fa-solid fa-location-dot" style="font-size:30px;"></i></a>
                    </div>
                    <div class="explore_button">
                   Explore now
                    </div>
                    
                    <p>City: ${tour.cityName}</p>
                    <p>Duration: ${tour.duration}</p>
                    <p>Departure Point: ${tour.departurePoint}</p>
                    <p>Reporting Time: ${tour.reportingTime}</p>
                    <p>Tour Language: ${tour.tourLanguage}</p>
                    <p><b>Tour Description:</b> ${tour.tourDescription}</p>
                    <p><b>Tour Inclusion:</b> ${tour.tourInclusion}</p>
                    <p><b>Tour Exclusion:</b> ${tour.tourExclusion}</p>
                    <p><b>Important Information:</b> ${tour.importantInformation}</p>
                    <p><b>Itenarary Description:</b> ${tour.itenararyDescription}</p>
                    <p><b>Useful Information:</b> ${tour.usefulInformation}</p>  
                    <p><b>Cancellation Policy:</b> ${tour.cancellationPolicyName}</p>
                    <p><b>Child Cancellation Policy Description:</b> ${tour.childCancellationPolicyDescription}</p>
                    <p><b>Child Age:</b> ${tour.childAge}</p>
                    <p><b>Infant Age:</b> ${tour.infantAge}</p>
                    <p><b>FAQ Details:</b> ${tour.faqDetails}</p>
                    <p><b>Terms And Conditions:</b> ${tour.termsAndConditions}</p>

                    <!-- Add more details here -->
                </div>
            `;

      // Create a separate div for displaying adult price
      const adultPriceDiv = document.createElement("div");
      adultPriceDiv.innerHTML = `<div class="price-tag"><h3 style="font-weight: 600;">${adultPrice} AED</h3></div>`;
      // Create a unique container for the tourId
      const tourIdContainer = document.createElement("div");
      tourIdContainer.id = `tourId-${tour.tourId}`;
      tourIdContainer.className = "tour-id-container";
      tourIdContainer.appendChild(adultPriceDiv);
      tourIdContainer.appendChild(tourDiv);

      // Append the tour container to the main container
      tourContainer.appendChild(tourIdContainer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    console.log("No selected city found.");
  }
});
