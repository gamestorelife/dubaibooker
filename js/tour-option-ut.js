document.addEventListener("DOMContentLoaded", async function () {
  const tourContainer = document.getElementById("act-mainInfo");
  const DateContainer = document.getElementById("date-container");

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
        throw new Error("Price data or adult price is not available");
      } else {
        console.log(priceResponse);
      }

      const priceData = await priceResponse.json();

      console.log("Response from server:", priceData);
      if (
        !priceData.result ||
        priceData.result.length === 0 ||
        !priceData.result[0].adultPrice
      ) {
        throw new Error(
          "Price data or adult price is not available in the response"
        );
      }

      // Extract adult price from the response
      const adultPrice = priceData.result[0].adultPrice;
      const childPrice = priceData.result[0].childPrice;
      console.log("Adult Price:", adultPrice);
      console.log("Child Price:", childPrice);

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
                    <div class="explore_button" id="explore-button">
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

      // Add event listener to the explore button
      const exploreButton = tourDiv.querySelector("#explore-button");
      exploreButton.addEventListener("click", function () {
        $(".date-menu").show();

        // Create popup content
        DateContainer.innerHTML = "";
        const popupContent = document.createElement("div");
        popupContent.innerHTML = `
        <div class="popup-content">
        <div class="popup-header">
          <div class="fonticon" id="popup-button">
            <i class="fa-regular fa-arrow-left"></i>
          </div>
          <div><h2>${tour.tourName}</h2></div>
          <div class="fonticon"><i class="fa-regular fa-cart-shopping-fast"></i></div>
        </div>
      
        <div class="datecontainer">
          <div class="datecontainer-title"><h4>Select travel date</h4></div>
          <div class="calandercontainer">
            <input
              type="text"
              id="traveldate"
              placeholder="Check In Date"
              class="d-none"
            />
          </div>
        </div>
        <div class="travller-title">
          <h2>Select Travellers</h2>
        </div>
      
        
         
            <div class="adultprice-details">
              <div class="adultprice-icon"><i class="fa-light fa-user"></i></div>
      
              <div>
                <p><b>Adult</b></p>
                <p>${adultPrice} AED</p>
              </div>
      
              <div class="adultcounter">
               
                <div><button id="decrement" class="countericon"><i class="fa-solid fa-circle-minus"></i></button></div>
                <div class="adultnumber">
                <h2><span id="counter">0</span></h2>
               </div>
                <div><button id="increment" class="countericon"><i class="fa-solid fa-circle-plus"></i></button></div>
              </div>
            </div>
            <div class="adultprice-details">
                <div class="adultprice-icon"><i class="fa-light fa-user"></i></div>
        
                <div>
                <p><b>Child(2-11Yrs)</b></p> 
                  <p>${childPrice} AED</p>
                </div>
        
                <div class="adultcounter">
                 
                  <div><button id="childdecrement" class="countericon"><i class="fa-solid fa-circle-minus"></i></button></div>
                  <div class="adultnumber">
                  <h2><span id="childcounter">0</span></h2>
                 </div>
                  <div><button id="childincrement" class="countericon"><i class="fa-solid fa-circle-plus"></i></button></div>
                </div>
              </div>
          
       
      </div>
              
    `;

        // Append popup content to body
        DateContainer.appendChild(popupContent);

        // Initialize datepicker for dynamically added input
        $("#traveldate").Zebra_DatePicker({
          direction: true,
          always_visible: $(".calandercontainer"),
        });

        // Add event listener to popup button
        const popupButton = popupContent.querySelector("#popup-button");
        popupButton.addEventListener("click", function () {
          console.log("Popup button clicked!");
          // Remove popup content from body
          $(".date-menu").hide();
        });

        // Add event listeners for increment and decrement Adult buttons
        const incrementButton = DateContainer.querySelector("#increment");
        const decrementButton = DateContainer.querySelector("#decrement");
        const counterSpan = DateContainer.querySelector("#counter");

        let counterValue = 0;

        incrementButton.addEventListener("click", function () {
          counterValue++;
          counterSpan.textContent = counterValue;
        });

        decrementButton.addEventListener("click", function () {
          if (counterValue > 0) {
            counterValue--;
            counterSpan.textContent = counterValue;
          }
        });

        // Add event listeners for increment and decrement Child buttons
        const incrementChildButton =
          DateContainer.querySelector("#childincrement");
        const decrementChildButton =
          DateContainer.querySelector("#childdecrement");
        const counterChildSpan = DateContainer.querySelector("#childcounter");

        let ChildcounterValue = 0;

        incrementChildButton.addEventListener("click", function () {
          ChildcounterValue++;
          counterChildSpan.textContent = ChildcounterValue;
        });

        decrementChildButton.addEventListener("click", function () {
          if (ChildcounterValue > 0) {
            ChildcounterValue--;
            counterChildSpan.textContent = ChildcounterValue;
          }
        });
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    console.log("No selected city found.");
  }
});
