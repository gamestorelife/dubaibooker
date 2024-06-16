document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  console.log(cart);

  const cartItemsDiv = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const removeItemFromCart = (itemId) => {
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

  let overallTotalPrice = 0;

  cart.forEach((item) => {
    const increasedFinalAmount = Math.floor(item.serviceTotal * 1.12);
    overallTotalPrice += increasedFinalAmount;
  });

  const totalPriceDiv = document.createElement("div");
  totalPriceDiv.className = "total-price";
  totalPriceDiv.innerHTML = `
  <div>
  <div class="total-price-sub"><h2>Total</h2></div>
  <div class="total-price-sub"><h1 class="total-font">${overallTotalPrice} AED</h1></div>
  <div class="total-price-sub">
  <div class="button book_button" id="pickupclick"><a>Next</a></div>
  <div class="button book_button" id="remarksclick" style="display: none;"><a>Next</a></div>
  </div>
  </div>`;
  cartItemsDiv.prepend(totalPriceDiv);

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

    tourOptionsDivs.forEach((div, index) => {
      const transferInput = div.querySelector(".transfer-input input");
      const remarksInput = div.querySelector(".remarks-input input");

      cart[index].pickupLocation = transferInput ? transferInput.value : "";
      cart[index].remarks = remarksInput ? remarksInput.value : "";
    });

    console.log(cart);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  });
});
