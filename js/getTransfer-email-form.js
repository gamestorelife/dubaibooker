document
  .getElementById("book-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const myDialog = document.getElementById("my-dialog");
    myDialog.showModal();
    // Validate required fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const insurance = document.querySelector(
      'input[name="insurance"]:checked'
    ).value;
    const comments = document.getElementById("comments").value;

    if (!name || !email || !phone) {
      alert("Please fill in all required fields: Name, Email, and Phone.");
      return;
    }

    // Fetch transfer session data
    const transferResponse = await fetch("/get-transfer-data");
    const transferData = transferResponse.ok
      ? await transferResponse.json()
      : null;

    if (!transferData) {
      alert("Transfer data not found.");
      return;
    }

    const formData = {
      name,
      email,
      phone,
      carType: document.getElementById("carType").value,
      insurance,
      comments,
      bookingDetails: transferData,
    };

    try {
      const submitResponse = await fetch("/send-gettransfer-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (submitResponse.ok) {
        alert("Booking confirmed! Check your email for details.");
        myDialog.close();
        window.location.href = "index.html";
      } else {
        alert("Failed to send booking confirmation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  });
