document.addEventListener("DOMContentLoaded", async function () {
  const tourContainer = document.getElementById("act-mainInfo");
  const DateContainer = document.getElementById("date-container");

  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Session Variables
  const tourId = sessionStorage.getItem("tourId");
  const contractId = sessionStorage.getItem("contractId");
  const countryId = sessionStorage.getItem("countryId");
  const cityId = sessionStorage.getItem("cityId");
  const travelDate = sessionStorage.getItem("travelDate");
  const travelDateForm = sessionStorage.getItem("travelDateForm");

  console.log(
    `Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`
  );
  //console.log(travelDate);
  //console.log(travelDateForm);

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
      }

      const priceData = await priceResponse.json();

      if (
        !priceData.result ||
        priceData.result.length === 0 ||
        !priceData.result[0].adultPrice
      ) {
        throw new Error(
          "Price data or adult price is not available in the response"
        );
      }

      // 3nd Price POST
      const TourOptionsResponse = await fetch("/tour-options", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tourId: tourId,
          contractId: contractId,
        }),
      });

      if (!TourOptionsResponse.ok) {
        throw new Error("Tour OPtion data  is not available");
      }

      const tourOptionsData = await TourOptionsResponse.json();

      const tourOptions = tourOptionsData.result.touroption;
      // Log each tourOptionId
      tourOptions.forEach((option) => {
        //  console.log(`tourOptionId: ${option.tourOptionId}`);
      });

      // Extract adult price from the response
      const increasedadultPrice = priceData.result[0].adultPrice;
      const increasedchildPrice = priceData.result[0].childPrice;
      const increasedinfantPrice = priceData.result[0].infantPrice;
      // console.log("Original Adult Price:", increasedadultPrice);
      // console.log("Original Child Price:", increasedchildPrice);

      // Increase the price by 12%
      let adultPrice = increasedadultPrice * 1.12;
      let childPrice = increasedchildPrice * 1.12;
      let infantPrice = increasedinfantPrice * 1.12;

      // Remove the decimal part
      adultPrice = Math.floor(adultPrice);
      childPrice = Math.floor(childPrice);
      infantPrice = Math.floor(infantPrice);

      // console.log("Adult 12% Price:", adultPrice);
      //console.log("Child 12% Price:", childPrice);
      $("#secondoptionscontainer").hide();
      $("#popup-button-option").hide();
      $("#transferoptionscontainer").hide();
      $("#timeslotcontainer").hide();

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
                            <div id="slideshow" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 8:4; animation: push; autoplay: true; autoplay-interval: 3000">
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
                    <div class="explore_button customico" id="explore-button">
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
        $(".date-menu").show(200);

        // Create popup content
        DateContainer.innerHTML = "";
        const popupContent = document.createElement("div");
        popupContent.innerHTML = `
        <div  class="popup-content">
              <div class="popup-header">
                  <div class="fonticon" id="popup-button">
                         <i class="fa-regular fa-arrow-left"></i>
                  </div>

                  <div class="fonticon" id="popup-button-option">
                         <i class="fa-regular fa-arrow-left"></i>
                  </div>
                  <div class="fonticon" id="popup-button-tranfer">
                         <i class="fa-regular fa-arrow-left"></i>
                  </div>
                <div class="midtourname">
                       <p class="tourheadername">${tour.tourName}</p>
                </div>
                <div class="fonticon"><i class="fa-regular fa-cart-shopping-fast"></i></div>
               </div>

          <div id="mfirstcontainer">
            <div class="datecontainer">
              <div class="datecontainer-title"><h4>Select travel date</h4></div>
              <div class="calandercontainer">
                <input
                  type="text"
                  id="traveldate"
                  placeholder="Check In Date"
                  class="d-none"
                  value=""
                />
              </div>
            </div>
            <div class="travller-title">
              <h4>Select Travellers</h4>
            </div>

            <div class="adultprice-details">
              <div class="price-details">
                <div class="adultprice-icon"><i class="fa-light fa-user"></i></div>
                <div class="mini-detail-container">
                  <div>
                    <p class="mini-detail"><b>Adult</b></p>
                  </div>
                  <div><p class="mini-detail">${adultPrice} AED</p></div>
                </div>
              </div>

              <div class="adultcounter">
                <div>
                  <button id="decrement" class="countericon">
                    <i class="fa-solid fa-circle-minus customico"></i>
                  </button>
                </div>
                <div class="adultnumber">
                  <h2><span id="counter" value="">1</span></h2>
                </div>
                <div>
                  <button id="increment" class="countericon">
                    <i class="fa-solid fa-circle-plus customico"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="adultprice-details">
              <div class="price-details">
                <div class="adultprice-icon"><i class="fa-light fa-user"></i></div>

                <div class="mini-detail-container">
                  <p class="mini-detail"><b>Child(2-11Yrs)</b></p>
                  <p class="mini-detail">${childPrice} AED</p>
                </div>
              </div>

              <div class="adultcounter">
                <div>
                  <button id="childdecrement" class="countericon">
                    <i class="fa-solid fa-circle-minus customico"></i>
                  </button>
                </div>
                <div class="adultnumber">
                  <h2><span id="childcounter" value="">0</span></h2>
                </div>
                <div>
                  <button id="childincrement" class="countericon">
                    <i class="fa-solid fa-circle-plus customico"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="adultprice-details">
              <div class="price-details">
                <div class="adultprice-icon"><i class="fa-light fa-user"></i></div>

                <div class="mini-detail-container">
                  <p class="mini-detail"><b>Infant(0-3Yrs)</b></p>
                  <p class="mini-detail">${infantPrice} AED</p>
                </div>
              </div>

              <div class="adultcounter">
                <div>
                  <button id="infantdecrement" class="countericon">
                    <i class="fa-solid fa-circle-minus customico"></i>
                  </button>
                </div>
                <div class="adultnumber">
                  <h2><span id="infantcounter" value="">0</span></h2>
                </div>
                <div>
                  <button id="infantincrement" class="countericon">
                    <i class="fa-solid fa-circle-plus customico"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="adultsubmession">
              <button id="adultnumbersubmit" class="submit-button customico">
                Next
              </button>
            </div>
          </div>
          <div id="secondoptionscontainer">
            <div id="act-options" class="tourOptioncont"></div>
          </div>

          <div id="transferoptionscontainer">
          <div id="act-tranfer" class="tourOptioncont"></div>
          </div>
          <div id="timeslotcontainer">
          <div id="time-slot" class="tourOptioncont"></div>
          </div>
          
        </div>

            `;

        // Add the HTML to the page

        // Append popup content to body
        DateContainer.appendChild(popupContent);

        const actOptionsDiv = popupContent.querySelector("#act-options");

        if (actOptionsDiv) {
          // Now, you can safely manipulate the act-options div
          // For example, you can set its innerHTML to display tour options
          actOptionsDiv.innerHTML = "";

          // Iterate over each tour option in the response and create HTML elements
          tourOptionsData.result.touroption.forEach((option) => {
            const optionDiv = document.createElement("div");

            optionDiv.className = "tour-option";
            optionDiv.id = `tour-option-${option.tourOptionId}`;
            optionDiv.innerHTML = `
                  <div  class="option-contain">
                  <div class="option-m-name">
                  <div><h3><b> ${option.optionName}</b></h3></div>
                  </div>
                  
                  <div>
                  <p><strong>Description:</strong> ${option.optionDescription}</p>
                  <p><strong>Duration:</strong> ${option.duration}</p>
                  <p><strong>Child Age:</strong> ${option.childAge}</p>
                  <p><strong>Infant Age:</strong> ${option.infantAge}</p>
                  <p><strong>Child Policy Description:</strong> ${option.childPolicyDescription}</p>
                  <p><strong>Cancellation Policy:</strong> ${option.cancellationPolicy}</p>
                  </div>
                  
                  </div>
                  
                `;

            // Append optionDiv to actOptionsDiv
            actOptionsDiv.appendChild(optionDiv);

            //Event listiner to every tour Option

            optionDiv.addEventListener("click", async function () {
              var TourOption = option.tourOptionId;
              console.log("Tour Option ID:", TourOption);
              let selectedDate = sessionStorage.getItem("selectedDate"),
                selectedAdults = sessionStorage.getItem("selectedAdults"),
                selectedChild = sessionStorage.getItem("selectedChild"),
                selectedInfant = sessionStorage.getItem("selectedInfant");
              sessionStorage.setItem("optionId", TourOption);
              $("#transferoptionscontainer").show(500);
              $("#popup-button-tranfer").show(200);
              $("#mfirstcontainer").hide();
              $("#secondoptionscontainer").hide();
              $("#popup-button-option").hide();

              try {
                // Make the POST request for the clicked tourOptionId
                const FinalResponse = await fetch("/tour-price", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    tourId: tourId,
                    tourOptionId: TourOption,
                    contractId: contractId,
                    travelDate: selectedDate,
                    noOfAdult: selectedAdults,
                    noOfChild: selectedChild,
                    noOfInfant: selectedInfant,
                    // Add any other parameters needed for the request
                  }),
                });

                if (!FinalResponse.ok) {
                  throw new Error("Network response was not ok");
                }

                const fineResponseData = await FinalResponse.json();

                //console.log(fineResponseData);

                // Process the responseData as needed
                const actTransferDiv = document.getElementById("act-tranfer");
                actTransferDiv.innerHTML = "";

                fineResponseData.result.forEach((transferOption) => {
                  // Increase prices by 12% and round down
                  const increasedAdultPrice = Math.floor(
                    transferOption.adultPrice * 1.12
                  );
                  const increasedChildPrice = Math.floor(
                    transferOption.childPrice * 1.12
                  );
                  const increasedInfantPrice = Math.floor(
                    transferOption.infantPrice * 1.12
                  );
                  const increasedFinalAmount = Math.floor(
                    transferOption.finalAmount * 1.12
                  );
                  // Create HTML elements for each transfer option
                  const transferOptionDiv = document.createElement("div");
                  transferOptionDiv.className = "transfer-option";

                  // Populate the transfer option details
                  transferOptionDiv.innerHTML = `
                  <div class="transferoption-container">
                  <div class="option-m-name">
                  <h4>${transferOption.transferName}</h4>
                  </div>
                  <div>
                      <p><strong>Adult Price:</strong> ${increasedAdultPrice} ${fineResponseData.currency}</p>
                      <p><strong>Child Price:</strong> ${increasedChildPrice} ${fineResponseData.currency}</p>
                      <p><strong>Infant Price:</strong> ${increasedInfantPrice} ${fineResponseData.currency}</p>
                      <p><strong>Start Time:</strong> ${transferOption.startTime}</p>
                      <p>${transferOption.departureTime}</p>
                  <div>
                  <p><strong>Total Amount:</strong> ${increasedFinalAmount} ${fineResponseData.currency}</p>
                  </div>
                      
                      <!-- Add more details here -->
                  </div>
               
                  </div>
                      
                  `;

                  // Append the transfer option div to the act-transfer div
                  actTransferDiv.appendChild(transferOptionDiv);

                  transferOptionDiv.addEventListener(
                    "click",
                    async function () {
                      let transferId = transferOption.transferId,
                        adultPrice = transferOption.adultPrice,
                        childPrice = transferOption.childPrice,
                        finalAmount = transferOption.finalAmount,
                        startTime = transferOption.startTime;

                      sessionStorage.setItem("transferId", transferId);
                      sessionStorage.setItem("adultPrice", adultPrice);
                      sessionStorage.setItem("childPrice", childPrice);
                      sessionStorage.setItem("finalAmount", finalAmount);
                      sessionStorage.setItem(
                        "increasedAdultPrice",
                        increasedAdultPrice
                      );
                      sessionStorage.setItem(
                        "increasedChildPrice",
                        increasedChildPrice
                      );
                      sessionStorage.setItem("startTime", startTime);

                      let selectedDate = sessionStorage.getItem("selectedDate"),
                        selectedAdults =
                          sessionStorage.getItem("selectedAdults"),
                        selectedChild = sessionStorage.getItem("selectedChild"),
                        selectedInfant =
                          sessionStorage.getItem("selectedInfant");

                      console.log(
                        tourId,
                        TourOption,
                        contractId,

                        transferId,
                        selectedDate,
                        selectedAdults,

                        selectedChild,
                        selectedInfant,
                        adultPrice,

                        childPrice,
                        finalAmount,
                        startTime
                      );
                      console.log(transferId);
                      console.log(increasedAdultPrice);

                      $("#transferoptionscontainer").hide();
                      $("#timeslotcontainer").show();

                      try {
                        const TimeSlotResponse = await fetch("/time-slot", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            tourId: tourId,
                            tourOptionId: TourOption,
                            contractId: contractId,
                            travelDate: selectedDate,
                            transferId: transferId,
                            adult: selectedAdults,
                            child: selectedChild,
                            noOfInfant: selectedInfant,
                            // Add any other parameters needed for the request
                          }),
                        });

                        if (!TimeSlotResponse.ok) {
                          if (TimeSlotResponse.status === 503) {
                            // Service Unavailable error, display message to user
                            const errorMessage = await TimeSlotResponse.text();
                            console.error("Service Unavailable:", errorMessage);
                            // Display error message to the user
                            const actTimeSlotDiv =
                              document.getElementById("time-slot");
                            actTimeSlotDiv.innerHTML = `<p>Service Unavailable: ${errorMessage}</p>`;
                          } else {
                            // Other error, throw an error
                            throw new Error("Network response was not ok");
                          }
                        } else {
                          const finTimmeResponse =
                            await TimeSlotResponse.json();
                          // console.log(finTimmeResponse);
                          // Process the responseData as needed
                          const actTimeSlotDiv =
                            document.getElementById("time-slot");
                          actTimeSlotDiv.innerHTML = ""; // Clear previous content

                          if (finTimmeResponse.result.length === 0) {
                            // No time slots available, display message to user
                            actTimeSlotDiv.innerHTML =
                              "<h3>No time slots available.</h3>";
                          } else {
                            // Render each time slot
                            finTimmeResponse.result.forEach((slot) => {
                              // Create HTML elements for each time slot
                              const slotDiv = document.createElement("div");
                              slotDiv.className = "time-slot-option";
                              slotDiv.innerHTML = `
                                    <div>
                                        <p>UAE Time: ${slot.timeSlot}</p>
                                        <p>Available: ${slot.available}</p>
                                    </div>
                                    `;

                              // Append slotDiv to actTimeSlotDiv
                              actTimeSlotDiv.appendChild(slotDiv);
                              slotDiv.addEventListener("click", function () {
                                if (slot.available >= 1) {
                                  // Execute the following code only if tour is available
                                  sessionStorage.setItem(
                                    "timeSlot",
                                    slot.timeSlot
                                  );
                                  sessionStorage.setItem(
                                    "available",
                                    slot.available
                                  );
                                  sessionStorage.setItem(
                                    "timeSlotId",
                                    slot.timeSlotId
                                  );

                                  let tourId = sessionStorage.getItem("tourId"),
                                    optionId =
                                      sessionStorage.getItem("optionId"),
                                    adult =
                                      sessionStorage.getItem("selectedAdults"),
                                    child =
                                      sessionStorage.getItem("selectedChild"),
                                    infant =
                                      sessionStorage.getItem("selectedInfant"),
                                    tourDate =
                                      sessionStorage.getItem("selectedDate"),
                                    timeSlotId =
                                      sessionStorage.getItem("timeSlotId"),
                                    startTime =
                                      sessionStorage.getItem("startTime"),
                                    transferId =
                                      sessionStorage.getItem("transferId"),
                                    adultRate =
                                      sessionStorage.getItem("adultPrice"),
                                    childRate =
                                      sessionStorage.getItem("childPrice"),
                                    serviceTotal =
                                      sessionStorage.getItem("finalAmount");

                                  console.log(
                                    sessionStorage.getItem("timeSlot")
                                  );

                                  console.log(serviceTotal);
                                  console.log(optionId);

                                  function generateUniqueNumber() {
                                    const timestamp = Date.now().toString(); // Get current timestamp
                                    const randomNumber = Math.floor(
                                      Math.random() * 1000
                                    ).toString(); // Generate a random number between 0 and 999999
                                    return timestamp + randomNumber; // Concatenate timestamp and random number
                                  }

                                  // Generate a unique number
                                  const serviceUniqueId =
                                    generateUniqueNumber();
                                  console.log(
                                    "Unique Number:",
                                    serviceUniqueId
                                  );

                                  // Create an object representing the selected item
                                  const selectedItem = {
                                    serviceUniqueId: serviceUniqueId, // Generate a unique service ID
                                    timeSlot: slot.timeSlot,
                                    available: slot.available,
                                    timeSlotId: slot.timeSlotId,
                                    tourId: sessionStorage.getItem("tourId"),
                                    optionId:
                                      sessionStorage.getItem("optionId"),
                                    adult:
                                      sessionStorage.getItem("selectedAdults"),
                                    child:
                                      sessionStorage.getItem("selectedChild"),
                                    infant:
                                      sessionStorage.getItem("selectedInfant"),
                                    tourDate:
                                      sessionStorage.getItem("selectedDate"),
                                    startTime:
                                      sessionStorage.getItem("startTime"),
                                    transferId:
                                      sessionStorage.getItem("transferId"),
                                    adultRate:
                                      sessionStorage.getItem("adultPrice"),
                                    childRate:
                                      sessionStorage.getItem("childPrice"),
                                    serviceTotal:
                                      sessionStorage.getItem("finalAmount"),
                                  };

                                  // Add the selected item to the cart
                                  cart.push(selectedItem);
                                  sessionStorage.setItem(
                                    "cart",
                                    JSON.stringify(cart)
                                  );

                                  console.log(selectedItem);
                                  console.log(cart);
                                } else {
                                  // Display alert if no tour is available
                                  alert(
                                    "No Tour available at the selected Date. Please Select another date."
                                  );
                                }
                              });
                            });
                          }
                        }
                      } catch (error) {
                        console.error("Error:", error);
                      }
                    }
                  );
                });
              } catch (error) {
                console.error("Error::::", error);
              }
            });
          });
          // Rest of your code for displaying tour options goes here
        } else {
          console.error("act-options div not found inside DateContainer");
        }

        tourOptionsData.result.touroption.forEach(async (option) => {
          try {
            const optionDiv = document.querySelector(
              `#tour-option-${option.tourOptionId}`
            );
            //  console.log("Option Div:", optionDiv); // Ensure optionDiv is found

            // Make a new POST request for the current tourOptionId
            const optionPriceResponse = await fetch("/tour-price", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tourId: tourId,
                contractId: contractId,
                travelDate: travelDateForm,
                noOfAdult: "1",
                tourOptionId: option.tourOptionId, // Send tourOptionId in the request
              }),
            });

            if (!optionPriceResponse.ok) {
              throw new Error(
                "Price data or adult price is not available for the tour option"
              );
            }

            const optionPriceData = await optionPriceResponse.json();

            // Check if adultPrice and childPrice are available in the response
            if (
              !optionPriceData.result ||
              optionPriceData.result.length === 0 ||
              !optionPriceData.result[0].adultPrice ||
              !optionPriceData.result[0].childPrice
            ) {
              throw new Error(
                "Price data or adult/child price is not available in the response for the tour option"
              );
            }

            const increasedadultPrice = optionPriceData.result[0].adultPrice;
            const increasedchildPrice = optionPriceData.result[0].childPrice;

            // Increase the price by 12%
            let adultPrice = increasedadultPrice * 1.12;
            let childPrice = increasedchildPrice * 1.12;

            // Remove the decimal part
            adultPrice = Math.floor(adultPrice);
            childPrice = Math.floor(childPrice);

            // Create HTML elements to display adultPrice and childPrice alongside tour option
            const priceInfoDiv = document.createElement("div");
            priceInfoDiv.innerHTML = `
                <div class="d-flex flex-nowrap justify-content-between">
                    <p><strong>Adult Price:</strong> ${adultPrice} AED</p>
                    <p><strong>Child Price:</strong> ${childPrice} AED</p>
                </div>
               
            `;

            // console.log(
            //   `Fetching prices for tour option: ${option.tourOptionId}`
            //);

            // Append priceInfoDiv to optionDiv
            if (optionDiv) {
              optionDiv.appendChild(priceInfoDiv);
            }

            // console.log("Appending price info to:", optionDiv);
          } catch (error) {
            console.error("Error fetching price data for tour option:", error);
          }
        });

        // Initialize datepicker for dynamically added input
        $("#traveldate").Zebra_DatePicker({
          direction: true,
          always_visible: $(".calandercontainer"),
        });
        $("#popup-button-option").hide();
        $("#popup-button-tranfer").hide();
        // Add event listener to popup button
        const popupButton = popupContent.querySelector("#popup-button");
        const popupButtonOtions = popupContent.querySelector(
          "#popup-button-option"
        );
        const popupButtonTranfer = popupContent.querySelector(
          "#popup-button-tranfer"
        );
        popupButton.addEventListener("click", function () {
          // Remove popup content from body
          $(".date-menu").hide();
        });
        popupButtonOtions.addEventListener("click", function () {
          // Remove popup content from body
          $("#secondoptionscontainer").hide();
          $("#mfirstcontainer").show(200);
          $("#popup-button").show();
          $("#popup-button-option").hide();
          $("#transferoptionscontainer").hide();
        });
        popupButtonTranfer.addEventListener("click", function () {
          $("#transferoptionscontainer").hide();
          $("#popup-button-tranfer").hide();
          $("#popup-button-option").show();
          $("#timeslotcontainer").hide();
          $("#secondoptionscontainer").show(300);
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

        // Add event listeners for increment and decrement Infant buttons
        const incrementInfantButton =
          DateContainer.querySelector("#infantincrement");
        const decrementInfantButton =
          DateContainer.querySelector("#infantdecrement");
        const counterInfantSpan = DateContainer.querySelector("#infantcounter");
        let InfantcounterValue = 0;
        incrementInfantButton.addEventListener("click", function () {
          InfantcounterValue++;
          counterInfantSpan.textContent = InfantcounterValue;
        });
        decrementInfantButton.addEventListener("click", function () {
          if (InfantcounterValue > 0) {
            InfantcounterValue--;
            counterInfantSpan.textContent = InfantcounterValue;
          }
        });
        // Add event listener to the "Next" button
        const submitButton = DateContainer.querySelector("#adultnumbersubmit");

        submitButton.addEventListener("click", function () {
          const selectedDate = document.getElementById("traveldate").value;
          const selectedAdults = parseInt(
            document.getElementById("counter").textContent
          );
          const selectedChild = parseInt(
            document.getElementById("childcounter").textContent
          );
          const selectedInfant = parseInt(
            document.getElementById("infantcounter").textContent
          );

          if (selectedDate.trim() === "") {
            // Display an alert message if no date is selected
            alert("Please select a travel date.");
            return; // Prevent further execution
          }

          console.log("Selected Date:", selectedDate);
          console.log("Selected Adult:", selectedAdults);
          console.log("selected Child:", selectedChild);
          console.log("selected Infant:", selectedInfant);

          sessionStorage.setItem("selectedDate", selectedDate);
          sessionStorage.setItem("selectedAdults", selectedAdults);
          sessionStorage.setItem("selectedChild", selectedChild);
          sessionStorage.setItem("selectedInfant", selectedInfant);

          // Close the popup or perform any other action

          $("#mfirstcontainer").hide();
          $("#secondoptionscontainer").show(300);
          $("#transferoptionscontainer").show(300);
          $("#popup-button").hide();
          $("#popup-button-option").show();
          $("#transferoptionscontainer").hide();
        });
      });

      // Hide loading GIF and show content
      document.getElementById("loading-container").style.display = "none";
      document.getElementById("content-container").style.display = "block";
    } catch (error) {
      console.error("Error fetching data:", error);
      // Hide loading GIF even in case of error
      document.getElementById("loading-container").style.display = "none";
    }
  } else {
    console.log("No selected city found.");
  }
});
