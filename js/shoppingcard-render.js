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
                  <div class="row">
                   
                    <div class="col-lg-8">
                      <div class="offers_content">
                        <h3>${item.tourName}</h3>
						<h4>${item.tourOtionName}</h4>
                        <p class="offers_text">Tour ID: ${item.tourId}</p>
						<p class="offers_text">Option ID: ${item.optionId}</p>
						<p class="offers_text">Adults: ${item.adult}</p>
						<p class="offers_text">Infants: ${item.infant}</p>
						<p class="offers_text">Date: ${item.tourDate}</p>
						<p class="offers_text">Time Slot: ${item.timeSlot}</p>
						<p class="offers_text">Start Time: ${item.startTime}</p>
						<p class="offers_text">Transfer ID: ${item.transferId}</p>
						<p class="offers_text">Adult Rate: ${item.adultRate}</p>
						<p class="offers_text">Child Rate: ${item.childRate}</p>
						<p class="offers_text">Children: ${item.child}</p>
						<div class="offers_price"><span>Total Service Amount: ${item.serviceTotal} AED</span></div>
                        <div class="offers_icons"></div>
                        <div class="button book_button">
                          <a href="#">book<span></span><span></span><span></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
     
        `;

    cartItemsDiv.appendChild(itemDiv);
  });
});
