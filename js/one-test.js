const villaform = document.getElementById('villa-Form');
const hotelform = document.getElementById('hotel-Form');
const apartform = document.getElementById('apart-Form');
const CarRental = document.getElementById('car-rental-form');
const GetTransfer = document.getElementById('gettransfer-form');
const Reservations = document.getElementById('reservation-form');
const Activity = document.getElementById('activity_form');
const Services = document.getElementById('services_form');


// vilaa Form

villaform.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting
  
    const datein = villaform.elements['villas-in-date'].value;
    const dateout = villaform.elements['villas-out-date'].value;
    const bedrooms = villaform.elements['villas-bedrooms'].value;

    
    
    const dateComponents = datein.split("-");

    const year = dateComponents[0];
    const month = dateComponents[1];
    const day = dateComponents[2];
  
    console.log(`In: ${datein}`);
    console.log(`year: ${year}`);
    console.log(`month: ${month}`);
    console.log(`day: ${day}`);

    const dateComponentsout = dateout.split("-");
    const yearout = dateComponentsout[0];
    const monthout = dateComponentsout[1];
    const dayout = dateComponentsout[2];

    console.log(`out: ${dateout}`);
    
    console.log(`year: ${yearout}`);
    console.log(`month: ${monthout}`);
    console.log(`day: ${dayout}`);

    console.log(`rooms: ${bedrooms}`);


  var dateInput = document.getElementById('roundedk-in').value;
  var dateInput2 = document.getElementById('roundedk-out').value;
  var isValidDate = isValidDateFormat(dateInput);
  var isValidDate2 = isValidDateFormat(dateInput2);

  if (!isValidDate) {
    alert('Invalid date format. Please enter a valid date.');
    return false; // Prevent form submission
  }

  function isValidDateFormat(dateString) {
    // Check if the date matches the desired format (YYYY-MM-DD)
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  }


  if (!isValidDate2) {
    alert('Invalid date format. Please enter a valid date.');
    return false; // Prevent form submission
  }


  function isValidDate2(dateString) {
    // Check if the date matches the desired format (YYYY-MM-DD)
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  }



    window.location.href = `https://bookings.mykonosbooker.com/#/search/${year}~2F${month}~2F${day}/${yearout}~2F${monthout}~2F${dayout}/Mykonos%20Island/OT-LOC-GEO-257055/(category:villa,nationality:75,rooms:!(('$$hashKey':'object:46',adults:${bedrooms},children:0,childrenAges:!(),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0)) `;    

  });


// hotel Form

  hotelform.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    const hoteldatein = hotelform.elements['hotel-datein'].value;
    const hoteldateout = hotelform.elements['hotel-dateout'].value;


    const dateComponents = hoteldatein.split("-");
    const year = dateComponents[0];
    const month = dateComponents[1];
    const day = dateComponents[2];

    console.log(`In: ${hoteldatein}`);
    console.log(`year: ${year}`);
    console.log(`month: ${month}`);
    console.log(`day: ${day}`);


    const dateOutComponents = hoteldateout.split("-");
    const yearOut = dateOutComponents[0];
    const monthOut = dateOutComponents[1];
    const dayOut = dateOutComponents[2];

    console.log(`In: ${hoteldateout}`);
    console.log(`year: ${yearOut}`);
    console.log(`month: ${monthOut}`);
    console.log(`day: ${dayOut}`);



  
    const hallkids = hotelform.elements['hotel-allkids'].value;
    const hallrooms = hotelform.elements['hotel-allrooms'].value;
    const halladultR1 = hotelform.elements['hotel-alladult'].value;
    const hotelkid1 = hotelform.elements['hotel-kid1-age'].value;
    const hotelkid2 = hotelform.elements['hotel-kid2-age'].value;
    const hotelkid3 = hotelform.elements['hotel-kid3-age'].value;
    const hotelkid4 = hotelform.elements['hotel-kid4-age'].value;
    const hotelkid5 = hotelform.elements['hotel-kid5-age'].value;
    const hotelkid6 = hotelform.elements['hotel-kid6-age'].value;
    
  
    console.log(`allkids: ${hallkids}`);
    console.log(`allrooms: ${hallrooms}`);
    console.log(`alladult: ${halladultR1}`);
    console.log(`kid1: ${hotelkid1}`);
    console.log(`kid2: ${hotelkid2}`);
    console.log(`kid3: ${hotelkid3}`);
    console.log(`kid4: ${hotelkid4}`);
    console.log(`kid5: ${hotelkid5}`);
    console.log(`kid6: ${hotelkid6}`);


    
  var dateInput = document.getElementById('roundedk-hotl-in').value;
  var dateInput2 = document.getElementById('roundedk-hotl-out').value;
  var isValidDate = isValidDateFormat(dateInput);
  var isValidDate2 = isValidDateFormat(dateInput2);


  if (!isValidDate) {
    alert('Invalid date format. Please enter a valid date.');
    return false; // Prevent form submission
  }

  function isValidDateFormat(dateString) {
    // Check if the date matches the desired format (YYYY-MM-DD)
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  }


  if (!isValidDate2) {
    alert('Invalid date format. Please enter a valid date.');
    return false; // Prevent form submission
  }


  function isValidDate2(dateString) {
    // Check if the date matches the desired format (YYYY-MM-DD)
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  }


 window.location.href = `https://bookings.mykonosbooker.com/#/search/${year}~2F${month}~2F${day}/${yearOut}~2F${monthOut}~2F${dayOut}/Mykonos%20Island/OT-LOC-GEO-257055/(category:hotel,nationality:75,rooms:!(('$$hashKey':'object:51',adults:${halladultR1},children:${hallkids},childrenAges:!(${hotelkid1},${hotelkid2},${hotelkid3},${hotelkid4},${hotelkid5},${hotelkid6}),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0))`;
 
     
});



