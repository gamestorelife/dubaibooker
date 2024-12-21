document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("cart-items").style.height = "revert-layer";
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  console.log(cart);

  // Check if the local cart is empty, if so, fetch from online session
  if (cart.length === 0) {
    try {
      const response = await fetch("/cart-session");
      if (response.ok) {
        const data = await response.json();
        console.log("Cart fetched from online session:", data);
        cart = data.cartItems; // Set cart to the data from the online session

        // Store the fetched cart in sessionStorage to keep it locally
        sessionStorage.setItem("cart", JSON.stringify(cart));
      } else {
        console.log("No cart found in the online session");
      }
    } catch (error) {
      console.error("Error fetching cart from online session:", error);
    }
  }

  const cartItemsDiv = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const removeItemFromCart = (itemId) => {
    const itemToRemove = cart[itemId];
    // Step 1: Remove item from the online session via DELETE request
    fetch(`/remove-from-cart/${itemToRemove.serviceUniqueId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("Failed to remove item from online session");
        }
      })
      .then((data) => {
        console.log("Item removed from online session:", data.message);

        // Step 2: Remove the item from local session (sessionStorage)
        // Remove the item locally from the cart array and update sessionStorage
        cart.splice(itemId, 1);
        sessionStorage.setItem("cart", JSON.stringify(cart));

        // Reload the page to reflect the updated cart
        // location.reload();
      })
      .catch((error) => {
        console.error("Error during removal:", error);
      });

    fetch(`/remove-from-cart/${itemId}`, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        cart.splice(itemId, 1);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
      })
      .catch((error) => console.error("Error:", error));
  };

  // Prepare description for payment link based on tour options
  let tourOptionsDescriptions = cart.map((item) => item.tourName);

  let description;
  if (tourOptionsDescriptions.length === 1) {
    description = tourOptionsDescriptions[0];
  } else {
    description = tourOptionsDescriptions.join(", ");
  }

  let overallTotalPrice = 0;

  cart.forEach((item) => {
    const increasedFinalAmount = Math.floor(item.serviceTotal * 1.12);
    overallTotalPrice += increasedFinalAmount;
  });

  const totalPriceDiv = document.createElement("div");
  totalPriceDiv.className = "total-price";
  totalPriceDiv.innerHTML = `
  <div style="width: 100%;">
  <div class="back-cart">
  <div class="back-button">
  <div style="display: none;" id="backbutton" >
  <i class="fa-duotone fa-left-to-line fa-lg"></i>
  </div>
  </div>
  <div class="back-button">
  <div class="cart-itmes-number">${cart.length}</div>
    <i class="fa-solid fa-cart-shopping"></i>  
  </div>
  </div>
  <div class="total-price-sub"><h2>Total</h2></div>
  <div class="total-price-sub"><h1 class="total-font">${overallTotalPrice} AED</h1></div>

  </div>`;

  // Append total price and buttons dynamically
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "total-price-subbutton";
  buttonContainer.innerHTML = `
  <div class="button book_button" id="pickupclick"><a>Next</a></div>
  <div class="button book_button" id="remarksclick" style="display: none;"><a>Next</a></div>
  <div class="button book_button" id="multipaymentclick" style="display: none;"><a>Pay Now</a></div>
`;

  // // Remove it from its parent if needed
  // if (buttonContainer) {
  //   buttonContainer.parentNode.removeChild(buttonContainer);
  // }

  cartItemsDiv.appendChild(totalPriceDiv);

  // cartItemsDiv.appendChild(buttonContainer);

  // if (cartItemsDiv) {
  //   cartItemsDiv.appendChild(buttonContainer);
  // }
  function ensureElementAtBottom(parent, element) {
    // Remove the element if it exists
    if (parent.contains(element)) {
      parent.removeChild(element);
    }
    // Append the element to ensure it's always the last child
    parent.appendChild(element);
  }

  // Ensure buttonContainer is always at the bottom
  //ensureElementAtBottom(cartItemsDiv, buttonContainer);

  cart.forEach((item, index) => {
    const increasedAdultPrice = Math.floor(item.adultRate * 1.12);
    const increasedChildPrice = Math.floor(item.childRate * 1.12);
    const increasedInfantPrice = Math.floor(item.infantRate * 1.12);
    const increasedFinalAmount = Math.floor(item.serviceTotal * 1.12);

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.id = `item-${index}`;

    itemDiv.innerHTML = `
    <div class="offers_item rating_5" id="allitemsincart">
      <div class="hiddin_container">
        <div class="col-lg-8">
          <div class="offers_content">
            <div class="offers_icons">
              <div class="removeitem" data-id="${index}">
                <i class="fa-thin fa-trash-can" style="color: #4596aa; font-size: 27px;"></i>
              </div>
            </div>

            <div class="offer_header">
              <div class="tour_name"><h3>${item.tourName}</h3></div>
              <div class="tour_name"><h4>${item.tourOtionName}</h4></div>
            </div>

            <div>
              <div class="offers_mini_container">
                <div><p class="offers_text"><strong>Travel Date:</strong></p></div>
                <div><p class="offers_text">${item.tourDate}</p></div>
              </div>
              <div class="offers_mini_container">
                <div><p class="offers_text"><strong>Transfer Type:</strong></p></div>
                <div><p class="offers_text">${item.transferType}</p></div>
              </div>
              <div class="offers_mini_container">
                <div><p class="offers_text"><strong>Time Slot:</strong></p></div>
                <div><p class="offers_text">${item.timeSlot}</p></div>
              </div>
              <div class="offers_mini_container">
                <div><p class="offers_text"><strong>Departure:</strong></p></div>
                <div><p class="offers_text">${item.departureTime}</p></div>
              </div>
              <div class="offers_mini_container">
                <div><p class="offers_text"><strong>Duration:</strong></p></div>
                <div><p class="offers_text">${item.duration}</p></div>
              </div>

              <div class="offers_mini_container">
                <div><p class="offers_text"><strong>Adults:</strong></p></div>
                <div class="sub_adult">
                  <p class="offers_text">${item.adult}</p>
                  <p class="offers_text">X</p>
                  <p class="offers_text">${increasedAdultPrice}</p>
                </div>
              </div>

              <div class="offers_mini_container">
                <div><p class="offers_text"><strong>Children:</strong></p></div>
                <div class="sub_adult">
                  <p class="offers_text">${item.child}</p>
                  <p class="offers_text">X</p>
                  <p class="offers_text">${increasedChildPrice}</p>
                </div>
              </div>

              <div class="offers_mini_container">
                <div><p class="offers_text"><strong>Infants:</strong></p></div>
                <div><p class="offers_text">${item.infant}</p></div>
              </div>
            </div>

            <div class="button total_book">
            <div> <a>Total tour amount: ${increasedFinalAmount} AED</a></div>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;

    cartItemsDiv.appendChild(itemDiv);

    itemDiv.querySelector(".removeitem").addEventListener("click", () => {
      removeItemFromCart(index);
    });
  });

  document.getElementById("pickupclick").addEventListener("click", () => {
    $(".cart-item").hide();
    $("#pickupclick").hide();
    $("#remarksclick").show();
    $("#backbutton").show();

    const newDiv = document.createElement("div");
    newDiv.id = "tour-options";

    cart.forEach((item, index) => {
      const tourOptionDiv = document.createElement("div");
      tourOptionDiv.className = "tour-option";

      tourOptionDiv.innerHTML = `
      <div class="pickupmainstyle">
      <div><h3>${item.tourOtionName}</h3></div>
      <div class="transfer-input"> ${
        item.transferType === "Without Transfers"
          ? "<p>No Transfers Direct To Location.</p>"
          : '<input class="pickupinputtyle" type="text" placeholder="Pick Up Location">'
      }</div>
      <div class="remarks-input"><input class="pickupinputtyle" type="text" placeholder="Remarks"></div>
      </div>
      `;

      newDiv.appendChild(tourOptionDiv);
    });

    cartItemsDiv.appendChild(newDiv);
  });

  document.getElementById("remarksclick").addEventListener("click", () => {
    const tourOptionsDivs = document.querySelectorAll(
      "#tour-options .tour-option"
    );

    let allFilled = true;

    tourOptionsDivs.forEach((div, index) => {
      const transferInput = div.querySelector(".transfer-input input");
      const remarksInput = div.querySelector(".remarks-input input");

      if (transferInput && !transferInput.value.trim()) {
        allFilled = false;
      }

      cart[index].pickupLocation = transferInput ? transferInput.value : "";
      cart[index].remarks = remarksInput ? remarksInput.value : "";
    });

    if (!allFilled) {
      alert("Sorry, we need to have the pick-up location.");
      return;
    }

    $("#remarksclick").hide();
    $("#tour-options").hide();
    $("#multipaymentclick").show();

    console.log(cart);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    guestdetails();
  });

  function guestdetails() {
    const formDiv = document.createElement("div");
    formDiv.className = "form-container";

    formDiv.innerHTML = `
      <div>
      <div><label for="title">Title:</label></div>
        <div>
          <select id="title" name="title">
            <option value="Mr.">MR</option>
            <option value="Mrs.">MRS</option>
            <option value="Ms.">MS</option>
          </select>
        </div>  
      </div>
      <div>
        <div><label for="firstName">First Name:</label></div>
        <div><input type="text" id="firstName" name="firstName"></div>
      </div>
      <div>
        <div><label for="lastName">Last Name:</label></div>
         <div><input type="text" id="lastName" name="lastName"></div> 
      </div>
      <div>
       <div><label for="email">Email ID:</label></div>
       <div><input type="email" id="email" name="email"></div>
      </div>
      <div>
      <div><label for="country">Country:</label></div>
      <div>
          <select id="country" name="country">
          <!-- Options for countries will be added here -->
        </select>
      </div>  
      </div>
      <div>
      <div><label for="phone">Phone Number:</label></div>
      <div><input type="tel" id="phone" name="phone"></div>  
      </div>
    `;

    const countries = ["USA", "Canada", "UK", "Australia", "India", "UAE"]; // Add all countries here
    const countrySelect = formDiv.querySelector("#country");
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });

    cartItemsDiv.appendChild(formDiv);

    document
      .getElementById("multipaymentclick")
      .addEventListener("click", () => {
        const formContainer = document.querySelector(".form-container");

        const title = formContainer.querySelector("#title").value;
        const firstName = formContainer.querySelector("#firstName").value;
        const lastName = formContainer.querySelector("#lastName").value;
        const email = formContainer.querySelector("#email").value;
        const country = formContainer.querySelector("#country").value;
        const phone = formContainer.querySelector("#phone").value;

        if (
          !title.trim() ||
          !firstName.trim() ||
          !lastName.trim() ||
          !email.trim() ||
          !country.trim() ||
          !phone.trim()
        ) {
          alert("We Are sorry we need to have Passenger details");
          return;
        }

        const passengers = {
          serviceType: "tour",
          prefix: title,
          firstName,
          lastName,
          email,
          mobile: phone,
          nationality: country,
          message: "",
          leadPassenger: 1,
          paxType: "Adult",
          clientReferenceNo: 1,
        };

        const uniqueNo = generateUniqueNo();
        const newCart = {
          uniqueNo,
          count: cart.length,
          TourDetails: cart.map((item, index) => ({
            serviceUniqueId: item.serviceUniqueId,
            tourId: item.tourId,
            optionId: item.optionId,
            adult: item.adult,
            child: item.child,
            infant: item.infant,
            tourDate: item.tourDate,
            timeSlotId: item.timeSlotId,
            startTime: item.startTime,
            transferId: item.transferId,
            pickup: item.pickupLocation || item.pickup,
            adultRate: item.adultRate,
            childRate: item.childRate,
            serviceTotal: item.serviceTotal,
          })),
          passengers: [passengers],
        };

        console.log("Final Cart Data:", newCart);

        // Make the POST request to /save-cart
        fetch("/save-cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCart),
          credentials: "include",
        })
          .then((response) => response.text())
          .then((result) => {
            console.log("Cart saved successfully:", result);
          });

        // Send cart data to backend
        fetch("/user-booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCart),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);

            // Now create the payment link
            fetch("/create-payment-link", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: passengers.lastName,
                first_name: passengers.firstName,
                last_name: passengers.lastName,
                description: description,
                active: true,
                return_url: "http://localhost:3000/cardrender.html",
                failure_return_url:
                  "https://www.dubaibooker.com/cardrender.html",
                processing_fee_percentage: 3.6,
                booking_id: data.bookingId,
                amount: overallTotalPrice,
                amount_currency: "AED",
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.payment_url) {
                  // Redirect to the payment URL
                  window.location.href = data.payment_url;
                } else {
                  console.error("Payment link creation failed:", data);
                }
              })

              .catch((error) => {
                console.error("Error creating payment link:", error);
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
  }

  function generateUniqueNo() {
    const timestamp = Date.now().toString(); // Get current timestamp
    const randomNumber = Math.floor(Math.random() * 1000).toString(); // Generate a random number between 0 and 999999
    return timestamp + randomNumber; // Concatenate timestamp and random number
  }

  document.getElementById("backbutton").addEventListener("click", () => {
    location.reload();
  });
});
