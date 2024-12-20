document.addEventListener("DOMContentLoaded", () => {
  const reservationForm = document.getElementById("reservation-form");

  reservationForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(reservationForm);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/submit-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.redirectUrl) {
          console.log("Redirecting to:", data.redirectUrl);
          window.location.href = data.redirectUrl; // Use the provided URL
        } else {
          console.error("No redirectUrl in response");
          alert("No redirection URL found in the response.");
        }
      } else {
        console.error("Server responded with an error");
        alert("Failed to save the reservation.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }
  });
});
