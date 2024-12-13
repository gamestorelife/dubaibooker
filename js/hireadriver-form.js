document
  .getElementById("hireDriver")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const startDate = document.getElementById("roundedk-trans-in-hire").value;
    const adults = document.getElementById("adultsNumber").value;
    const children = document.getElementById("childrenNumber").value;
    const hireDays = document.getElementById("numberofDays").value;
    const hoursPerDay = document.getElementById("hoursperDay").value;

    // Collect missing fields
    const missingFields = [];
    if (!startDate) missingFields.push("Start Date");
    if (!adults) missingFields.push("Number of Adults");
    if (!hireDays) missingFields.push("Number of Hire Days");
    if (!hoursPerDay) missingFields.push("Hours Per Day");

    // Show alert if there are missing fields
    if (missingFields.length > 0) {
      alert(
        `Please fill in the following required fields: ${missingFields.join(
          ", "
        )}.`
      );
      return; // Stop the function from proceeding
    }

    const formData = {
      startDate,
      adults,
      children,
      hireDays,
      hoursPerDay,
    };

    try {
      const response = await fetch("/submit-hire-driver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);

      if (response.ok) {
        window.location.href = "hireadriver.html";
      } else {
        alert("Failed to save transfer data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  });