// Apartement form

apartform.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting
  const apartdatein = apartform.elements['apart-indate'].value;
  const apartdateout = apartform.elements['apart-outdate'].value;

  const dateinComponents = apartdatein.split("-");

    const year  = dateinComponents[0];
    const month = dateinComponents[1];
    const day   = dateinComponents[2];


// console.log(`In: ${apartdatein}`);
// console.log(`year: ${year}`);
// console.log(`month: ${month}`);
// console.log(`day: ${day}`);

const dateoutComponents = apartdateout.split("-");

    const yearOut  = dateoutComponents[0];
    const monthOut = dateoutComponents[1];
    const dayOut   = dateoutComponents[2];

   // console.log(`In: ${apartdateout}`);


let apartAdults = apartform.elements['apart-alladult'].value,
      apartkids = apartform.elements['apart-allKids'].value,
      apartAge1 = apartform.elements['apart-age1'].value,
      apartAge2 = apartform.elements['apart-age2'].value,
      apartAge3 = apartform.elements['apart-age3'].value,
      apartAge4 = apartform.elements['apart-age4'].value,
      apartAge5 = apartform.elements['apart-age5'].value,
      apartAge6 = apartform.elements['apart-age6'].value;



// console.log(`Adults: ${apartAdults}`)
// console.log(`All Kids: ${apartkids}`)

// console.log(`Age-1: ${apartAge1}`)
// console.log(`Age-2: ${apartAge2}`)
// console.log(`Age-3: ${apartAge3}`)
// console.log(`Age-4: ${apartAge4}`)
// console.log(`Age-5: ${apartAge5}`)
// console.log(`Age-6: ${apartAge6}`)

var dateInput = document.getElementById('roundedk-apart-in').value;
var dateInput2 = document.getElementById('roundedk-apart-out').value;
var isValidDate = isValidDateFormat(dateInput);
var isValidDate2 = isValidDateFormat(dateInput2);

  if (!isValidDate) {
    alert('Invalid date format. Please enter a valid date.');
    return false; // Prevent form submission
  }

  function isValidDateFormat(dateString) {
    // Check if the date matches the desired format (YYYY-MM-DD)
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  }


  if (!isValidDate2) {
    alert('Invalid date format. Please enter a valid date.');
    return false; // Prevent form submission
  }


  function isValidDate2(dateString) {
    // Check if the date matches the desired format (YYYY-MM-DD)
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  }

window.location.href = `https://bookings.mykonosbooker.com/#/search/${year}~2F${month}~2F${day}/${yearOut}~2F${monthOut}~2F${dayOut}/Mykonos%20Island/OT-LOC-GEO-257055/(category:apartment,nationality:75,rooms:!(('$$hashKey':'object:51',adults:${apartAdults},children:${apartkids},childrenAges:!(${apartAge1},${apartAge2},${apartAge3},${apartAge4},${apartAge5},${apartAge6}),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0))`;


});



//Rental Car Form

