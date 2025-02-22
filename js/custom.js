/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Home Slider
4. Init Menu
5. Init Search
6. Init CTA Slider
7. Init Testimonials Slider
8. Init Search Form


******************************/

window.onload = function () {
  var loadingDiv = document.getElementById("loader");
  loadingDiv.style.display = "none";
  $("#good-div").removeClass("main-hide");
};

$("#up-logo").click(function () {
  window.location.reload(true);
  console.log("Cash is cleard");
});

$(function () {
  $(".menu2").addClass("hiddenm");
  $(".menu2-hotel").addClass("hiddenm");
  $(".menu2-apart").addClass("hiddenm");
  $(".menu2-services").addClass("hiddenm");
  $(".mkids-age1").hide();
  $(".mkids-age2").hide();
  $(".mkids-age3").hide();
  $(".mkids-age4").hide();
  $(".mkids-age5").hide();
  $(".mkids-age6").hide();

  $(".mkids-apart-age1").hide();
  $(".mkids-apart-age2").hide();
  $(".mkids-apart-age3").hide();
  $(".mkids-apart-age4").hide();
  $(".mkids-apart-age5").hide();
  $(".mkids-apart-age6").hide();

  $("#add-drop-location").hide();
  $("#add-drop-location-return").hide();
  $(".mkids-hotel-age1").hide();
  $(".mkids-hotel-age2").hide();
  $(".mkids-hotel-age3").hide();
  $(".mkids-hotel-age4").hide();
  $(".mkids-hotel-age5").hide();
  $(".mkids-hotel-age6").hide();
  $(".mkids-hotelR1-age1").hide();
  $(".mkids-hotelR1-age2").hide();
  $(".mkids-hotelR1-age3").hide();
  $(".mkids-hotelR1-age4").hide();
  $(".mkids-hotelR1-age5").hide();
  $(".mkids-hotelR1-age6").hide();

  $(".mkids-hotelR3-age1").hide();
  $(".mkids-hotelR3-age2").hide();
  $(".mkids-hotelR3-age3").hide();
  $(".mkids-hotelR3-age4").hide();
  $(".mkids-hotelR3-age5").hide();
  $(".mkids-hotelR3-age6").hide();

  $(".mkids-hotelR4-age1").hide();
  $(".mkids-hotelR4-age2").hide();
  $(".mkids-hotelR4-age3").hide();
  $(".mkids-hotelR4-age4").hide();
  $(".mkids-hotelR4-age5").hide();
  $(".mkids-hotelR4-age6").hide();

  $(".mkids-services-age1").hide();
  $(".mkids-services-age2").hide();
  $(".mkids-services-age3").hide();
  $(".mkids-services-age4").hide();
  $(".mkids-services-age5").hide();
  $(".mkids-services-age6").hide();

  $(".red-notification").hide();
  $(".red-notification-hotel").hide();
  $(".red-notificationR1-hotel").hide();
  $(".red-notificationR3-hotel").hide();
  $(".red-notificationR4-hotel").hide();
  $(".red-notification-apart").hide();
  $(".red-notification-services").hide();

  $(".dash-book-trans").hide();
  $(".dash-hire-driv").hide();
  $("#return-day").hide();

  $("#dash-room2").hide();
  $("#dash-room3").hide();
  $("#dash-room4").hide();
});

