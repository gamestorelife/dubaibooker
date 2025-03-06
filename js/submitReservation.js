document
  .getElementById("reservation-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const myDialog = document.getElementById("my-dialog");
    myDialog.showModal();

    try {
      // Collect form input values
      const reservationItem = document.getElementById("reservation-Type").value;
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const comments = document.getElementById("comments").value;
     // const insurance = document.querySelector("input[name='insurance']:checked").value;

      // Retrieve reservation data
      const response = await fetch("/retrieve-reservation");
      if (!response.ok) {
        throw new Error("Failed to fetch reservation data");
      }
      const { reservation } = await response.json();

      // Prepare payload for sending to the server
      const payload = {
        reservationItem,
        name,
        email,
        phone,
        comments,
        //insurance,
        reservationDate: reservation.date,
        adults: reservation.adults,
      };

      // Send payload to the backend
      const emailResponse = await fetch("/send-reservation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (emailResponse.ok) {
        alert("Reservation email sent successfully!");
        myDialog.close();
        window.location.href = "index.html";
      } else {
        alert("Failed to send reservation email");
      }
    } catch (error) {
      console.error("Error handling form submission:", error);
      alert("An error occurred while submitting the form.");
    }
  });