CarRental.addEventListener('submit', (event) => {
  event.preventDefault();
  const CarRentalPickDate = CarRental.elements['carpick-date'].value;
  const CarRentalDropDate = CarRental.elements['cardrop-date'].value;

  console.log(`Pick Up Date: ${CarRentalPickDate}`);
  console.log(`Drop Off Date: ${CarRentalDropDate}`);

  const dateinComponents = CarRentalPickDate.split("-");

  const year  = dateinComponents[0];
  const month = dateinComponents[1];
  const day   = dateinComponents[2];

//console.log(`year: ${year}`);
//console.log(`month: ${month}`);
//console.log(`day: ${day}`);

const dateoutComponents = CarRentalDropDate.split("-");

    const yearOut  = dateoutComponents[0];
    const monthOut = dateoutComponents[1];
    const dayOut   = dateoutComponents[2];

//  console.log(`year: ${yearOut}`);
// console.log(`month: ${monthOut}`);
// console.log(`day: ${dayOut}`);


var isValidDate = isValidDateFormat(CarRentalPickDate);
var isValidDate2 = isValidDateFormat(CarRentalDropDate);
      if (!isValidDate) {
        alert('Invalid date format. Please enter a valid date.');
        return false; // Prevent form submission
      }
    
      function isValidDateFormat(dateString) {
        // Check if the date matches the desired format (YYYY-MM-DD)
        var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(dateString);
      }

      
  if (!isValidDate2) {
    alert('Invalid date format. Please enter a valid date.');
    return false; // Prevent form submission
  }


  function isValidDate2(dateString) {
    // Check if the date matches the desired format (YYYY-MM-DD)
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  }


 window.location.href = `https://bookings.mykonosbooker.com/#/en/activities/${year}~2F${month}~2F${day}/${yearOut}~2F${monthOut}~2F${dayOut}/Mykonos%20Island/O257055/1/0/-/(category:24)`;
 
});


//Get Transfers Form

GetTransfer.addEventListener('submit', (event) => {
  event.preventDefault();
  const GetTransferPickDate = GetTransfer.elements['transferpickup-date'].value;
  const GetTransferAdult = GetTransfer.elements['gtranfer-adults'].value;

 // console.log(`Pick Up Date: ${GetTransferPickDate}`)

  const dateinComponents = GetTransferPickDate.split("-");

  const year  = dateinComponents[0];
  const month = dateinComponents[1];
  const day   = dateinComponents[2];
  
 //console.log(`year: ${year}`);
 //console.log(`month: ${month}`);
 //console.log(`day: ${day}`);

 //console.log(`Adult Number: ${GetTransferAdult}`);

 const selectedDate = new Date(GetTransferPickDate);

  // Add one day to the selected date
  selectedDate.setDate(selectedDate.getDate() + 1);

  // Extract year, month, and day components
  const yearout = selectedDate.getFullYear();
  const monthout = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const dayout = String(selectedDate.getDate()).padStart(2, '0');

 // console.log(`Selected Date: ${GetTransferPickDate}`);
 // console.log(`Next Day: ${yearout}-${monthout}-${dayout}`);


var isValidDate = isValidDateFormat(GetTransferPickDate);
      if (!isValidDate) {
        alert('Invalid date format. Please enter a valid date.');
        return false; // Prevent form submission
      };
      function isValidDateFormat(dateString) {
        // Check if the date matches the desired format (YYYY-MM-DD)
        var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(dateString);
      };
      if (GetTransferAdult.value === "") {
        event.preventDefault();
        alert("Please select the number of adults for the reservation.");
      };

  window.location.href = `https://bookings.mykonosbooker.com/#/en/activities/${year}~2F${month}~2F${day}/${yearout}~2F${monthout}~2F${dayout}/Mykonos%20Island/O257055/${GetTransferAdult}/0/-/(category:23)`;
 
});