$(document).ready(function () {
  $(".home_slider").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust autoplay speed as needed
    loop: true,
    nav: true,
    dots: false,
  });

  $(".selec-Children").on("change", function () {
    if ($(".selec-Children").val() == "0") kidz();
    else if ($(".selec-Children").val() == "1") kid1();
    else if ($(".selec-Children").val() == "2") kid2();
    else if ($(".selec-Children").val() == "3") kid3();
    else if ($(".selec-Children").val() == "4") kid4();
    else if ($(".selec-Children").val() == "5") kid5();
    else if ($(".selec-Children").val() == "6") kid6();
  });

  $(".selec-Rooms-hotel").on("change", function () {
    if ($(".selec-Rooms-hotel").val() == "1") hideAllRooms();
    else if ($(".selec-Rooms-hotel").val() == "2") showRoom2();
    else if ($(".selec-Rooms-hotel").val() == "3") showRoom3();
    else if ($(".selec-Rooms-hotel").val() == "4") showRoom4();
  });

  $(".selec-Children-hotel").on("change", function () {
    if ($(".selec-Children-hotel").val() == "0") kidzHotel();
    else if ($(".selec-Children-hotel").val() == "1") kid1Hotel();
    else if ($(".selec-Children-hotel").val() == "2") kid2Hotel();
    else if ($(".selec-Children-hotel").val() == "3") kid3Hotel();
    else if ($(".selec-Children-hotel").val() == "4") kid4Hotel();
    else if ($(".selec-Children-hotel").val() == "5") kid5Hotel();
    else if ($(".selec-Children-hotel").val() == "6") kid6Hotel();
  });

  $(".selec-Children-hotelR1").on("change", function () {
    if ($(".selec-Children-hotelR1").val() == "0") kidzHotelR1();
    else if ($(".selec-Children-hotelR1").val() == "1") kid1HotelR1();
    else if ($(".selec-Children-hotelR1").val() == "2") kid2HotelR1();
    else if ($(".selec-Children-hotelR1").val() == "3") kid3HotelR1();
    else if ($(".selec-Children-hotelR1").val() == "4") kid4HotelR1();
    else if ($(".selec-Children-hotelR1").val() == "5") kid5HotelR1();
    else if ($(".selec-Children-hotelR1").val() == "6") kid6HotelR1();
  });

  $(".selec-Children-hotelR3").on("change", function () {
    if ($(".selec-Children-hotelR3").val() == "0") kidzHotelR3();
    else if ($(".selec-Children-hotelR3").val() == "1") kid1HotelR3();
    else if ($(".selec-Children-hotelR3").val() == "2") kid2HotelR3();
    else if ($(".selec-Children-hotelR3").val() == "3") kid3HotelR3();
    else if ($(".selec-Children-hotelR3").val() == "4") kid4HotelR3();
    else if ($(".selec-Children-hotelR3").val() == "5") kid5HotelR3();
    else if ($(".selec-Children-hotelR3").val() == "6") kid6HotelR3();
  });

  $(".selec-Children-hotelR4").on("change", function () {
    if ($(".selec-Children-hotelR4").val() == "0") kidzHotelR4();
    else if ($(".selec-Children-hotelR4").val() == "1") kid1HotelR4();
    else if ($(".selec-Children-hotelR4").val() == "2") kid2HotelR4();
    else if ($(".selec-Children-hotelR4").val() == "3") kid3HotelR4();
    else if ($(".selec-Children-hotelR4").val() == "4") kid4HotelR4();
    else if ($(".selec-Children-hotelR4").val() == "5") kid5HotelR4();
    else if ($(".selec-Children-hotelR4").val() == "6") kid6HotelR4();
  });

  $(".selec-Children-apart").on("change", function () {
    if ($(".selec-Children-apart").val() == "0") kidzApart();
    else if ($(".selec-Children-apart").val() == "1") kid1Apart();
    else if ($(".selec-Children-apart").val() == "2") kid2Apart();
    else if ($(".selec-Children-apart").val() == "3") kid3Apart();
    else if ($(".selec-Children-apart").val() == "4") kid4Apart();
    else if ($(".selec-Children-apart").val() == "5") kid5Apart();
    else if ($(".selec-Children-apart").val() == "6") kid6Apart();
  });

  $(".selec-Children-services").on("change", function () {
    if ($(".selec-Children-services").val() == "0") kidzServices();
    else if ($(".selec-Children-services").val() == "1") kid1Services();
    else if ($(".selec-Children-services").val() == "2") kid2Services();
    else if ($(".selec-Children-services").val() == "3") kid3Services();
    else if ($(".selec-Children-services").val() == "4") kid4Services();
    else if ($(".selec-Children-services").val() == "5") kid5Services();
    else if ($(".selec-Children-services").val() == "6") kid6Services();
  });

  $(".1stkid").on("change", function () {
    if ($(".1stkid").val() == "0") doAge();
    else if ($(".1stkid").val() >= "1") agelogic1();
  });

  /*Activity Logic*/

  function agelogic1() {
    if (($(".selec-Children").val() >= "2") & ($(".2kid").val() == "0"))
      doAge();
    if ($(".selec-Children").val() == "1") ageDone();
    if ($(".selec-Children").val() == "2") re1l2();
    if ($(".selec-Children").val() == "3") re1l3();
    if ($(".selec-Children").val() == "4") re1l4();
    if ($(".selec-Children").val() == "5") re1l5();
    if ($(".selec-Children").val() == "6") re1l6();
  }
  function re1l2() {
    if ($(".2kid").val() == "0") doAge();
    else if ($(".2kid").val() >= "1" && $(".1stkid").val() >= "1") ageDone();
  }
  function re1l3() {
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if (
      $(".3rdkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".1stkid").val() >= "1"
    )
      ageDone();
  }
  function re1l4() {
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    else if (
      $(".4rthkid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".1stkid").val() >= "1"
    )
      ageDone();
  }
  function re1l5() {
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    else if (
      $(".5kid").val() >= "1" &&
      $(".4rthkid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".1stkid").val() >= "1"
    )
      ageDone();
  }
  function re1l6() {
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    if ($(".6kid").val() == "0") doAge();
    else if (
      $(".6kid").val() >= "1" &&
      $(".5kid").val() >= "1" &&
      $(".4rthkid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".1stkid").val() >= "1"
    )
      ageDone();
  }

  /*HOtel Logic*/

  $(".1stkid-hotel").on("change", function () {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    else if ($(".1stkid-hotel").val() >= "1") agelogic1hotel();
  });

  function agelogic1hotel() {
    if (
      ($(".selec-Children-hotel").val() >= "2") &
      ($(".2kid-hotel").val() == "0")
    )
      doAgeHotel();
    if ($(".selec-Children-hotel").val() == "1") ageDoneHotel();
    if ($(".selec-Children-hotel").val() == "2") re1l2Hotel();
    if ($(".selec-Children-hotel").val() == "3") re1l3Hotel();
    if ($(".selec-Children-hotel").val() == "4") re1l4Hotel();
    if ($(".selec-Children-hotel").val() == "5") re1l5Hotel();
    if ($(".selec-Children-hotel").val() == "6") re1l6Hotel();
  }

  function re1l2Hotel() {
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    else if ($(".2kid-hotel").val() >= "1" && $(".1stkid-hotel").val() >= "1")
      ageDoneHotel();
  }

  function re1l3Hotel() {
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if (
      $(".3rdkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  function re1l4Hotel() {
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".4rthkid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  function re1l5Hotel() {
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".5kid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  function re1l6Hotel() {
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    if ($(".6kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".6kid-hotel").val() >= "1" &&
      $(".5kid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }

  /* End hotel Logic1*/

  /* Hotel Logic1 Room2*/

  $(".1stkid-R2hotel").on("change", function () {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".1stkid-R2hotel").val() >= "1") ageR2logic1hotel();
  });

  function ageR2logic1hotel() {
    if (
      ($(".selec-Children-hotelR1").val() >= "2") &
      ($(".2kid-R2hotel").val() == "0")
    )
      doAgeR2Hotel();
    if ($(".selec-Children-hotelR1").val() == "1") ageDoneR2Hotel();
    if ($(".selec-Children-hotelR1").val() == "2") re1l2HotelR2();
    if ($(".selec-Children-hotelR1").val() == "3") re1l3HotelR2();
    if ($(".selec-Children-hotelR1").val() == "4") re1l4HotelR2();
    if ($(".selec-Children-hotelR1").val() == "5") re1l5HotelR2();
    if ($(".selec-Children-hotelR1").val() == "6") re1l6HotelR2();
  }
  function re1l2HotelR2() {
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".2kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }
  function re1l3HotelR2() {
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if (
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }
  function re1l4HotelR2() {
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".4rthkid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }
  function re1l5HotelR2() {
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".5kid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }
  function re1l6HotelR2() {
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".6kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".6kid-R2hotel").val() >= "1" &&
      $(".5kid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }

  /* End Hotel Logic1 Room2*/

  /*  Hotel Logic1 Room3*/

  $(".1stkid-R3hotel").on("change", function () {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".1stkid-R3hotel").val() >= "1") ageR3logic1hotel();
  });

  function ageR3logic1hotel() {
    if (
      ($(".selec-Children-hotelR3").val() >= "2") &
      ($(".2kid-R3hotel").val() == "0")
    )
      doAgeR3Hotel();
    if ($(".selec-Children-hotelR3").val() == "1") ageDoneR3Hotel();
    if ($(".selec-Children-hotelR3").val() == "2") re1l2HotelR3();
    if ($(".selec-Children-hotelR3").val() == "3") re1l3HotelR3();
    if ($(".selec-Children-hotelR3").val() == "4") re1l4HotelR3();
    if ($(".selec-Children-hotelR3").val() == "5") re1l5HotelR3();
    if ($(".selec-Children-hotelR3").val() == "6") re1l6HotelR3();
  }

  function re1l2HotelR3() {
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".2kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }
  function re1l3HotelR3() {
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if (
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  function re1l4HotelR3() {
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".4rthkid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }
  function re1l5HotelR3() {
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".5kid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }
  function re1l6HotelR3() {
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".6kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".6kid-R3hotel").val() >= "1" &&
      $(".5kid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  /* End Hotel Logic1 Room3*/

  /*   Hotel Logic1 Room4*/

  $(".1stkid-R4hotel").on("change", function () {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".1stkid-R4hotel").val() >= "1") ageR4logic1hotel();
  });

  function ageR4logic1hotel() {
    if (
      ($(".selec-Children-hotelR4").val() >= "2") &
      ($(".2kid-R4hotel").val() == "0")
    )
      doAgeR4Hotel();
    if ($(".selec-Children-hotelR4").val() == "1") ageDoneR4Hotel();
    if ($(".selec-Children-hotelR4").val() == "2") re1l2HotelR4();
    if ($(".selec-Children-hotelR4").val() == "3") re1l3HotelR4();
    if ($(".selec-Children-hotelR4").val() == "4") re1l4HotelR4();
    if ($(".selec-Children-hotelR4").val() == "5") re1l5HotelR4();
    if ($(".selec-Children-hotelR4").val() == "6") re1l6HotelR4();
  }

  function re1l2HotelR4() {
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".2kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  function re1l3HotelR4() {
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if (
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  function re1l4HotelR4() {
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".4rthkid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4	hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  function re1l5HotelR4() {
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".5kid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }
  function re1l6HotelR4() {
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".6kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".6kid-R4hotel").val() >= "1" &&
      $(".5kid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  /* End Hotel Logic1 Room4*/

  /*   Apartment Logic 1 */

  $(".1stkid-apart").on("change", function () {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    else if ($(".1stkid-apart").val() >= "1") agelogic1Apart();
  });

  function agelogic1Apart() {
    if (
      ($(".selec-Children-apart").val() >= "2") &
      ($(".2kid-apart").val() == "0")
    )
      doAgeApart();
    if ($(".selec-Children-apart").val() == "1") ageDoneApart();
    if ($(".selec-Children-apart").val() == "2") re1l2Apart();
    if ($(".selec-Children-apart").val() == "3") re1l3Apart();
    if ($(".selec-Children-apart").val() == "4") re1l4Apart();
    if ($(".selec-Children-apart").val() == "5") re1l5Apart();
    if ($(".selec-Children-apart").val() == "6") re1l6Apart();
  }

  function re1l2Apart() {
    if ($(".2kid-apart").val() == "0") doAgeApart();
    else if ($(".2kid-apart").val() >= "1" && $(".1stkid-apart").val() >= "1")
      ageDoneApart();
  }

  function re1l3Apart() {
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if (
      $(".3rdkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1"
    )
      ageDoneApart();
  }
  function re1l4Apart() {
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    else if (
      $(".4rthkid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1"
    )
      ageDoneApart();
  }
  function re1l5Apart() {
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    else if (
      $(".5kid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1"
    )
      ageDoneApart();
  }
  function re1l6Apart() {
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    if ($(".6kid-apart").val() == "0") doAgeApart();
    else if (
      $(".6kid-apart").val() >= "1" &&
      $(".5kid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1"
    )
      ageDoneApart();
  }

  /* End  Apartement Logics 1 */

  /*    Services Logics1 */

  $(".1stkid-services").on("change", function () {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    else if ($(".1stkid-services").val() >= "1") agelogic1Services();
  });

  function agelogic1Services() {
    if (
      ($(".selec-Children-services").val() >= "2") &
      ($(".2kid-services").val() == "0")
    )
      doAgeServices();
    if ($(".selec-Children-services").val() == "1") doAgeServices();
    if ($(".selec-Children-services").val() == "2") re1l2Services();
    if ($(".selec-Children-services").val() == "3") re1l3Services();
    if ($(".selec-Children-services").val() == "4") re1l4Services();
    if ($(".selec-Children-services").val() == "5") re1l5Services();
    if ($(".selec-Children-services").val() == "6") re1l6Services();
  }

  function re1l2Services() {
    if ($(".2kid-services").val() == "0") doAgeServices();
    else if (
      $(".2kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1"
    )
      ageDoneServices();
  }

  function re1l3Services() {
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if (
      $(".3rdkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1"
    )
      ageDoneServices();
  }
  function re1l4Services() {
    if ($(".2kid-apart").val() == "0") doAgeServices();
    if ($(".3rdkid-apart").val() == "0") doAgeServices();
    if ($(".4rthkid-apart").val() == "0") doAgeServices();
    else if (
      $(".4rthkid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1"
    )
      ageDoneServices();
  }
  function re1l5Services() {
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".5kid-services").val() == "0") doAgeServices();
    else if (
      $(".5kid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1"
    )
      ageDoneServices();
  }
  function re1l6Services() {
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".5kid-services").val() == "0") doAgeServices();
    if ($(".6kid-services").val() == "0") doAgeServices();
    else if (
      $(".6kid-services").val() >= "1" &&
      $(".5kid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1"
    )
      ageDoneServices();
  }

  /* End   Services Logics1 */

  $(".2kid").on("change", function () {
    if ($(".2kid").val() == "0") doAge();
    else if ($(".2kid").val() >= "1") agelogic2();
  });
  function agelogic2() {
    if (($(".selec-Children").val() >= "2") & ($(".1stkid").val() == "0"))
      doAge();
    else if (($(".selec-Children").val() == "2") & ($(".1stkid").val() >= "1"))
      ageDone();
    if ($(".selec-Children").val() == "3") re2l3();
    if ($(".selec-Children").val() == "4") re2l4();
    if ($(".selec-Children").val() == "5") re2l5();
    if ($(".selec-Children").val() == "6") re2l6();
  }
  function re2l3() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if (
      $(".3rdkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".1stkid").val() >= "1"
    )
      ageDone();
  }
  function re2l4() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    else if (
      $(".1stkid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".4rthkid").val() >= "1"
    )
      ageDone();
  }
  function re2l5() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    else if (
      $(".5kid").val() >= "1" &&
      $(".1stkid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".4rthkid").val() >= "1"
    )
      ageDone();
  }
  function re2l6() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    if ($(".6kid").val() == "0") doAge();
    else if (
      $(".6kid").val() >= "1" &&
      $(".5kid").val() >= "1" &&
      $(".1stkid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".4rthkid").val() >= "1"
    )
      ageDone();
  }

  /*HOtel Logic2*/
  $(".2kid-hotel").on("change", function () {
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    else if ($(".2kid-hotel").val() >= "1") agelogic2Hotel();
  });
  function agelogic2Hotel() {
    if (
      ($(".selec-Children-hotel").val() >= "2") &
      ($(".1stkid-hotel").val() == "0")
    )
      doAgeHotel();
    else if (
      ($(".selec-Children-hotel").val() == "2") &
      ($(".1stkid-hotel").val() >= "1")
    )
      ageDoneHotel();
    if ($(".selec-Children-hotel").val() == "3") re2l3Hotel();
    if ($(".selec-Children-hotel").val() == "4") re2l4Hotel();
    if ($(".selec-Children-hotel").val() == "5") re2l5Hotel();
    if ($(".selec-Children-hotel").val() == "6") re2l6Hotel();
  }
  function re2l3Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if (
      $(".3rdkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  function re2l4Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".1stkid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  function re2l5Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".5kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  function re2l6Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    if ($(".6kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".6kid-hotel").val() >= "1" &&
      $(".5kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }

  /*HOtel End*/

  /*  Hotel Logic2 Room2*/
  $(".2kid-R2hotel").on("change", function () {
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".2kid-R2hotel").val() >= "1") agelogic2HotelR2();
  });

  function agelogic2HotelR2() {
    if (
      ($(".selec-Children-hotelR1").val() >= "2") &
      ($(".1stkid-R2hotel").val() == "0")
    )
      doAgeR2Hotel();
    else if (
      ($(".selec-Children-hotelR1").val() == "2") &
      ($(".1stkid-R2hotel").val() >= "1")
    )
      ageDoneR2Hotel();
    if ($(".selec-Children-hotelR1").val() == "3") re2l3HotelR2();
    if ($(".selec-Children-hotelR1").val() == "4") re2l4HotelR2();
    if ($(".selec-Children-hotelR1").val() == "5") re2l5HotelR2();
    if ($(".selec-Children-hotelR1").val() == "6") re2l6HotelR2();
  }
  function re2l3HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if (
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }
  function re2l4HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }
  function re2l5HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".5kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }
  function re2l6HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".6kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".6kid-R2hotel").val() >= "1" &&
      $(".5kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }

  /* End Hotel Logic2 Room2*/

  /*     Hotel Logic2 Room3*/

  $(".2kid-R3hotel").on("change", function () {
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".2kid-R3hotel").val() >= "1") agelogic2HotelR3();
  });

  function agelogic2HotelR3() {
    if (
      ($(".selec-Children-hotelR3").val() >= "2") &
      ($(".1stkid-R3hotel").val() == "0")
    )
      doAgeR3Hotel();
    else if (
      ($(".selec-Children-hotelR3").val() == "2") &
      ($(".1stkid-R3hotel").val() >= "1")
    )
      ageDoneR3Hotel();
    if ($(".selec-Children-hotelR3").val() == "3") re2l3HotelR3();
    if ($(".selec-Children-hotelR3").val() == "4") re2l4HotelR3();
    if ($(".selec-Children-hotelR3").val() == "5") re2l5HotelR3();
    if ($(".selec-Children-hotelR3").val() == "6") re2l6HotelR3();
  }
  function re2l3HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if (
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }
  function re2l4HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  function re2l5HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".5kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }
  function re2l6HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".6kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".6kid-R3hotel").val() >= "1" &&
      $(".5kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  /* End Hotel Logic2 Room3*/

  /*  Hotel Logic2 Room4*/

  $(".2kid-R4hotel").on("change", function () {
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".2kid-R4hotel").val() >= "1") agelogic2HotelR4();
  });

  function agelogic2HotelR4() {
    if (
      ($(".selec-Children-hotelR4").val() >= "2") &
      ($(".1stkid-R4hotel").val() == "0")
    )
      doAgeR4Hotel();
    else if (
      ($(".selec-Children-hotelR4").val() == "2") &
      ($(".1stkid-R4hotel").val() >= "1")
    )
      ageDoneR4Hotel();
    if ($(".selec-Children-hotelR4").val() == "3") re2l3HotelR4();
    if ($(".selec-Children-hotelR4").val() == "4") re2l4HotelR4();
    if ($(".selec-Children-hotelR4").val() == "5") re2l5HotelR4();
    if ($(".selec-Children-hotelR4").val() == "6") re2l6HotelR4();
  }

  function re2l3HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if (
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }
  function re2l4HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  function re2l5HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".5kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }
  function re2l6HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".6kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".6kid-R4hotel").val() >= "1" &&
      $(".5kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  /* End Hotel Logic2 Room4*/

  /*   Apartment Logic 2 */
  $(".2kid-apart").on("change", function () {
    if ($(".2kid-apart").val() == "0") doAgeApart();
    else if ($(".2kid-apart").val() >= "1") agelogic2Apart();
  });
  function agelogic2Apart() {
    if (
      ($(".selec-Children-apart").val() >= "2") &
      ($(".1stkid-apart").val() == "0")
    )
      doAgeApart();
    else if (
      ($(".selec-Children-apart").val() == "2") &
      ($(".1stkid-apart").val() >= "1")
    )
      ageDoneApart();
    if ($(".selec-Children-apart").val() == "3") re2l3Apart();
    if ($(".selec-Children-apart").val() == "4") re2l4Apart();
    if ($(".selec-Children-apart").val() == "5") re2l5Apart();
    if ($(".selec-Children-apart").val() == "6") re2l6Apart();
  }
  function re2l3Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if (
      $(".3rdkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1"
    )
      ageDoneApart();
  }
  function re2l4Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    else if (
      $(".1stkid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1"
    )
      ageDoneApart();
  }
  function re2l5Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    else if (
      $(".5kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1"
    )
      ageDoneApart();
  }
  function re2l6Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    if ($(".6kid-apart").val() == "0") doAgeApart();
    else if (
      $(".6kid-apart").val() >= "1" &&
      $(".5kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1"
    )
      ageDoneApart();
  }

  /*  End  Apartment Logic 2 */

  /*    Services Logics2 */

  $(".2kid-services").on("change", function () {
    if ($(".2kid-services").val() == "0") doAgeServices();
    else if ($(".2kid-services").val() >= "1") agelogic2Services();
  });
  function agelogic2Services() {
    if (
      ($(".selec-Children-services").val() >= "2") &
      ($(".1stkid-services").val() == "0")
    )
      doAgeServices();
    else if (
      ($(".selec-Children-services").val() == "2") &
      ($(".1stkid-services").val() >= "1")
    )
      ageDoneServices();
    if ($(".selec-Children-services").val() == "3") re2l3Services();
    if ($(".selec-Children-services").val() == "4") re2l4Services();
    if ($(".selec-Children-services").val() == "5") re2l5Services();
    if ($(".selec-Children-services").val() == "6") re2l6Services();
  }
  function re2l3Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if (
      $(".3rdkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1"
    )
      ageDoneServices();
  }
  function re2l4Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1"
    )
      ageDoneServices();
  }
  function re2l5Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if ($(".5kid-services").val() == "0") doAgeServices();
    else if (
      $(".5kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1"
    )
      ageDoneServices();
  }
  function re2l6Services() {
    if ($(".1stkid-apart").val() == "0") doAgeServices();
    if ($(".4rthkid-apart").val() == "0") doAgeServices();
    if ($(".3rdkid-apart").val() == "0") doAgeServices();
    if ($(".5kid-apart").val() == "0") doAgeServices();
    if ($(".6kid-apart").val() == "0") doAgeServices();
    else if (
      $(".6kid-services").val() >= "1" &&
      $(".5kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1"
    )
      ageDoneServices();
  }

  /*  End  Services Logics2 */

  $(".3rdkid").on("change", function () {
    if ($(".3rdkid").val() == "0") doAge();
    else if ($(".3rdkid").val() >= "1") agelogic3();
  });
  function agelogic3() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    else if ($(".1stkid").val() >= "1" && $(".2kid").val() >= "1") ageDone();
    if ($(".selec-Children").val() == "4") re3l4();
    if ($(".selec-Children").val() == "5") re3l5();
    if ($(".selec-Children").val() == "6") re3l6();
  }

  function re3l4() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    else if (
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".4rthkid").val() >= "1"
    )
      agedone();
  }
  function re3l5() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    else if (
      $(".5kid").val() >= "1" &&
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".4rthkid").val() >= "1"
    )
      ageDone();
  }
  function re3l6() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    if ($(".6kid").val() == "0") doAge();
    else if (
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".4rthkid").val() >= "1" &&
      $(".5kid").val() >= "1" &&
      $("6kid").val() >= "1"
    )
      ageDone();
  }
  /*HOtel Logic3*/
  $(".3rdkid-hotel").on("change", function () {
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    else if ($(".3rdkid-hotel").val() >= "1") agelogic3Hotel();
  });

  function agelogic3Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    else if ($(".1stkid-hotel").val() >= "1" && $(".2kid-hotel").val() >= "1")
      ageDoneHotel();
    if ($(".selec-Children-hotel").val() == "4") re3l4Hotel();
    if ($(".selec-Children-hotel").val() == "5") re3l5Hotel();
    if ($(".selec-Children-hotel").val() == "6") re3l6Hotel();
  }
  function re3l4Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }

  function re3l5Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".5kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  function re3l6Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    if ($(".6kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1" &&
      $(".5kid-hotel").val() >= "1" &&
      $("6kid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }

  /*HOtel End Logic3*/

  /*   Hotel Logic3 Room2*/

  $(".3rdkid-R2hotel").on("change", function () {
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".3rdkid-R2hotel").val() >= "1") agelogic3HotelR2();
  });

  function agelogic3HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
    if ($(".selec-Children-hotelR1").val() == "4") re3l4HotelR2();
    if ($(".selec-Children-hotelR1").val() == "5") re3l5HotelR2();
    if ($(".selec-Children-hotelR1").val() == "6") re3l6HotelR2();
  }

  function re3l4HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }

  function re3l5HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".5kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }

  function re3l6HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".6kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1" &&
      $(".5kid-R2hotel").val() >= "1" &&
      $("6kid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }

  /* End Hotel Logic3 Room2*/

  /*   Hotel Logic3 Room3*/

  $(".3rdkid-R3hotel").on("change", function () {
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".3rdkid-R3hotel").val() >= "1") agelogic3HotelR3();
  });

  function agelogic3HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
    if ($(".selec-Children-hotelR3").val() == "4") re3l4HotelR3();
    if ($(".selec-Children-hotelR3").val() == "5") re3l5HotelR3();
    if ($(".selec-Children-hotelR3").val() == "6") re3l6HotelR3();
  }

  function re3l4HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  function re3l5HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".5kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  function re3l6HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".6kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1" &&
      $(".5kid-R3hotel").val() >= "1" &&
      $("6kid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  /* End   Hotel Logic3 Room3*/

  /*     Hotel Logic3 Room4*/

  $(".3rdkid-R4hotel").on("change", function () {
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".3rdkid-R4hotel").val() >= "1") agelogic3HotelR4();
  });

  function agelogic3HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
    if ($(".selec-Children-hotelR4").val() == "4") re3l4HotelR4();
    if ($(".selec-Children-hotelR4").val() == "5") re3l5HotelR4();
    if ($(".selec-Children-hotelR4").val() == "6") re3l6HotelR4();
  }

  function re3l4HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  function re3l5HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".5kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  function re3l6HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".6kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1" &&
      $(".5kid-R4hotel").val() >= "1" &&
      $("6kid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  /* End   Hotel Logic3 Room4*/

  /*   Apartment Logic 3 */

  $(".3rdkid-apart").on("change", function () {
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    else if ($(".3rdkid-apart").val() >= "1") agelogic3Apart();
  });

  function agelogic3Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    else if ($(".1stkid-apart").val() >= "1" && $(".2kid-apart").val() >= "1")
      ageDoneApart();
    if ($(".selec-Children-apart").val() == "4") re3l4Apart();
    if ($(".selec-Children-apart").val() == "5") re3l5Apart();
    if ($(".selec-Children-apart").val() == "6") re3l6Apart();
  }
  function re3l4Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    else if (
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1"
    )
      ageDoneApart();
  }

  function re3l5Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    else if (
      $(".5kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1"
    )
      ageDoneApart();
  }
  function re3l6Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    if ($(".6kid-apart").val() == "0") doAgeApart();
    else if (
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1" &&
      $(".5kid-apart").val() >= "1" &&
      $("6kid-apart").val() >= "1"
    )
      ageDoneApart();
  }

  /* End  Apartment Logic 3 */

  /*    Services Logics 3 */

  $(".3rdkid-services").on("change", function () {
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    else if ($(".3rdkid-services").val() >= "1") agelogic3Services();
  });

  function agelogic3Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1"
    )
      ageDoneServices();
    if ($(".selec-Children-services").val() == "4") re3l4Services();
    if ($(".selec-Children-services").val() == "5") re3l5Services();
    if ($(".selec-Children-services").val() == "6") re3l6Services();
  }
  function re3l4Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1"
    )
      ageDoneServices();
  }

  function re3l5Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".5kid-services").val() == "0") doAgeServices();
    else if (
      $(".5kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1"
    )
      ageDoneServices();
  }
  function re3l6Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".5kid-services").val() == "0") doAgeServices();
    if ($(".6kid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1" &&
      $(".5kid-services").val() >= "1" &&
      $("6kid-services").val() >= "1"
    )
      ageDoneServices();
  }

  /* End   Services Logics 3 */

  $(".4rthkid").on("change", function () {
    if ($(".4rthkid").val() == "0") doAge();
    else if ($(".4rthkid").val() >= "1") agelogic4();
  });
  function agelogic4() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    else if (
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".3rdkid").val() >= "1"
    )
      ageDone();
    if ($(".selec-Children").val() == "5") re4l5();
    if ($(".selec-Children").val() == "6") re4l6();
  }
  function re4l5() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    else if (
      $(".5kid").val() >= "1" &&
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".3rdkid").val() >= "1"
    )
      ageDone();
  }
  function re4l6() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    if ($(".6kid").val() == "0") doAge();
    else if (
      $("6kid").val() >= "1" &&
      $(".5kid").val() >= "1" &&
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".3rdkid").val() >= "1"
    )
      ageDone();
  }
  /*HOtel Logic4*/
  $(".4rthkid-hotel").on("change", function () {
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    else if ($(".4rthkid-hotel").val() >= "1") agelogic4Hotel();
  });

  function agelogic4Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1"
    )
      ageDoneHotel();
    if ($(".selec-Children-hotel").val() == "5") re4l5Hotel();
    if ($(".selec-Children-hotel").val() == "6") re4l6Hotel();
  }

  function re4l5Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".5kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  function re4l6Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    if ($(".6kid-hotel").val() == "0") doAgeHotel();
    else if (
      $("6kid-hotel").val() >= "1" &&
      $(".5kid-hotel").val() >= "1" &&
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }
  /*End Logic4*/

  /*  Hotel Logic4 Room2*/
  $(".4rthkid-R2hotel").on("change", function () {
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".4rthkid-R2hotel").val() >= "1") agelogic4HotelR2();
  });

  function agelogic4HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
    if ($(".selec-Children-hotelR1").val() == "5") re4l5HotelR2();
    if ($(".selec-Children-hotelR1").val() == "6") re4l6HotelR2();
  }
  function re4l5HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".5kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }
  function re4l6HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".6kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $("6kid-R2hotel").val() >= "1" &&
      $(".5kid-R2hotel").val() >= "1" &&
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }

  /* End Hotel Logic4 Room2*/

  /*  Hotel Logic4 Room3*/
  $(".4rthkid-R3hotel").on("change", function () {
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".4rthkid-R3hotel").val() >= "1") agelogic4HotelR3();
  });

  function agelogic4HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
    if ($(".selec-Children-hotelR3").val() == "5") re4l5HotelR3();
    if ($(".selec-Children-hotelR3").val() == "6") re4l6HotelR3();
  }

  function re4l5HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".5kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }
  function re4l6HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".6kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $("6kid-R3hotel").val() >= "1" &&
      $(".5kid-R3hotel").val() >= "1" &&
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  /*  End  Hotel Logic4 Room3*/

  /*     Hotel Logic4 Room4*/

  $(".4rthkid-R4hotel").on("change", function () {
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".4rthkid-R4hotel").val() >= "1") agelogic4HotelR4();
  });

  function agelogic4HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
    if ($(".selec-Children-hotelR4").val() == "5") re4l5HotelR4();
    if ($(".selec-Children-hotelR4").val() == "6") re4l6HotelR4();
  }

  function re4l5HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".5kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }
  function re4l6HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".6kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $("6kid-R4hotel").val() >= "1" &&
      $(".5kid-R4hotel").val() >= "1" &&
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  /*  End  Hotel Logic4 Room4*/

  /*   Apartment Logic 4 */

  $(".4rthkid-apart").on("change", function () {
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    else if ($(".4rthkid-apart").val() >= "1") agelogic4Apart();
  });

  function agelogic4Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    else if (
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1"
    )
      ageDoneApart();
    if ($(".selec-Children-apart").val() == "5") re4l5Apart();
    if ($(".selec-Children-apart").val() == "6") re4l6Apart();
  }

  function re4l5Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    else if (
      $(".5kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1"
    )
      ageDoneApart();
  }
  function re4l6Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    if ($(".6kid-apart").val() == "0") doAgeApart();
    else if (
      $("6kid-apart").val() >= "1" &&
      $(".5kid-apart").val() >= "1" &&
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1"
    )
      ageDoneApart();
  }

  /* End  Apartment Logic 4 */

  /* Services Logics 4 */

  $(".4rthkid-services").on("change", function () {
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    else if ($(".4rthkid-services").val() >= "1") agelogic4AServices();
  });

  function agelogic4AServices() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1"
    )
      ageDoneServices();
    if ($(".selec-Children-services").val() == "5") re4l5Services();
    if ($(".selec-Children-services").val() == "6") re4l6Services();
  }

  function re4l5Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if ($(".5kid-services").val() == "0") doAgeServices();
    else if (
      $(".5kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1"
    )
      ageDoneServices();
  }
  function re4l6Services() {
    if ($(".1stkid-servies").val() == "0") doAgeServices();
    if ($(".2kid-servies").val() == "0") doAgeServices();
    if ($(".3rdkid-servies").val() == "0") doAgeServices();
    if ($(".5kid-servies").val() == "0") doAgeServices();
    if ($(".6kid-servies").val() == "0") doAgeServices();
    else if (
      $("6kid-services").val() >= "1" &&
      $(".5kid-services").val() >= "1" &&
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1"
    )
      ageDoneServices();
  }

  /* End   Services Logics 4 */

  $(".5kid").on("change", function () {
    if ($(".5kid").val() == "0") doAge();
    else if ($(".5kid").val() >= "1") agelogic5();
  });
  function agelogic5() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    else if (
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".4rthkid").val() >= "1"
    )
      ageDone();
    if ($(".selec-Children").val() == "6") re5l6();
  }
  function re5l6() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".6kid").val() == "0") doAge();
    else if (
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".4rthkid").val() >= "1" &&
      $("6kid").val() >= "1"
    )
      ageDone();
  }

  /*Hotel Logic5*/
  $(".5kid-hotel").on("change", function () {
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    else if ($(".5kid-hotel").val() >= "1") agelogic5Hotel();
  });
  function agelogic5Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1"
    )
      ageDoneHotel();
    if ($(".selec-Children-hotel").val() == "6") re5l6Hotel();
  }

  function re5l6Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".6kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1" &&
      $("6kid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }

  /*end Logic5*/

  /*   Hotel Logic5 Room2*/
  $(".5kid-R2hotel").on("change", function () {
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".5kid-R2hotel").val() >= "1") agelogic5HotelR2();
  });
  function agelogic5HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
    if ($(".selec-Children-hotelR1").val() == "6") re5l6HotelR2();
  }

  function re5l6HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".6kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1" &&
      $("6kid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }

  /* End Hotel Logic5 Room2*/

  /*   Hotel Logic5 Room3*/
  $(".5kid-R3hotel").on("change", function () {
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".5kid-R3hotel").val() >= "1") agelogic5HotelR3();
  });
  function agelogic5HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
    if ($(".selec-Children-hotelR3").val() == "6") re5l6HotelR3();
  }

  function re5l6HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".6kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1" &&
      $("6kid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  /* End Hotel Logic5 Room3*/

  /*   Hotel Logic5 Room4*/

  $(".5kid-R4hotel").on("change", function () {
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".5kid-R4hotel").val() >= "1") agelogic5HotelR4();
  });
  function agelogic5HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
    if ($(".selec-Children-hotelR4").val() == "6") re5l6HotelR4();
  }

  function re5l6HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".6kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1" &&
      $("6kid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  /* End Hotel Logic5 Room4*/

  /*  Apartment Logic 5 */

  $(".5kid-apart").on("change", function () {
    if ($(".5kid-apart").val() == "0") doAgeApart();
    else if ($(".5kid-apart").val() >= "1") agelogic5Apart();
  });
  function agelogic5Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    else if (
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1"
    )
      ageDoneApart();
    if ($(".selec-Children-apart").val() == "6") re5l6Apart();
  }

  function re5l6Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".6kid-apart").val() == "0") doAgeApart();
    else if (
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1" &&
      $("6kid-apart").val() >= "1"
    )
      ageDoneApart();
  }

  /* End  Apartment Logic 5 */

  /*    Services Logics 5 */

  $(".5kid-services").on("change", function () {
    if ($(".5kid-services").val() == "0") doAgeServices();
    else if ($(".5kid-services").val() >= "1") agelogic5Services();
  });
  function agelogic5Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1"
    )
      ageDoneServices();
    if ($(".selec-Children-services").val() == "6") re5l6Services();
  }

  function re5l6Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".6kid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1" &&
      $("6kid-services").val() >= "1"
    )
      ageDoneServices();
  }

  /* End   Services Logics 5 */

  $(".6kid").on("change", function () {
    if ($(".6kid").val() == "0") doAge();
    else if ($(".6kid").val() >= "1") agelogic6();
  });
  function agelogic6() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    else if (
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".4rthkid").val() >= "1" &&
      $(".5kid").val() >= "1"
    )
      ageDone();
    else if ($(".selec-Children").val() == "6") re6l6();
  }
  function re6l6() {
    if ($(".1stkid").val() == "0") doAge();
    if ($(".2kid").val() == "0") doAge();
    if ($(".3rdkid").val() == "0") doAge();
    if ($(".4rthkid").val() == "0") doAge();
    if ($(".5kid").val() == "0") doAge();
    else if (
      $(".1stkid").val() >= "1" &&
      $(".2kid").val() >= "1" &&
      $(".3rdkid").val() >= "1" &&
      $(".4rthkid").val() >= "1" &&
      $(".5kid").val() >= "1"
    )
      ageDone();
  }
  /*Hotel Logic6*/
  $(".6kid-hotel").on("change", function () {
    if ($(".6kid-hotel").val() == "0") doAgeHotel();
    else if ($(".6kid-hotel").val() >= "1") agelogic6Hotel();
  });
  function agelogic6Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1" &&
      $(".5kid-hotel").val() >= "1"
    )
      ageDoneHotel();
    else if ($(".selec-Children-hotel").val() == "6") re6l6Hotel();
  }
  function re6l6Hotel() {
    if ($(".1stkid-hotel").val() == "0") doAgeHotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    else if (
      $(".1stkid-hotel").val() >= "1" &&
      $(".2kid-hotel").val() >= "1" &&
      $(".3rdkid-hotel").val() >= "1" &&
      $(".4rthkid-hotel").val() >= "1" &&
      $(".5kid-hotel").val() >= "1"
    )
      ageDoneHotel();
  }

  /*End Logic6*/

  /*   Hotel Logic6 Room2*/
  $(".6kid-R2hotel").on("change", function () {
    if ($(".6kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".6kid-R2hotel").val() >= "1") agelogic6HotelR2();
  });
  function agelogic6HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1" &&
      $(".5kid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
    else if ($(".selec-Children-hotelR1").val() == "6") re6l6HotelR2();
  }
  function re6l6HotelR2() {
    if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if (
      $(".1stkid-R2hotel").val() >= "1" &&
      $(".2kid-R2hotel").val() >= "1" &&
      $(".3rdkid-R2hotel").val() >= "1" &&
      $(".4rthkid-R2hotel").val() >= "1" &&
      $(".5kid-R2hotel").val() >= "1"
    )
      ageDoneR2Hotel();
  }

  /* End Hotel Logic6 Room2*/

  /*   Hotel Logic6 Room3*/
  $(".6kid-R3hotel").on("change", function () {
    if ($(".6kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".6kid-R3hotel").val() >= "1") agelogic6HotelR3();
  });
  function agelogic6HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1" &&
      $(".5kid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
    else if ($(".selec-Children-hotelR3").val() == "6") re6l6HotelR3();
  }
  function re6l6HotelR3() {
    if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if (
      $(".1stkid-R3hotel").val() >= "1" &&
      $(".2kid-R3hotel").val() >= "1" &&
      $(".3rdkid-R3hotel").val() >= "1" &&
      $(".4rthkid-R3hotel").val() >= "1" &&
      $(".5kid-R3hotel").val() >= "1"
    )
      ageDoneR3Hotel();
  }

  /* End Hotel Logic6 Room3*/

  /*   Hotel Logic6 Room4*/

  $(".6kid-R4hotel").on("change", function () {
    if ($(".6kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".6kid-R4hotel").val() >= "1") agelogic6HotelR4();
  });
  function agelogic6HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1" &&
      $(".5kid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
    else if ($(".selec-Children-hotelR4").val() == "6") re6l6HotelR4();
  }
  function re6l6HotelR4() {
    if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if (
      $(".1stkid-R4hotel").val() >= "1" &&
      $(".2kid-R4hotel").val() >= "1" &&
      $(".3rdkid-R4hotel").val() >= "1" &&
      $(".4rthkid-R4hotel").val() >= "1" &&
      $(".5kid-R4hotel").val() >= "1"
    )
      ageDoneR4Hotel();
  }

  /* End Hotel Logic6 Room4*/

  /*  Apartment Logic 6 */

  $(".6kid-apart").on("change", function () {
    if ($(".6kid-apart").val() == "0") doAgeApart();
    else if ($(".6kid-apart").val() >= "1") agelogic6Apart();
  });
  function agelogic6Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    else if (
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1" &&
      $(".5kid-apart").val() >= "1"
    )
      ageDoneApart();
    else if ($(".selec-Children-apart").val() == "6") re6l6Apart();
  }
  function re6l6Apart() {
    if ($(".1stkid-apart").val() == "0") doAgeApart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    if ($(".5kid-apart").val() == "0") doAgeApart();
    else if (
      $(".1stkid-apart").val() >= "1" &&
      $(".2kid-apart").val() >= "1" &&
      $(".3rdkid-apart").val() >= "1" &&
      $(".4rthkid-apart").val() >= "1" &&
      $(".5kid-apart").val() >= "1"
    )
      ageDoneApart();
  }

  /* End  Apartment Logic 6 */

  /*    Services Logics 6 */

  $(".6kid-services").on("change", function () {
    if ($(".6kid-services").val() == "0") doAgeServices();
    else if ($(".6kid-services").val() >= "1") agelogic6Services();
  });
  function agelogic6Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".5kid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1" &&
      $(".5kid-services").val() >= "1"
    )
      ageDoneServices();
    else if ($(".selec-Children-services").val() == "6") re6l6Services();
  }
  function re6l6Services() {
    if ($(".1stkid-services").val() == "0") doAgeServices();
    if ($(".2kid-services").val() == "0") doAgeServices();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    if ($(".4rthkid-services").val() == "0") doAgeServices();
    if ($(".5kid-services").val() == "0") doAgeServices();
    else if (
      $(".1stkid-services").val() >= "1" &&
      $(".2kid-services").val() >= "1" &&
      $(".3rdkid-services").val() >= "1" &&
      $(".4rthkid-services").val() >= "1" &&
      $(".5kid-services").val() >= "1"
    )
      ageDoneServices();
  }

  /* End   Services Logics 6 */

  function doAge() {
    $(".red-notification").show();
  }

  function ageDone() {
    $(".red-notification").hide();
  }

  function doAgeHotel() {
    $(".red-notification-hotel").show();
  }

  function doAgeR2Hotel() {
    $(".red-notificationR1-hotel").show();
  }
  function doAgeR3Hotel() {
    $(".red-notificationR3-hotel").show();
  }
  function doAgeR4Hotel() {
    $(".red-notificationR4-hotel").show();
  }

  function ageDoneHotel() {
    $(".red-notification-hotel").hide();
  }

  function ageDoneR2Hotel() {
    $(".red-notificationR1-hotel").hide();
  }

  function ageDoneR3Hotel() {
    $(".red-notificationR3-hotel").hide();
  }

  function ageDoneR4Hotel() {
    $(".red-notificationR4-hotel").hide();
  }

  function doAgeApart() {
    $(".red-notification-apart").show();
  }

  function ageDoneApart() {
    $(".red-notification-apart").hide();
  }

  function doAgeServices() {
    $(".red-notification-services").show();
  }

  function ageDoneServices() {
    $(".red-notification-services").hide();
  }

  function onlyAdultActivity() {
    if (($(".selec-Children").val() == "0") & ($(".qty-activity").val() >= "1"))
      hideAll();
  }

  function hero1() {
    if (($(".1stkid").val() == "0") & ($(".selec-Children").val() == "0"))
      hideAll();
    else if (($(".1stkid").val() == "0") & ($(".selec-Children").val() >= "1"))
      staystill();
    else if (($(".1stkid").val() >= "1") & ($(".selec-Children").val() >= "1"))
      hideAll();
  }
  function hero2() {
    if (($(".2kid").val() == "0") & ($(".selec-Children").val() >= "2"))
      staystill();
    else if (
      ($(".2kid").val() >= "1") &
      ($(".selec-Children").val() >= "2") &
      ($(".1stkid").val() >= "1")
    )
      hideAll();
  }
  function hero3() {
    if (($(".3rdkid").val() == "0") & ($(".selec-Children").val() >= "3"))
      staystill();
  }

  function hero4() {
    if (($(".4rthkid").val() == "0") & ($(".selec-Children").val() >= "4"))
      staystill();
  }
  function hero5() {
    if (($(".5kid").val() == "0") & ($(".selec-Children").val() >= "5"))
      staystill();
  }

  function hero6() {
    if (($(".6kid").val() == "0") & ($(".selec-Children").val() >= "6"))
      staystill();
  }

  /*Hotel Done Control*/

  function onlyAdultHotel() {
    if (
      ($("#qty1-hotel").val() >= "1") &
      ($(".selec-Children-hotel").val() == "0")
    )
      hideHotels();
  }

  function hero1Hotel() {
    if (
      ($(".1stkid-hotel").val() == "0") &
      ($(".selec-Children-hotel").val() == "0")
    )
      hideHotels();
    else if (
      ($(".1stkid-hotel").val() == "0") &
      ($(".selec-Children-hotel").val() >= "1")
    )
      staystillHotel();
    else if (
      ($(".1stkid-hotel").val() >= "1") &
      ($(".selec-Children-hotel").val() >= "1")
    )
      hideHotels();
  }
  function hero2Hotel() {
    if (
      ($(".2kid-hotel").val() == "0") &
      ($(".selec-Children-hotel").val() >= "2")
    )
      staystillHotel();
    else if (
      ($(".2kid-hotel").val() >= "1") &
      ($(".selec-Children-hotel").val() >= "2") &
      ($(".1stkid-hotel").val() >= "1")
    )
      hideHotels();
  }
  function hero3Hotel() {
    if (
      ($(".3rdkid-hotel").val() == "0") &
      ($(".selec-Children-hotel").val() >= "3")
    )
      staystillHotel();
  }

  function hero4Hotel() {
    if (
      ($(".4rthkid-hotel").val() == "0") &
      ($(".selec-Children-hotel").val() >= "4")
    )
      staystillHotel();
  }
  function hero5Hotel() {
    if (
      ($(".5kid-hotel").val() == "0") &
      ($(".selec-Children-hotel").val() >= "5")
    )
      staystillHotel();
  }

  function hero6Hotel() {
    if (
      ($(".6kid-hotel").val() == "0") &
      ($(".selec-Children-hotel").val() >= "6")
    )
      staystillHotel();
  }

  /*End Done Control*/

  /*Apart Done Control*/
  function onlyAdultApart() {
    if (
      ($(".selec-Children-apart").val() == "0") &
      ($("#qty1-apart").val() >= "1")
    )
      hideApart();
  }

  function hero1Apart() {
    if (
      ($(".1stkid-apart").val() == "0") &
      ($(".selec-Children-apart").val() == "0")
    )
      hideApart();
    else if (
      ($(".1stkid-apart").val() == "0") &
      ($(".selec-Children-apart").val() >= "1")
    )
      staystillApart();
    else if (
      ($(".1stkid-apart").val() >= "1") &
      ($(".selec-Children-apart").val() >= "1")
    )
      hideApart();
  }
  function hero2Apart() {
    if (
      ($(".2kid-apart").val() == "0") &
      ($(".selec-Children-apart").val() >= "2")
    )
      staystillApart();
    else if (
      ($(".2kid-apart").val() >= "1") &
      ($(".selec-Children-apart").val() >= "2") &
      ($(".1stkid-apart").val() >= "1")
    )
      hideApart();
  }
  function hero3Apart() {
    if (
      ($(".3rdkid-apart").val() == "0") &
      ($(".selec-Children-apart").val() >= "3")
    )
      staystillApart();
  }

  function hero4Apart() {
    if (
      ($(".4rthkid-apart").val() == "0") &
      ($(".selec-Children-apart").val() >= "4")
    )
      staystillApart();
  }
  function hero5Apart() {
    if (
      ($(".5kid-apart").val() == "0") &
      ($(".selec-Children-apart").val() >= "5")
    )
      staystillApart();
  }

  function hero6Apart() {
    if (
      ($(".6kid-apart").val() == "0") &
      ($(".selec-Children-apart").val() >= "6")
    )
      staystillApart();
  }

  /* End Apart Done Control*/

  /*   Services Done Control*/

  function onlyAdultServ() {
    if (
      ($(".selec-Children-services").val() == "0") &
      ($("#qty1-services").val() >= "1")
    )
      hideAllServices();
  }

  function hero1Services() {
    if (
      ($(".1stkid-services").val() == "0") &
      ($(".selec-Children-services").val() == "0")
    )
      hideAllServices();
    else if (
      ($(".1stkid-services").val() == "0") &
      ($(".selec-Children-services").val() >= "1")
    )
      staystillServices();
    else if (
      ($(".1stkid-services").val() >= "1") &
      ($(".selec-Children-services").val() >= "1")
    )
      hideAllServices();
  }
  function hero2Services() {
    if (
      ($(".2kid-services").val() == "0") &
      ($(".selec-Children-services").val() >= "2")
    )
      staystillServices();
    else if (
      ($(".2kid-services").val() >= "1") &
      ($(".selec-Children-services").val() >= "2") &
      ($(".1stkid-services").val() >= "1")
    )
      hideAllServices();
  }
  function hero3Services() {
    if (
      ($(".3rdkid-services").val() == "0") &
      ($(".selec-Children-services").val() >= "3")
    )
      staystillServices();
  }

  function hero4Services() {
    if (
      ($(".4rthkid-services").val() == "0") &
      ($(".selec-Children-services").val() >= "4")
    )
      staystillServices();
  }
  function hero5Services() {
    if (
      ($(".5kid-services").val() == "0") &
      ($(".selec-Children-services").val() >= "5")
    )
      staystillServices();
  }

  function hero6Services() {
    if (
      ($(".6kid-services").val() == "0") &
      ($(".selec-Children-services").val() >= "6")
    )
      staystillServices();
  }

  /* End  Services Done Control*/

  $(".done-close").click(function () {
    onlyAdultActivity();
    hero1();
    hero2();
    hero3();
    hero4();
    hero5();
    hero6();
    allpersons();
  });

  $(".done-close-hotel").click(function () {
    onlyAdultHotel();
    hero1Hotel();
    hero2Hotel();
    hero3Hotel();
    hero4Hotel();
    hero5Hotel();
    hero6Hotel();
    allpersonsHotels();
  });

  $(".done-close-apart").click(function () {
    onlyAdultApart();
    hero1Apart();
    hero2Apart();
    hero3Apart();
    hero4Apart();
    hero5Apart();
    hero6Apart();
    allpersonsApart();
  });

  $(".done-close-services").click(function () {
    onlyAdultServ();
    hero1Services();
    hero2Services();
    hero3Services();
    hero4Services();
    hero5Services();
    hero6Services();
    allpersonsServices();
  });

  function allpersons() {
    var tradults = $("#qty1").val();
    var allkids = $(".selec-Children").val();

    document.getElementById("aladults").innerHTML = tradults;
    document.getElementById("alkids").innerHTML = allkids;
  }

  function allpersonsHotels() {
    let adultsRoom1 = $("#qty1-hotel").val();
    let adultsRoom2 = $("#qty1-hotelR2").val();
    let adultsRoom3 = $("#qty1-hotelR3").val();
    let adultsRoom4 = $("#qty1-hotelR4").val();

    let kidsRoom1 = $(".selec-Children-hotel").val();
    let kidsRoom2 = $(".selec-Children-hotelR1").val();
    let kidsRoom3 = $(".selec-Children-hotelR3").val();
    let kidsRoom4 = $(".selec-Children-hotelR4").val();

    let hallrooms = $(".selec-Rooms-hotel").val();

    let allHoteladults =
      parseInt(adultsRoom1) +
      parseInt(adultsRoom2) +
      parseInt(adultsRoom3) +
      parseInt(adultsRoom4);
    let allkids =
      parseInt(kidsRoom1) +
      parseInt(kidsRoom2) +
      parseInt(kidsRoom3) +
      parseInt(kidsRoom4);

    document.getElementById("alrooms").innerHTML = hallrooms;
    document.getElementById("aladults-hotel").innerHTML = allHoteladults;
    document.getElementById("alkids-hotel").innerHTML = allkids;
  }

  function allpersonsApart() {
    var tradults = $("#qty1-apart").val();
    var allkids = $(".selec-Children-apart").val();

    document.getElementById("aladults-apart").innerHTML = tradults;
    document.getElementById("alkids-apart").innerHTML = allkids;
  }

  function allpersonsServices() {
    var tradults = $("#qty1-services").val();
    var allkids = $(".selec-Children-services").val();

    document.getElementById("aladults-services").innerHTML = tradults;
    document.getElementById("alkids-services").innerHTML = allkids;
  }

  $("#close-ignore").click(function () {
    hideAll();
  });

  $("#close-ignore-hotel").click(function () {
    hideHotels();
  });

  $("#close-ignore-apart").click(function () {
    hideApart();
  });

  $("#close-ignore-services").click(function () {
    hideAllServices();
  });

  function hideAll() {
    $(".menu2").hide();
  }

  function staystill() {
    $(".menu2").show();
  }

  function hideHotels() {
    $(".menu2-hotel").hide(100);
  }
  function staystillHotel() {
    $(".menu2-hotel").show(200);
  }

  function hideApart() {
    $(".menu2-apart").hide();
  }
  function staystillApart() {
    $(".menu2-apart").show();
  }

  function hideAllServices() {
    $(".menu2-services").hide();
  }
  function staystillServices() {
    $(".menu2-services").show();
  }

  function kidz() {
    $(".mkids-age1").hide();
    $(".mkids-age2").hide();
    $(".mkids-age3").hide();
    $(".mkids-age4").hide();
    $(".mkids-age5").hide();
    $(".mkids-age6").hide();
    $(".red-notification").hide();
  }
  function kidzHotel() {
    $(".mkids-hotel-age1").hide();
    $(".mkids-hotel-age2").hide();
    $(".mkids-hotel-age3").hide();
    $(".mkids-hotel-age4").hide();
    $(".mkids-hotel-age5").hide();
    $(".mkids-hotel-age6").hide();
    $(".red-notification-hotel").hide();
  }

  function kidzHotelR1() {
    $(".mkids-hotelR1-age1").hide();
    $(".mkids-hotelR1-age2").hide();
    $(".mkids-hotelR1-age3").hide();
    $(".mkids-hotelR1-age4").hide();
    $(".mkids-hotelR1-age5").hide();
    $(".mkids-hotelR1-age6").hide();
    $(".red-notificationR1-hotel").hide();
  }

  function kidzHotelR3() {
    $(".mkids-hotelR3-age1").hide();
    $(".mkids-hotelR3-age2").hide();
    $(".mkids-hotelR3-age3").hide();
    $(".mkids-hotelR3-age4").hide();
    $(".mkids-hotelR3-age5").hide();
    $(".mkids-hotelR3-age6").hide();
    $(".red-notificationR3-hotel").hide();
  }

  function kidzHotelR4() {
    $(".mkids-hotelR4-age1").hide();
    $(".mkids-hotelR4-age2").hide();
    $(".mkids-hotelR4-age3").hide();
    $(".mkids-hotelR4-age4").hide();
    $(".mkids-hotelR4-age5").hide();
    $(".mkids-hotelR4-age6").hide();
    $(".red-notificationR4-hotel").hide();
  }

  function kidzApart() {
    $(".mkids-apart-age1").hide();
    $(".mkids-apart-age2").hide();
    $(".mkids-apart-age3").hide();
    $(".mkids-apart-age4").hide();
    $(".mkids-apart-age5").hide();
    $(".mkids-apart-age6").hide();
    $(".red-notification-apart").hide();
  }

  function kidzServices() {
    $(".mkids-services-age1").hide();
    $(".mkids-services-age2").hide();
    $(".mkids-services-age3").hide();
    $(".mkids-services-age4").hide();
    $(".mkids-services-age5").hide();
    $(".mkids-services-age6").hide();
    $(".red-notification-services").hide();
  }

  function kid1() {
    $(".mkids-age1").show();
    $(".mkids-age2").hide();
    $(".mkids-age3").hide();
    $(".mkids-age4").hide();
    $(".mkids-age5").hide();
    $(".mkids-age6").hide();
    ageNote1();
  }

  function ageNote1() {
    if ($(".1stkid").val() >= "1") ageDone();
    else if ($(".1stkid").val() == "0") doAge();
  }

  function kid1Hotel() {
    $(".mkids-hotel-age1").show();
    $(".mkids-hotel-age2").hide();
    $(".mkids-hotel-age3").hide();
    $(".mkids-hotel-age4").hide();
    $(".mkids-hotel-age5").hide();
    $(".mkids-hotel-age6").hide();
    ageNote1Hotel();
  }

  function ageNote1Hotel() {
    if ($(".1stkid-hotel").val() >= "1") ageDoneHotel();
    else if ($(".1stkid-hotel").val() == "0") doAgeHotel();
  }

  function kid1HotelR1() {
    $(".mkids-hotelR1-age1").show();
    $(".mkids-hotelR1-age2").hide();
    $(".mkids-hotelR1-age3").hide();
    $(".mkids-hotelR1-age4").hide();
    $(".mkids-hotelR1-age5").hide();
    $(".mkids-hotelR1-age6").hide();
    ageNote1HotelR2();
  }

  function ageNote1HotelR2() {
    if ($(".1stkid-R2hotel").val() >= "1") ageDoneR2Hotel();
    else if ($(".1stkid-R2hotel").val() == "0") doAgeR2Hotel();
  }

  function kid1HotelR3() {
    $(".mkids-hotelR3-age1").show();
    $(".mkids-hotelR3-age2").hide();
    $(".mkids-hotelR3-age3").hide();
    $(".mkids-hotelR3-age4").hide();
    $(".mkids-hotelR3-age5").hide();
    $(".mkids-hotelR3-age6").hide();
    ageNote1HotelR3();
  }

  function ageNote1HotelR3() {
    if ($(".1stkid-R3hotel").val() >= "1") ageDoneR3Hotel();
    else if ($(".1stkid-R3hotel").val() == "0") doAgeR3Hotel();
  }

  function kid1HotelR4() {
    $(".mkids-hotelR4-age1").show();
    $(".mkids-hotelR4-age2").hide();
    $(".mkids-hotelR4-age3").hide();
    $(".mkids-hotelR4-age4").hide();
    $(".mkids-hotelR4-age5").hide();
    $(".mkids-hotelR4-age6").hide();
    ageNote1HotelR4();
  }

  function ageNote1HotelR4() {
    if ($(".1stkid-R4hotel").val() >= "1") ageDoneR4Hotel();
    else if ($(".1stkid-R4hotel").val() == "0") doAgeR4Hotel();
  }

  function kid1Apart() {
    $(".mkids-apart-age1").show();
    $(".mkids-apart-age2").hide();
    $(".mkids-apart-age3").hide();
    $(".mkids-apart-age4").hide();
    $(".mkids-apart-age5").hide();
    $(".mkids-apart-age6").hide();
    ageNote1Apart();
  }

  function ageNote1Apart() {
    if ($(".1stkid-apart").val() >= "1") ageDoneApart();
    else if ($(".1stkid-apart").val() == "0") doAgeApart();
  }

  function kid1Services() {
    $(".mkids-services-age1").show();
    $(".mkids-services-age2").hide();
    $(".mkids-services-age3").hide();
    $(".mkids-services-age4").hide();
    $(".mkids-services-age5").hide();
    $(".mkids-services-age6").hide();
    ageNote1Services();
  }

  function ageNote1Services() {
    if ($(".1stkid-services").val() >= "1") ageDoneServices();
    else if ($(".1stkid-services").val() == "0") doAgeServices();
  }

  function kid2() {
    $(".mkids-age1").show();
    $(".mkids-age2").show();
    $(".mkids-age3").hide();
    $(".mkids-age4").hide();
    $(".mkids-age5").hide();
    $(".mkids-age6").hide();
    ageNote2();
  }

  function ageNote2() {
    ageNote1();
    if ($(".2kid").val() == "0") doAge();
    else if ($(".2kid").val() >= "1") ageDone();
  }

  function kid2Hotel() {
    $(".mkids-hotel-age1").show();
    $(".mkids-hotel-age2").show();
    $(".mkids-hotel-age3").hide();
    $(".mkids-hotel-age4").hide();
    $(".mkids-hotel-age5").hide();
    $(".mkids-hotel-age6").hide();
    ageNote2Hotel();
  }

  function ageNote2Hotel() {
    ageNote1Hotel();
    if ($(".2kid-hotel").val() == "0") doAgeHotel();
    else if ($(".2kid-hotel").val() >= "1") ageDoneHotel();
  }

  function kid2HotelR1() {
    $(".mkids-hotelR1-age1").show();
    $(".mkids-hotelR1-age2").show();
    $(".mkids-hotelR1-age3").hide();
    $(".mkids-hotelR1-age4").hide();
    $(".mkids-hotelR1-age5").hide();
    $(".mkids-hotelR1-age6").hide();
    ageNote2HotelR1();
  }
  function ageNote2HotelR1() {
    ageNote1HotelR2();
    if ($(".2kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".2kid-R2hotel").val() >= "1") ageDoneR2Hotel();
  }

  function kid2HotelR3() {
    $(".mkids-hotelR3-age1").show();
    $(".mkids-hotelR3-age2").show();
    $(".mkids-hotelR3-age3").hide();
    $(".mkids-hotelR3-age4").hide();
    $(".mkids-hotelR3-age5").hide();
    $(".mkids-hotelR3-age6").hide();
    ageNote2HotelR3();
  }
  function ageNote2HotelR3() {
    ageNote1HotelR3();
    if ($(".2kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".2kid-R3hotel").val() >= "1") ageDoneR3Hotel();
  }

  function kid2HotelR4() {
    $(".mkids-hotelR4-age1").show();
    $(".mkids-hotelR4-age2").show();
    $(".mkids-hotelR4-age3").hide();
    $(".mkids-hotelR4-age4").hide();
    $(".mkids-hotelR4-age5").hide();
    $(".mkids-hotelR4-age6").hide();
    ageNote2HotelR4();
  }
  function ageNote2HotelR4() {
    ageNote1HotelR4();
    if ($(".2kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".2kid-R4hotel").val() >= "1") ageDoneR4Hotel();
  }

  function kid2Apart() {
    $(".mkids-apart-age1").show();
    $(".mkids-apart-age2").show();
    $(".mkids-apart-age3").hide();
    $(".mkids-apart-age4").hide();
    $(".mkids-apart-age5").hide();
    $(".mkids-apart-age6").hide();
    ageNote2Apart();
  }

  function ageNote2Apart() {
    ageNote1Apart();
    if ($(".2kid-apart").val() == "0") doAgeApart();
    else if ($(".2kid-apart").val() >= "1") ageDoneApart();
  }

  function kid2Services() {
    $(".mkids-services-age1").show();
    $(".mkids-services-age2").show();
    $(".mkids-services-age3").hide();
    $(".mkids-services-age4").hide();
    $(".mkids-services-age5").hide();
    $(".mkids-services-age6").hide();
    ageNote2Services();
  }

  function ageNote2Services() {
    ageNote1Services();
    if ($(".2kid-services").val() == "0") doAgeServices();
    else if ($(".2kid-services").val() >= "1") ageDoneServices();
  }

  function kid3() {
    $(".mkids-age1").show();
    $(".mkids-age2").show();
    $(".mkids-age3").show();
    $(".mkids-age4").hide();
    $(".mkids-age5").hide();
    $(".mkids-age6").hide();
    ageNote3();
  }
  function ageNote3() {
    ageNote1();
    ageNote2();
    if ($(".3rdkid").val() == "0") doAge();
    else if ($(".3rdkid").val() >= "1") ageDone();
  }

  function kid3Hotel() {
    $(".mkids-hotel-age1").show();
    $(".mkids-hotel-age2").show();
    $(".mkids-hotel-age3").show();
    $(".mkids-hotel-age4").hide();
    $(".mkids-hotel-age5").hide();
    $(".mkids-hotel-age6").hide();
    ageNote3Hotel();
  }

  function ageNote3Hotel() {
    ageNote1Hotel();
    ageNote2Hotel();
    if ($(".3rdkid-hotel").val() == "0") doAgeHotel();
    else if ($(".3rdkid-hotel").val() >= "1") ageDoneHotel();
  }

  function kid3HotelR1() {
    $(".mkids-hotelR1-age1").show();
    $(".mkids-hotelR1-age2").show();
    $(".mkids-hotelR1-age3").show();
    $(".mkids-hotelR1-age4").hide();
    $(".mkids-hotelR1-age5").hide();
    $(".mkids-hotelR1-age6").hide();
    ageNote3HotelR1();
  }

  function ageNote3HotelR1() {
    ageNote1HotelR2();
    ageNote2HotelR1();
    if ($(".3rdkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".3rdkid-R2hotel").val() >= "1") ageDoneR2Hotel();
  }

  function kid3HotelR3() {
    $(".mkids-hotelR3-age1").show();
    $(".mkids-hotelR3-age2").show();
    $(".mkids-hotelR3-age3").show();
    $(".mkids-hotelR3-age4").hide();
    $(".mkids-hotelR3-age5").hide();
    $(".mkids-hotelR3-age6").hide();
    ageNote3HotelR3();
  }

  function ageNote3HotelR3() {
    ageNote1HotelR3();
    ageNote2HotelR3();
    if ($(".3rdkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".3rdkid-R3hotel").val() >= "1") ageDoneR3Hotel();
  }

  function kid3HotelR4() {
    $(".mkids-hotelR4-age1").show();
    $(".mkids-hotelR4-age2").show();
    $(".mkids-hotelR4-age3").show();
    $(".mkids-hotelR4-age4").hide();
    $(".mkids-hotelR4-age5").hide();
    $(".mkids-hotelR4-age6").hide();
    ageNote3HotelR4();
  }

  function ageNote3HotelR4() {
    ageNote1HotelR4();
    ageNote2HotelR4();
    if ($(".3rdkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".3rdkid-R4hotel").val() >= "1") ageDoneR4Hotel();
  }

  function kid3Apart() {
    $(".mkids-apart-age1").show();
    $(".mkids-apart-age2").show();
    $(".mkids-apart-age3").show();
    $(".mkids-apart-age4").hide();
    $(".mkids-apart-age5").hide();
    $(".mkids-apart-age6").hide();
    ageNote3Apart();
  }

  function ageNote3Apart() {
    ageNote1Apart();
    ageNote2Apart();
    if ($(".3rdkid-apart").val() == "0") doAgeApart();
    else if ($(".3rdkid-apart").val() >= "1") ageDoneApart();
  }

  function kid3Services() {
    $(".mkids-services-age1").show();
    $(".mkids-services-age2").show();
    $(".mkids-services-age3").show();
    $(".mkids-services-age4").hide();
    $(".mkids-services-age5").hide();
    $(".mkids-services-age6").hide();
    ageNote3Services();
  }

  function ageNote3Services() {
    ageNote1Services();
    ageNote2Services();
    if ($(".3rdkid-services").val() == "0") doAgeServices();
    else if ($(".3rdkid-services").val() >= "1") ageDoneServices();
  }

  function kid4() {
    $(".mkids-age1").show();
    $(".mkids-age2").show();
    $(".mkids-age3").show();
    $(".mkids-age4").show();
    $(".mkids-age5").hide();
    $(".mkids-age6").hide();
    ageNote4();
  }
  function ageNote4() {
    ageNote1();
    ageNote2();
    ageNote3();
    if ($(".4rthkid").val() == "0") doAge();
    else if ($(".4rthkid").val() >= "1") ageDone();
  }

  function kid4Hotel() {
    $(".mkids-hotel-age1").show();
    $(".mkids-hotel-age2").show();
    $(".mkids-hotel-age3").show();
    $(".mkids-hotel-age4").show();
    $(".mkids-hotel-age5").hide();
    $(".mkids-hotel-age6").hide();
    ageNote4Hotel();
  }
  function ageNote4Hotel() {
    ageNote1Hotel();
    ageNote2Hotel();
    ageNote3Hotel();

    if ($(".4rthkid-hotel").val() == "0") doAgeHotel();
    else if ($(".4rthkid-hotel").val() >= "1") ageDoneHotel();
  }

  function kid4HotelR1() {
    $(".mkids-hotelR1-age1").show();
    $(".mkids-hotelR1-age2").show();
    $(".mkids-hotelR1-age3").show();
    $(".mkids-hotelR1-age4").show();
    $(".mkids-hotelR1-age5").hide();
    $(".mkids-hotelR1-age6").hide();
    ageNote4HotelR1();
  }

  function ageNote4HotelR1() {
    ageNote1HotelR2();
    ageNote2HotelR1();
    ageNote3HotelR1();

    if ($(".4rthkid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".4rthkid-R2hotel").val() >= "1") ageDoneR2Hotel();
  }

  function kid4HotelR3() {
    $(".mkids-hotelR3-age1").show();
    $(".mkids-hotelR3-age2").show();
    $(".mkids-hotelR3-age3").show();
    $(".mkids-hotelR3-age4").show();
    $(".mkids-hotelR3-age5").hide();
    $(".mkids-hotelR3-age6").hide();
    ageNote4HotelR3();
  }

  function ageNote4HotelR3() {
    ageNote1HotelR3();
    ageNote2HotelR3();
    ageNote3HotelR3();

    if ($(".4rthkid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".4rthkid-R3hotel").val() >= "1") ageDoneR3Hotel();
  }

  function kid4HotelR4() {
    $(".mkids-hotelR4-age1").show();
    $(".mkids-hotelR4-age2").show();
    $(".mkids-hotelR4-age3").show();
    $(".mkids-hotelR4-age4").show();
    $(".mkids-hotelR4-age5").hide();
    $(".mkids-hotelR4-age6").hide();
    ageNote4HotelR4();
  }

  function ageNote4HotelR4() {
    ageNote1HotelR4();
    ageNote2HotelR4();
    ageNote3HotelR4();

    if ($(".4rthkid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".4rthkid-R4hotel").val() >= "1") ageDoneR4Hotel();
  }

  function kid4Apart() {
    $(".mkids-apart-age1").show();
    $(".mkids-apart-age2").show();
    $(".mkids-apart-age3").show();
    $(".mkids-apart-age4").show();
    $(".mkids-apart-age5").hide();
    $(".mkids-apart-age6").hide();

    ageNote4Apart();
  }
  function ageNote4Apart() {
    ageNote1Apart();
    ageNote2Apart();
    ageNote3Apart();

    if ($(".4rthkid-apart").val() == "0") doAgeApart();
    else if ($(".4rthkid-apart").val() >= "1") ageDoneApart();
  }

  function kid4Services() {
    $(".mkids-services-age1").show();
    $(".mkids-services-age2").show();
    $(".mkids-services-age3").show();
    $(".mkids-services-age4").show();
    $(".mkids-services-age5").hide();
    $(".mkids-services-age6").hide();
    ageNote4Services();
  }
  function ageNote4Services() {
    ageNote1Services();
    ageNote2Services();
    ageNote3Services();

    if ($(".4rthkid-services").val() == "0") doAgeServices();
    else if ($(".4rthkid-services").val() >= "1") ageDoneServices();
  }

  function kid5() {
    $(".mkids-age1").show();
    $(".mkids-age2").show();
    $(".mkids-age3").show();
    $(".mkids-age4").show();
    $(".mkids-age5").show();
    $(".mkids-age6").hide();
    ageNote5();
  }
  function ageNote5() {
    ageNote1();
    ageNote2();
    ageNote3();
    ageNote4();
    if ($(".5kid").val() == "0") doAge();
    else if ($(".5kid").val() >= "1") ageDone();
  }

  function kid5Hotel() {
    $(".mkids-hotel-age1").show();
    $(".mkids-hotel-age2").show();
    $(".mkids-hotel-age3").show();
    $(".mkids-hotel-age4").show();
    $(".mkids-hotel-age5").show();
    $(".mkids-hotel-age6").hide();

    ageNote5Hotel();
  }
  function ageNote5Hotel() {
    ageNote1Hotel();
    ageNote2Hotel();
    ageNote3Hotel();
    ageNote4Hotel();

    if ($(".5kid-hotel").val() == "0") doAgeHotel();
    else if ($(".5kid-hotel").val() >= "1") ageDoneHotel();
  }

  function kid5HotelR1() {
    $(".mkids-hotelR1-age1").show();
    $(".mkids-hotelR1-age2").show();
    $(".mkids-hotelR1-age3").show();
    $(".mkids-hotelR1-age4").show();
    $(".mkids-hotelR1-age5").show();
    $(".mkids-hotelR1-age6").hide();
    ageNote5HotelR1();
  }

  function ageNote5HotelR1() {
    ageNote1HotelR2();
    ageNote2HotelR1();
    ageNote3HotelR1();
    ageNote4HotelR1();

    if ($(".5kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".5kid-R2hotel").val() >= "1") ageDoneR2Hotel();
  }

  function kid5HotelR3() {
    $(".mkids-hotelR3-age1").show();
    $(".mkids-hotelR3-age2").show();
    $(".mkids-hotelR3-age3").show();
    $(".mkids-hotelR3-age4").show();
    $(".mkids-hotelR3-age5").show();
    $(".mkids-hotelR3-age6").hide();
    ageNote5HotelR3();
  }

  function ageNote5HotelR3() {
    ageNote1HotelR3();
    ageNote2HotelR3();
    ageNote3HotelR3();
    ageNote4HotelR3();

    if ($(".5kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".5kid-R3hotel").val() >= "1") ageDoneR3Hotel();
  }

  function kid5HotelR4() {
    $(".mkids-hotelR4-age1").show();
    $(".mkids-hotelR4-age2").show();
    $(".mkids-hotelR4-age3").show();
    $(".mkids-hotelR4-age4").show();
    $(".mkids-hotelR4-age5").show();
    $(".mkids-hotelR4-age6").hide();
    ageNote5HotelR4();
  }

  function ageNote5HotelR4() {
    ageNote1HotelR4();
    ageNote2HotelR4();
    ageNote3HotelR4();
    ageNote4HotelR4();

    if ($(".5kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".5kid-R4hotel").val() >= "1") ageDoneR4Hotel();
  }

  function kid5Apart() {
    $(".mkids-apart-age1").show();
    $(".mkids-apart-age2").show();
    $(".mkids-apart-age3").show();
    $(".mkids-apart-age4").show();
    $(".mkids-apart-age5").show();
    $(".mkids-apart-age6").hide();

    ageNote5Apart();
  }
  function ageNote5Apart() {
    ageNote1Apart();
    ageNote2Apart();
    ageNote3Apart();
    ageNote4Apart();

    if ($(".5kid-apart").val() == "0") doAgeApart();
    else if ($(".5kid-apart").val() >= "1") ageDoneApart();
  }

  function kid5Services() {
    $(".mkids-services-age1").show();
    $(".mkids-services-age2").show();
    $(".mkids-services-age3").show();
    $(".mkids-services-age4").show();
    $(".mkids-services-age5").show();
    $(".mkids-services-age6").hide();
    ageNote5Services();
  }
  function ageNote5Services() {
    ageNote1Services();
    ageNote2Services();
    ageNote3Services();
    ageNote4Services();

    if ($(".5kid-services").val() == "0") doAgeServices();
    else if ($(".5kid-services").val() >= "1") ageDoneServices();
  }

  function kid6() {
    $(".mkids-age1").show();
    $(".mkids-age2").show();
    $(".mkids-age3").show();
    $(".mkids-age4").show();
    $(".mkids-age5").show();
    $(".mkids-age6").show();
    ageNote6();
  }
  function ageNote6() {
    ageNote1();
    ageNote2();
    ageNote3();
    ageNote4();
    ageNote5();
    if ($(".6kid").val() == "0") doAge();
    else if ($(".6kid").val() >= "1") ageDone();
  }

  function kid6Hotel() {
    $(".mkids-hotel-age1").show();
    $(".mkids-hotel-age2").show();
    $(".mkids-hotel-age3").show();
    $(".mkids-hotel-age4").show();
    $(".mkids-hotel-age5").show();
    $(".mkids-hotel-age6").show();

    ageNote6Hotel();
  }
  function ageNote6Hotel() {
    ageNote1Hotel();
    ageNote2Hotel();
    ageNote3Hotel();
    ageNote4Hotel();
    ageNote5Hotel();

    if ($(".6kid-hotel").val() == "0") doAgeHotel();
    else if ($(".6kid-hotel").val() >= "1") ageDoneHotel();
  }

  function kid6HotelR1() {
    $(".mkids-hotelR1-age1").show();
    $(".mkids-hotelR1-age2").show();
    $(".mkids-hotelR1-age3").show();
    $(".mkids-hotelR1-age4").show();
    $(".mkids-hotelR1-age5").show();
    $(".mkids-hotelR1-age6").show();
    ageNote6HotelR1();
  }

  function ageNote6HotelR1() {
    ageNote1HotelR2();
    ageNote2HotelR1();
    ageNote3HotelR1();
    ageNote4HotelR1();
    ageNote5HotelR1();

    if ($(".6kid-R2hotel").val() == "0") doAgeR2Hotel();
    else if ($(".6kid-R2hotel").val() >= "1") ageDoneR2Hotel();
  }

  function kid6HotelR3() {
    $(".mkids-hotelR3-age1").show();
    $(".mkids-hotelR3-age2").show();
    $(".mkids-hotelR3-age3").show();
    $(".mkids-hotelR3-age4").show();
    $(".mkids-hotelR3-age5").show();
    $(".mkids-hotelR3-age6").show();
    ageNote6HotelR3();
  }

  function ageNote6HotelR3() {
    ageNote1HotelR3();
    ageNote2HotelR3();
    ageNote3HotelR3();
    ageNote4HotelR3();
    ageNote5HotelR3();

    if ($(".6kid-R3hotel").val() == "0") doAgeR3Hotel();
    else if ($(".6kid-R3hotel").val() >= "1") ageDoneR3Hotel();
  }

  function kid6HotelR4() {
    $(".mkids-hotelR4-age1").show();
    $(".mkids-hotelR4-age2").show();
    $(".mkids-hotelR4-age3").show();
    $(".mkids-hotelR4-age4").show();
    $(".mkids-hotelR4-age5").show();
    $(".mkids-hotelR4-age6").show();
    ageNote6HotelR4();
  }

  function ageNote6HotelR4() {
    ageNote1HotelR4();
    ageNote2HotelR4();
    ageNote3HotelR4();
    ageNote4HotelR4();
    ageNote5HotelR4();

    if ($(".6kid-R4hotel").val() == "0") doAgeR4Hotel();
    else if ($(".6kid-R4hotel").val() >= "1") ageDoneR4Hotel();
  }

  function kid6Apart() {
    $(".mkids-apart-age1").show();
    $(".mkids-apart-age2").show();
    $(".mkids-apart-age3").show();
    $(".mkids-apart-age4").show();
    $(".mkids-apart-age5").show();
    $(".mkids-apart-age6").show();

    ageNote6Apart();
  }
  function ageNote6Apart() {
    ageNote1Apart();
    ageNote2Apart();
    ageNote3Apart();
    ageNote4Apart();
    ageNote5Apart();

    if ($(".6kid-apart").val() == "0") doAgeApart();
    else if ($(".6kid-apart").val() >= "1") ageDoneApart();
  }

  function kid6Services() {
    $(".mkids-services-age1").show();
    $(".mkids-services-age2").show();
    $(".mkids-services-age3").show();
    $(".mkids-services-age4").show();
    $(".mkids-services-age5").show();
    $(".mkids-services-age6").show();
    ageNote6Services();
  }
  function ageNote6Services() {
    ageNote1Services();
    ageNote2Services();
    ageNote3Services();
    ageNote4Services();
    ageNote5Services();

    if ($(".6kid-services").val() == "0") doAgeServices();
    else if ($(".6kid-services").val() >= "1") ageDoneServices();
  }

  $(".hamburger2").click(function () {
    $(".menu2").show();
  });

  $(".hamburger2-hotel").click(function () {
    $(".menu2-hotel").show(200);
  });

  $(".hamburger2-apartment").click(function () {
    $(".menu2-apart").show();
  });

  $(".hamburger2-services").click(function () {
    staystillServices();
  });

  $("#villas-smenu").show();
  $("#hotels-smenu").hide();
  $("#apparts-smenu").hide();

  $("#vill-action").click(function () {
    $("#villas-smenu").show(500);
    $("#hotels-smenu").hide();
    $("#apparts-smenu").hide();
  });

  $("#hotel-action").click(function () {
    $("#villas-smenu").hide();
    $("#hotels-smenu").show(500);
    $("#apparts-smenu").hide();
  });

  $("#appart-action").click(function () {
    $("#apparts-smenu").show(500);
    $("#villas-smenu").hide();
    $("#hotels-smenu").hide();
  });

  $("#rental-action").click(function () {
    $(".dash-renal-car").show(500);
    $(".dash-book-trans").hide();
    $(".dash-hire-driv").hide();
  });

  $("#tranfer-action").click(function () {
    $(".dash-book-trans").show(500);
    $(".dash-renal-car").hide();
    $(".dash-hire-driv").hide();
  });

  $("#drive-action").click(function () {
    $(".dash-hire-driv").show(500);
    $(".dash-renal-car").hide();
    $(".dash-book-trans").hide();
  });

  $("#myform :checkbox").change(function () {
    // this will contain a reference to the checkbox
    if (this.checked) {
      // the checkbox is now checked
      $("#add-drop-location").show();
    } else {
      // the checkbox is now no longer checked
      $("#add-drop-location").hide();
    }
  });

  $(".vehicle1").click(function () {
    $("#return-day").toggle(500);
  });

  $("#roundedk1")
    .change(function () {
      $(this)
        .find("option:selected")
        .each(function () {
          var optionValue = $(this).attr("value");
          if (optionValue) {
            $(".box")
              .not("." + optionValue)
              .hide();
            $("." + optionValue).show();
          } else {
            $(".box").hide();
          }
        });
    })
    .change();

  $("#roundedk-in").Zebra_DatePicker({
    direction: true,
    pair: $("#roundedk-out"),
  });
  $("#roundedk-out").Zebra_DatePicker({
    direction: 1,
  });

  $("#roundedk-hotl-in").Zebra_DatePicker({
    direction: true,
    pair: $("#roundedk-hotl-out"),
  });
  $("#roundedk-hotl-out").Zebra_DatePicker({
    direction: 1,
  });

  $("#roundedk-apart-in").Zebra_DatePicker({
    direction: true,
    pair: $("#roundedk-apart-out"),
  });
  $("#roundedk-apart-out").Zebra_DatePicker({
    direction: 1,
  });

  $("#roundedk-activity").Zebra_DatePicker({
    direction: true,
  });

  $("#roundedk-serv-in").Zebra_DatePicker({
    direction: true,
  });

  $("#roundedk-trans-in").Zebra_DatePicker({
    direction: true,
    pair: $("#roundedk-trans-out"),
  });
  $("#roundedk-trans-out").Zebra_DatePicker({
    direction: true,
  });

  $("#roundedk-reservaton").Zebra_DatePicker({
    direction: true,
    format: "Y-m-d H:i",
  });

  $("#date-book-trans").Zebra_DatePicker({
    direction: true,
    format: "Y-m-d H:i",
  });

  $("#roundedk-trans-in-hire").Zebra_DatePicker({
    direction: true,
    format: "Y-m-d H:i",
  });

  $("#return-date-hide").Zebra_DatePicker({
    direction: true,
    format: "Y-m-d H:i",
  });

  function hideAllRooms() {
    $("#dash-room2").hide();
    $("#dash-room3").hide();
    $("#dash-room4").hide();
  }

  function showRoom2() {
    $("#dash-room2").show();
    $("#dash-room3").hide();
    $("#dash-room4").hide();
  }

  function showRoom3() {
    $("#dash-room3").show();
    $("#dash-room2").show();
    $("#dash-room4").hide();
  }

  function showRoom4() {
    $("#dash-room3").show();
    $("#dash-room2").show();
    $("#dash-room4").show();
  }

  $("#villa-short").click(function () {
    var today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 2; // Note: month is zero-indexed, so add 1 to get the correct month
    const year = today.getFullYear();

    console.log(`Today is ${day}/${month}/${year}`);

    var todayOut = new Date();

    todayOut.setDate(todayOut.getDate() + 5);
    const dayOut = todayOut.getDate();
    const monthOut = todayOut.getMonth() + 2;
    const yearOut = today.getFullYear();

    // window.location.href = `https://bookings.mykonosbooker.com/#/search/${year}~2F${month}~2F${day}/${yearOut}~2F${monthOut}~2F${dayOut}/Mykonos%20Island/OT-LOC-GEO-257055/(category:villa,nationality:75,rooms:!(('$$hashKey':'object:46',adults:4,children:0,childrenAges:!(),quantity:1)),searchOnRequestRooms:!t,stars:(max:5,min:0))`
  });

  $("#hotel-short").click(function () {
    var today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 2; // Note: month is zero-indexed, so add 1 to get the correct month
    const year = today.getFullYear();

    console.log(`Today is ${day}/${month}/${year}`);

    var todayOut = new Date();

    todayOut.setDate(todayOut.getDate() + 5);
    const dayOut = todayOut.getDate();
    const monthOut = todayOut.getMonth() + 2;
    const yearOut = today.getFullYear();

    // window.location.href = `https://bookings.mykonosbooker.com/#/search/${year}~2F${month}~2F${day}/${yearOut}~2F${monthOut}~2F${dayOut}/Mykonos%20Island/OT-LOC-GEO-257055/(category:hotel,nationality:75,rooms:!(('$$hashKey':'object:46',adults:4,children:0,childrenAges:!(),quantity:1)),searchOnRequestRooms:!t,stars:(max:5,min:0))`
  });

  $("#apart-short").click(function () {
    var today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 2; // Note: month is zero-indexed, so add 1 to get the correct month
    const year = today.getFullYear();

    console.log(`Today is ${day}/${month}/${year}`);

    var todayOut = new Date();

    todayOut.setDate(todayOut.getDate() + 5);
    const dayOut = todayOut.getDate();
    const monthOut = todayOut.getMonth() + 2;
    const yearOut = today.getFullYear();

    // window.location.href = `https://bookings.mykonosbooker.com/#/search/${year}~2F${month}~2F${day}/${yearOut}~2F${monthOut}~2F${dayOut}/Mykonos%20Island/OT-LOC-GEO-257055/(category:apartment,nationality:75,rooms:!(('$$hashKey':'object:46',adults:4,children:0,childrenAges:!(),quantity:1)),searchOnRequestRooms:!t,stars:(max:5,min:0))`
  });

  ("use strict");

  /* 

	1. Vars and Inits

	*/

  var menu = $(".menu");
  var menuActive = false;
  var header = $(".header");
  var searchActive = false;

  setHeader();

  $(window).on("resize", function () {
    setHeader();
  });

  $(document).on("scroll", function () {
    setHeader();
  });

  initHomeSlider();
  initMenu();
  initSearch();
  initCtaSlider();
  initTestSlider();
  initSearchForm();

  /* 
	2. Set Header
	*/

  function setHeader() {
    if (window.innerWidth < 992) {
      if ($(window).scrollTop() > 100) {
        header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
    } else {
      if ($(window).scrollTop() > 100) {
        header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
    }
    if (window.innerWidth > 991 && menuActive) {
      closeMenu();
    }
  }

  /* 

	3. Init Home Slider

	*/

  function initHomeSlider() {
    if ($(".home_slider").length) {
      var homeSlider = $(".home_slider");

      homeSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        smartSpeed: 1200,
        dotsContainer: "main_slider_custom_dots",
      });

      /* Custom nav events */
      if ($(".home_slider_prev").length) {
        var prev = $(".home_slider_prev");

        prev.on("click", function () {
          homeSlider.trigger("prev.owl.carousel");
        });
      }

      if ($(".home_slider_next").length) {
        var next = $(".home_slider_next");

        next.on("click", function () {
          homeSlider.trigger("next.owl.carousel");
        });
      }

      /* Custom dots events */
      if ($(".home_slider_custom_dot").length) {
        $(".home_slider_custom_dot").on("click", function () {
          $(".home_slider_custom_dot").removeClass("active");
          $(this).addClass("active");
          homeSlider.trigger("to.owl.carousel", [$(this).index(), 300]);
        });
      }

      /* Change active class for dots when slide changes by nav or touch */
      homeSlider.on("changed.owl.carousel", function (event) {
        $(".home_slider_custom_dot").removeClass("active");
        $(".home_slider_custom_dots li")
          .eq(event.page.index)
          .addClass("active");
      });

      // add animate.css class(es) to the elements to be animated
      function setAnimation(_elem, _InOut) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

        _elem.each(function () {
          var $elem = $(this);
          var $animationType = "animated " + $elem.data("animation-" + _InOut);

          $elem.addClass($animationType).one(animationEndEvent, function () {
            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
          });
        });
      }

      // Fired before current slide change
      homeSlider.on("change.owl.carousel", function (event) {
        var $currentItem = $(".home_slider_item", homeSlider).eq(
          event.item.index
        );
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation($elemsToanim, "out");
      });

      // Fired after current slide has been changed
      homeSlider.on("changed.owl.carousel", function (event) {
        var $currentItem = $(".home_slider_item", homeSlider).eq(
          event.item.index
        );
        var $elemsToanim = $currentItem.find("[data-animation-in]");
        setAnimation($elemsToanim, "in");
      });
    }
  }

  /* 

	4. Init Menu

	*/

  function initMenu() {
    if ($(".hamburger").length && $(".menu").length) {
      var hamb = $(".hamburger");
      var close = $(".menu_close_container");

      hamb.on("click", function () {
        if (!menuActive) {
          openMenu();
        } else {
          closeMenu();
        }
      });

      close.on("click", function () {
        if (!menuActive) {
          openMenu();
        } else {
          closeMenu();
        }
      });
    }
  }

  function openMenu() {
    menu.addClass("active");
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass("active");
    menuActive = false;
  }

  /* 

	5. Init Search

	*/

  function initSearch() {
    if ($(".search_tab").length) {
      $(".search_tab").on("click", function () {
        $(".search_tab").removeClass("active");
        $(this).addClass("active");
        var clickedIndex = $(".search_tab").index(this);

        var panels = $(".search_panel");
        panels.removeClass("active");
        $(panels[clickedIndex]).addClass("active");
      });
    }

    if ($(".search_tab_lil").length) {
      $(".search_tab_lil").on("click", function () {
        $(".search_tab_lil").removeClass("active");
        $(this).addClass("active");
        var clickedIndex = $(".search_tab_lil").index(this);

        var panes = $(".menu-nav");
        panes.removeClass("active");
        $(panes[clickedIndex]).addClass("active");
      });
    }
  }

  /* 

	6. Init CTA Slider

	*/

  function initCtaSlider() {
    if ($(".cta_slider").length) {
      var ctaSlider = $(".cta_slider");

      ctaSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        smartSpeed: 1200,
      });

      /* Custom nav events */
      if ($(".cta_slider_prev").length) {
        var prev = $(".cta_slider_prev");

        prev.on("click", function () {
          ctaSlider.trigger("prev.owl.carousel");
        });
      }

      if ($(".cta_slider_next").length) {
        var next = $(".cta_slider_next");

        next.on("click", function () {
          ctaSlider.trigger("next.owl.carousel");
        });
      }
    }
  }

  /* 

	7. Init Testimonials Slider

	*/

  function initTestSlider() {
    if ($(".test_slider").length) {
      var testSlider = $(".test_slider");

      testSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 1200,
        margin: 30,
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
        },
      });

      /* Custom nav events */
      if ($(".test_slider_prev").length) {
        var prev = $(".test_slider_prev");

        prev.on("click", function () {
          testSlider.trigger("prev.owl.carousel");
        });
      }

      if ($(".test_slider_next").length) {
        var next = $(".test_slider_next");

        next.on("click", function () {
          testSlider.trigger("next.owl.carousel");
        });
      }
    }
  }

  /* 

	8. Init Search Form

	*/

  function initSearchForm() {
    if ($(".search_form").length) {
      var searchForm = $(".search_form");
      var searchInput = $(".search_content_input");
      var searchButton = $(".content_search");

      searchButton.on("click", function (event) {
        event.stopPropagation();

        if (!searchActive) {
          searchForm.addClass("active");
          searchActive = true;

          $(document).one("click", function closeForm(e) {
            if ($(e.target).hasClass("search_content_input")) {
              $(document).one("click", closeForm);
            } else {
              searchForm.removeClass("active");
              searchActive = false;
            }
          });
        } else {
          searchForm.removeClass("active");
          searchActive = false;
        }
      });
    }
  }
});

// // Hire a driver Form Logic
// document
//   .getElementById("hireDriver")
//   .addEventListener("submit", function (event) {
//     const startDate = document.getElementById("roundedk-trans-in-hire").value;
//     const adults = document.getElementById("adultsNumber").value;
//     const hireDays = document.getElementById("numberofDays").value;
//     const hoursPerDay = document.getElementById("hoursperDay").value;

//     // Check if any required field is empty
//     if (!startDate) {
//       alert("Please select a starting date and time.");
//       event.preventDefault(); // Prevent form submission
//       return;
//     }

//     if (!adults || adults === "") {
//       alert("Please select the number of adults.");
//       event.preventDefault(); // Prevent form submission
//       return;
//     }

//     if (!hireDays || hireDays === "") {
//       alert("Please select the number of days.");
//       event.preventDefault(); // Prevent form submission
//       return;
//     }

//     if (!hoursPerDay || hoursPerDay === "") {
//       alert("Please select the number of hours per day.");
//       event.preventDefault(); // Prevent form submission
//       return;
//     }
//   });
