document.addEventListener("DOMContentLoaded", async () => {
    console.log("services-form.js loaded"); // Debug log
    
    $("#services_form").on("submit", async function (e) {
        e.preventDefault();
        
        console.log("Form submit triggered"); // Debug log
        
        const formData = {
            servicesCategory: $("#servicesCategory").val(),
            servicesDate: $("#servicesDate").val(),
            servicesDays: $("#servicesDays").val(),
            servicesAdults: $("#servicesAdults").val(),
        };

        console.log("Form data:", formData); // Debug log

        // Validation
        if (!formData.servicesDate || !formData.servicesCategory || !formData.servicesAdults || !formData.servicesDays) {
            alert("Please confirm the service date.");
            return;
        }

        try {
            console.log("Sending POST request to /save-services-data..."); // Debug log
            
            const response = await fetch("/save-services-data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

           // console.log("Response status:", response.status); // Debug log
            
            const result = await response.json();
           // console.log("Response data:", result); // Debug log

            if (response.ok) {
                console.log("Services data saved successfully:", result.message);
                // alert("Form submitted successfully!"); // Add user feedback
                // Optional: Clear form or redirect
                // window.location.href = "/next-page.html";
                 if (result.redirectUrl) {
                    window.location.href = result.redirectUrl; 
                }
            } else {
                console.error("Server returned error:", result);
                alert("Error submitting form: " + (result.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Error saving services:", error);
            alert("Network error. Please check your connection.");
        }
    });
    
    console.log("Form event listener attached"); // Debug log
});