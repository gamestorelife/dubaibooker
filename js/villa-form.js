document.addEventListener("DOMContentLoaded", async () => {
  $("#apart-Form").on("submit", function (e) {
    e.preventDefault();

    const formData = {
      apartIndate: $("#roundedk-apart-in").val(),
      apartOutdate: $("#roundedk-apart-out").val(),
      apartAlladult: $("#qty1-apart").val(),
      apartAllKids: $(".selec-Children-apart").val(),
      apartAge1: $(".1stkid-apart").val(),
      apartAge2: $(".2kid-apart").val(),
      apartAge3: $(".3rdkid-apart").val(),
      apartAge4: $(".4rthkid-apart").val(),
      apartAge5: $(".5kid-apart").val(),
      apartAge6: $(".6kid-apart").val(),
    };

    // Validation for check-in and check-out dates
    if (!formData.apartIndate || !formData.apartOutdate) {
      alert("Please confirm both the check-in date and the check-out date.");
      return;
    }

    $.ajax({
      type: "POST",
      url: "/submit-apartment-booking",
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: function (response) {
        //alert(response.message);
        window.location.href = "/dubai-villas.html";
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  });
});
