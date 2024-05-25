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
    // Increase prices by 12% and round down
    const increasedAdultPrice = Math.floor(item.adultRate * 1.12);
    const increasedChildPrice = Math.floor(item.childRate * 1.12);
    const increasedInfantPrice = Math.floor(item.infantRate * 1.12);
    const increasedFinalAmount = Math.floor(item.serviceTotal * 1.12);

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
              <div><p class="offers_text"><strong>Travel Date:</strong></.strong></p></div>
              <div><p class="offers_text">${item.tourDate}</p></div>
            </div>
            <div class="offers_mini_container">
              <div><p class="offers_text"><strong>Transfer Type:</strong></p></div>
              <div><p class="offers_text">${item.transferType}</p></div>
            </div>
            <div class="offers_mini_container">
            <div><p class="offers_text"><strong>Time Slot: </strong></p></div>
            <div><p class="offers_text">${item.timeSlot}</p></div>
            </div>
          <div class="offers_mini_container">
            <div><p class="offers_text"><strong>Departure:</strong></p></div>
            <div><p class="offers_text_timing">${item.departureTime}</p></div>
          </div>
         

          <div class="offers_mini_container">
          <div><p class="offers_text"><strong>Adults: </strong></p></div>
        
          <div class="sub_adult">
          <p class="offers_text"> ${item.adult}</p>
          <p class="offers_text">X</p>
          <p class="offers_text"> ${increasedAdultPrice}</p>
          </div>
          
          </div>

          <div class="offers_mini_container">
          <div><p class="offers_text"><strong>Children:</strong> </p></div>

          <div class="sub_adult">
          <p class="offers_text">${item.child}</p>
          <p class="offers_text"> X </p>
          <p class="offers_text"> ${increasedChildPrice}</p>
          </div>
         
          </div>

          <div class="offers_mini_container">
          <div> <p class="offers_text"><strong>Infants:</strong></p></div>
          <div> <p class="offers_text">${item.infant}</p></div>
          </div>
          <div class="offers_mini_container">
          <div></div>
          <div></div>
          </div>  
          <div class="offers_mini_container">
          <div></div>
          <div></div>
          </div>  

           

            
          </div>
  
          <div class="button book_button">
            <a >Total tour amount: ${increasedFinalAmount} AED</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    
        `;

    cartItemsDiv.appendChild(itemDiv);
  });
});
