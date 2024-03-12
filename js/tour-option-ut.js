
document.addEventListener("DOMContentLoaded", async function () {

    const tourId = sessionStorage.getItem('tourId');
    const contractId = sessionStorage.getItem('contractId');
    const countryId = sessionStorage.getItem('countryId');
    const cityId = sessionStorage.getItem('cityId');
    const travelDate = sessionStorage.getItem('travelDate');

   
    console.log(`Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`);
    console.log(travelDate);


});