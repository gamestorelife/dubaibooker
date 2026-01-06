document.addEventListener("DOMContentLoaded", async function () {
    const DesertSafari = document.getElementById("desertSafari");
    const AquariumZoo = document.getElementById("aquariumZoo");
    const YasWater = document.getElementById("yasWater");
    const SkyDive = document.getElementById("skyDive");
    const Burjkhalifa = document.getElementById("burjKhalifa");
    const DhowMarina = document.getElementById("DhowMarina");
    const FerraiWorld = document.getElementById("FerrariWorld");



    DesertSafari.addEventListener("click", function () {
        const tourId = 38; // Example tour ID for Desert Safari
        const contractId = 300; // Example contract ID
        const countryId = 13063; // UAE Country ID
        const cityId = 13668; // Dubai City ID
        

        const toDayDate = new Date();
        
          const day = toDayDate.getDate();
          const month = toDayDate.getMonth() + 1; // Note: month is zero-indexed, so add 1 to get the correct month
          const year = toDayDate.getFullYear();
          const travelDate = `${day}-${month}-${year}`;
          const travelDateForm = `${year}-${month}-${day}`;

          sessionStorage.setItem("tourId", tourId);
          sessionStorage.setItem("contractId", contractId);
          sessionStorage.setItem("countryId", countryId);
          sessionStorage.setItem("cityId", cityId);
          sessionStorage.setItem("travelDate", travelDate);
          sessionStorage.setItem("travelDateForm", travelDateForm);


        console.log(`Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`);
        
        const redirectUrl = `/tour-option.html`;

          // Redirect to the constructed URL
          window.location.href = redirectUrl;
});

    AquariumZoo.addEventListener("click", function () {
        const tourId = 3636; // Example tour ID for Desert Safari
        const contractId = 300; // Example contract ID
        const countryId = 13063; // UAE Country ID
        const cityId = 13668; // Dubai City ID
        

        const toDayDate = new Date();
        
          const day = toDayDate.getDate();
          const month = toDayDate.getMonth() + 1; // Note: month is zero-indexed, so add 1 to get the correct month
          const year = toDayDate.getFullYear();
          const travelDate = `${day}-${month}-${year}`;
          const travelDateForm = `${year}-${month}-${day}`;

          sessionStorage.setItem("tourId", tourId);
          sessionStorage.setItem("contractId", contractId);
          sessionStorage.setItem("countryId", countryId);
          sessionStorage.setItem("cityId", cityId);
          sessionStorage.setItem("travelDate", travelDate);
          sessionStorage.setItem("travelDateForm", travelDateForm);


        console.log(`Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`);
        
        const redirectUrl = `/tour-option.html`;

          // Redirect to the constructed URL
          window.location.href = redirectUrl;
});

    YasWater.addEventListener("click", function () {
        const tourId = 508809; // Example tour ID for Desert Safari
        const contractId = 300; // Example contract ID
        const countryId = 13063; // UAE Country ID
        const cityId = 13236; // Abu Dahbi City ID
        

        const toDayDate = new Date();
        
          const day = toDayDate.getDate();
          const month = toDayDate.getMonth() + 1; // Note: month is zero-indexed, so add 1 to get the correct month
          const year = toDayDate.getFullYear();
          const travelDate = `${day}-${month}-${year}`;
          const travelDateForm = `${year}-${month}-${day}`;

          sessionStorage.setItem("tourId", tourId);
          sessionStorage.setItem("contractId", contractId);
          sessionStorage.setItem("countryId", countryId);
          sessionStorage.setItem("cityId", cityId);
          sessionStorage.setItem("travelDate", travelDate);
          sessionStorage.setItem("travelDateForm", travelDateForm);


        console.log(`Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`);
        
        const redirectUrl = `/tour-option.html`;

          // Redirect to the constructed URL
          window.location.href = redirectUrl;
});

    SkyDive.addEventListener("click", function () {
        const tourId = 8904; // Example tour ID for Desert Safari
        const contractId = 300; // Example contract ID
        const countryId = 13063; // UAE Country ID
        const cityId = 13668; // Abu Dahbi City ID
        

        const toDayDate = new Date();
        
          const day = toDayDate.getDate();
          const month = toDayDate.getMonth() + 1; // Note: month is zero-indexed, so add 1 to get the correct month
          const year = toDayDate.getFullYear();
          const travelDate = `${day}-${month}-${year}`;
          const travelDateForm = `${year}-${month}-${day}`;

          sessionStorage.setItem("tourId", tourId);
          sessionStorage.setItem("contractId", contractId);
          sessionStorage.setItem("countryId", countryId);
          sessionStorage.setItem("cityId", cityId);
          sessionStorage.setItem("travelDate", travelDate);
          sessionStorage.setItem("travelDateForm", travelDateForm);


        console.log(`Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`);
        
        const redirectUrl = `/tour-option.html`;

          // Redirect to the constructed URL
          window.location.href = redirectUrl;
});

    Burjkhalifa.addEventListener("click", function () {
        const tourId = 508760; // Example tour ID for Desert Safari
        const contractId = 300; // Example contract ID
        const countryId = 13063; // UAE Country ID
        const cityId = 13668; // Abu Dahbi City ID
        

        const toDayDate = new Date();
        
          const day = toDayDate.getDate();
          const month = toDayDate.getMonth() + 1; // Note: month is zero-indexed, so add 1 to get the correct month
          const year = toDayDate.getFullYear();
          const travelDate = `${day}-${month}-${year}`;
          const travelDateForm = `${year}-${month}-${day}`;

          sessionStorage.setItem("tourId", tourId);
          sessionStorage.setItem("contractId", contractId);
          sessionStorage.setItem("countryId", countryId);
          sessionStorage.setItem("cityId", cityId);
          sessionStorage.setItem("travelDate", travelDate);
          sessionStorage.setItem("travelDateForm", travelDateForm);


        console.log(`Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`);
        
        const redirectUrl = `/tour-option.html`;

          // Redirect to the constructed URL
          window.location.href = redirectUrl;
});

    DhowMarina.addEventListener("click", function () {
        const tourId = 87; // Example tour ID for Desert Safari
        const contractId = 300; // Example contract ID
        const countryId = 13063; // UAE Country ID
        const cityId = 13668; // Abu Dahbi City ID
        

        const toDayDate = new Date();
        
          const day = toDayDate.getDate();
          const month = toDayDate.getMonth() + 1; // Note: month is zero-indexed, so add 1 to get the correct month
          const year = toDayDate.getFullYear();
          const travelDate = `${day}-${month}-${year}`;
          const travelDateForm = `${year}-${month}-${day}`;

          sessionStorage.setItem("tourId", tourId);
          sessionStorage.setItem("contractId", contractId);
          sessionStorage.setItem("countryId", countryId);
          sessionStorage.setItem("cityId", cityId);
          sessionStorage.setItem("travelDate", travelDate);
          sessionStorage.setItem("travelDateForm", travelDateForm);


        console.log(`Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`);
        
        const redirectUrl = `/tour-option.html`;

          // Redirect to the constructed URL
          window.location.href = redirectUrl;
});

    FerraiWorld.addEventListener("click", function () {
        const tourId = 186; // Example tour ID for Desert Safari
        const contractId = 300; // Example contract ID
        const countryId = 13063; // UAE Country ID
        const cityId = 13668; // Abu Dahbi City ID
        

        const toDayDate = new Date();
        
          const day = toDayDate.getDate();
          const month = toDayDate.getMonth() + 1; // Note: month is zero-indexed, so add 1 to get the correct month
          const year = toDayDate.getFullYear();
          const travelDate = `${day}-${month}-${year}`;
          const travelDateForm = `${year}-${month}-${day}`;

          sessionStorage.setItem("tourId", tourId);
          sessionStorage.setItem("contractId", contractId);
          sessionStorage.setItem("countryId", countryId);
          sessionStorage.setItem("cityId", cityId);
          sessionStorage.setItem("travelDate", travelDate);
          sessionStorage.setItem("travelDateForm", travelDateForm);


        console.log(`Clicked on tourId: ${tourId}, contractId: ${contractId}, ${countryId}, ${cityId}`);
        
        const redirectUrl = `/tour-option.html`;

          // Redirect to the constructed URL
          window.location.href = redirectUrl;
});




});