// Reservations 
Reservations.addEventListener('submit', (event) => {
  event.preventDefault();
  const Category = Reservations.elements['categorynumber'].value;
 // console.log(`${Category}`);
  const ReservationDate = Reservations.elements['reservation-date'].value;
  const ReservationsAdults = Reservations.elements['reservationsadults'].value;
  // console.log(`${ReservationsAdults}`);

 const dateinComponents = ReservationDate.split("-");
  const year  = dateinComponents[0];
  const month = dateinComponents[1];
  const day   = dateinComponents[2];

      // console.log(`${ReservationDate}`);
      // console.log(`year: ${year}`);
      // console.log(`month: ${month}`);
      // console.log(`day: ${day}`);

      const selectedDate = new Date(ReservationDate);  
      selectedDate.setDate(selectedDate.getDate() + 1);

      // Extract year, month, and day components
      const yearout = selectedDate.getFullYear();
      const monthout = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const dayout = String(selectedDate.getDate()).padStart(2, '0');
      // console.log(`Next Day: ${yearout}-${monthout}-${dayout}`); 

      // Date Validation
      var isValidDate = isValidDateFormat(ReservationDate);
      if (!isValidDate) {
        alert('Invalid date format. Please enter a valid date.');
        return false; // Prevent form submission
      }
    
      function isValidDateFormat(dateString) {
        // Check if the date matches the desired format (YYYY-MM-DD)
        var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(dateString);
      }

      if (ReservationsAdults.value === "") {
        event.preventDefault();
        alert("Please select the number of adults for the reservation.");
      }

      


 window.location.href = `https://bookings.mykonosbooker.com/#/en/activities/${year}~2F${month}~2F${day}/${yearout}~2F${monthout}~2F${dayout}/Mykonos%20Island/O257055/${ReservationsAdults}/0/-/(category:${Category})`

});

//Activity Form
Activity.addEventListener('submit', (event) => {
  event.preventDefault();
  const Category = Activity.elements['activitycategory'].value;
  // console.log(`${Category}`);
  const ActivityDate = Activity.elements['activitydate'].value;
  const ActivityAdults = Activity.elements['activityadults'].value;


  const dateinComponents = ActivityDate.split("-");
  const year  = dateinComponents[0];
  const month = dateinComponents[1];
  const day   = dateinComponents[2];

  const selectedDate = new Date(ActivityDate);  
  selectedDate.setDate(selectedDate.getDate() + 1);

  // Extract year, month, and day components
  const yearout = selectedDate.getFullYear();
  const monthout = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const dayout = String(selectedDate.getDate()).padStart(2, '0');

// Date Validation
var isValidDate = isValidDateFormat(ActivityDate);
if (!isValidDate) {
  alert('Invalid date format. Please enter a valid date.');
  return false; // Prevent form submission
};

function isValidDateFormat(dateString) {
  // Check if the date matches the desired format (YYYY-MM-DD)
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
};

if (ActivityAdults.value === "") {
  event.preventDefault();
  alert("Please select the number of adults for the Activity.");
};
if (Category.value === "") {
  event.preventDefault();
  alert("Please select the Category for the Activity.");
};


  window.location.href = `https://bookings.mykonosbooker.com/#/en/activities/${year}~2F${month}~2F${day}/${yearout}~2F${monthout}~2F${dayout}/Mykonos%20Island/O257055/${ActivityAdults}/0/-/(category:${Category})`

});


// Services

Services.addEventListener('submit', (event) => {
  event.preventDefault();
  const Category = Services.elements['servicescategory'].value;
  if (Category.value === "") {
    event.preventDefault();
    alert("Please select the Category for the Activity.");
  };
   // console.log(`${Category}`);
const ServicesDate = Services.elements['servicesdate'].value;

const dateinComponents = ServicesDate.split("-");
  const year  = dateinComponents[0];
  const month = dateinComponents[1];
  const day   = dateinComponents[2];

  // Date Validation
var isValidDate = isValidDateFormat(ServicesDate);
if (!isValidDate) {
  alert('Invalid date format. Please enter a valid date.');
  return false; // Prevent form submission
};

function isValidDateFormat(dateString) {
  // Check if the date matches the desired format (YYYY-MM-DD)
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
};

const ServicesDays = Services.elements['servicesdays'].value;

  const selectedDate = new Date(ServicesDate);

  // Add the specified number of days to the selected date
  selectedDate.setDate(selectedDate.getDate() + parseInt(ServicesDays));


  const newYear = selectedDate.getFullYear();
  const newMonth = selectedDate.getMonth() + 1;
  const newDayOfMonth = selectedDate.getDate();

  //    console.log(`year: ${newYear}`);
   //    console.log(`month: ${newMonth}`);
  //     console.log(`day: ${newDayOfMonth}`);
  //      console.log(`${selectedDate}`);

  const ServicesAdults = Services.elements['services_adults'].value;
 // console.log(`${ServicesAdults}`)

 window.location.href = `https://bookings.mykonosbooker.com/#/en/activities/${year}~2F${month}~2F${day}/${newYear}~2F${newMonth}~2F${newDayOfMonth}/Mykonos%20Island/O257055/${ServicesAdults}/0/-/(category:${Category})`


});