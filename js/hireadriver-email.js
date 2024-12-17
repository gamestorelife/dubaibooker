document
  .getElementById("hireadriverbook-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const myDialog = document.getElementById("my-dialog");
    myDialog.showModal();

    const formData = new FormData(event.target);
    const formInputs = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/submit-hire-driver-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputs),
      });

      if (response.ok) {
        alert("Your booking was successful! Confirmation email sent.");
        myDialog.close();
        window.location.href = "index.html";
      } else {
        const errorData = await response.json();
        alert("Failed to submit booking: " + errorData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  });
