// Iterate over each tour option in the response
tourOptions.forEach(async (option) => {
  try {
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

    const adultPrice = optionPriceData.result[0].adultPrice;
    const childPrice = optionPriceData.result[0].childPrice;

    // Create HTML elements to display adultPrice and childPrice alongside tour option
    const priceInfoDiv = document.createElement("div");
    priceInfoDiv.innerHTML = `
            <p>Adult Price: ${adultPrice}</p>
            <p>Child Price: ${childPrice}</p>
        `;

    // Find the corresponding optionDiv by its tourOptionId
    const optionDiv = document.querySelector(
      `#tour-option-${option.tourOptionId}`
    );

    // Append priceInfoDiv to optionDiv
    if (optionDiv) {
      optionDiv.appendChild(priceInfoDiv);
    }
  } catch (error) {
    console.error("Error fetching price data for tour option:", error);
  }
});
