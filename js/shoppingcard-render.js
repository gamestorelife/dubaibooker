document.addEventListener("DOMContentLoaded", () => {
  // Get the cart items from sessionStorage
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  console.log(cart);

  // Get the div where cart items will be displayed
  const cartItemsDiv = document.getElementById("cart-items");

  // Check if the cart is empty
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  // Create HTML elements for each cart item
  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
    <div class="offers_item rating_5">
    <div class="hiddin_container">
      <div class="col-lg-8">
        <div class="offers_content">
        <div class="offers_icons">
        <i class="fa-thin fa-trash-can" style="color: #4596aa; font-size: 27px;" ></i>
        </div>

          <div class="offer_header">
            <div class="tour_name"><h3>${item.tourName}</h3> </div>
            <div class="tour_name"><h4>${item.tourOtionName}</h4></div>
          </div>
         
  
          <div>
            <div class="offers_mini_container">
              <div><p class="offers_text">Travel Date:</p></div>
              <div><p class="offers_text">${item.tourDate}</p></div>
            </div>
            <div class="offers_mini_container">
              <div><p class="offers_text">Transfer Type:</p></div>
              <div><p class="offers_text">${item.transferType}</p></div>
            </div>
            <div class="offers_mini_container">
            <div><p class="offers_text">Departure:</p></div>
            <div><p class="offers_text_timing">${item.departureTime}</p></div>
          </div>
  
            <p class="offers_text">Adults: ${item.adult}</p>
            <p class="offers_text">Infants: ${item.infant}</p>
  
            <p class="offers_text">Time Slot: ${item.timeSlot}</p>
            <p class="offers_text">Start Time: ${item.startTime}</p>
  
            <p class="offers_text">Adult Rate: ${item.adultRate}</p>
            <p class="offers_text">Child Rate: ${item.childRate}</p>
            <p class="offers_text">Children: ${item.child}</p>
          </div>
  
          <div class="button book_button">
            <a >Total tour amount: ${item.serviceTotal} AED</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    
        `;

    cartItemsDiv.appendChild(itemDiv);
  });
});
