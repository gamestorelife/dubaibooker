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

      // Retrieve services data from session
      const servicesResponse = await fetch("/get-services-data");
      if (!servicesResponse.ok) {
        throw new Error("Failed to fetch services data from session");
      }
      
      const servicesData = await servicesResponse.json();
      
      // Check if services data exists in session
      if (!servicesData || !servicesData.servicesData) {
        throw new Error("No services data found in session. Please start over.");
      }

      const {  Date: servicesDate, Days: servicesDays, Adults: servicesAdults } = servicesData.servicesData;

      // Prepare payload for sending to the server
      const payload = {
        reservationItem,
        name,
        email,
        phone,
        comments,
        servicesDate,
        servicesDays,
        servicesAdults,
        // reservationDate: servicesDate, // You might want this too
        // adults: servicesAdults,
      };

      console.log("Sending payload:", payload);

      // Send payload to the backend
      const emailResponse = await fetch("/send-services-email", {
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
        const errorData = await emailResponse.json();
        alert(`Failed to send reservation email: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error handling form submission:", error);
      alert(error.message || "An error occurred while submitting the form.");
    }
  });