document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    
    // Hide loading immediately
    const loadingSection = document.getElementById("loading-section");
    if (loadingSection) {
        loadingSection.style.display = "none";
    }
    
    // Check for successful payment
    if (params.get('status') === 'captured' || params.get('chargeUID')) {
        try {
            console.log("Starting booking finalization...");
            
            const response = await fetch("/finalize-booking-sequence", { 
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            console.log("Response status:", response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log("Finalization response data:", data);

            if (data.success === true) {
                console.log("Booking successful, showing success section");
                
                // Display the booking ID
                const bookingIdElement = document.getElementById("booking-id-display");
                const refNoElement = document.getElementById("ref-no-display");
                
                if (bookingIdElement) {
                    bookingIdElement.innerText = data.bookingId || data.referenceNo || "Not available";
                }
                
                if (refNoElement) {
                    refNoElement.innerText = data.referenceNo || data.bookingId || "Not available";
                }
                
                // Show PDF links
                const list = document.getElementById("ticket-list");
                if (list && data.tickets && data.tickets.length > 0) {
                    list.innerHTML = ""; // Clear loading message
                    data.tickets.forEach((t, index) => {
                        const item = document.createElement("div");
                        item.className = "ticket-item";
                        
                        const a = document.createElement("a");
                        a.href = t.pdfPath || "#";
                        a.innerText = `Download Ticket ${index + 1} (PDF)`;
                        a.target = "_blank";
                        a.className = "ticket-link";
                        
                        if (!t.pdfPath || t.pdfPath === "#") {
                            a.style.color = "gray";
                            a.style.cursor = "not-allowed";
                            a.onclick = (e) => e.preventDefault();
                        }
                        
                        item.appendChild(a);
                        list.appendChild(item);
                    });
                } else if (list) {
                    if (data.ticketError) {
                        list.innerHTML = `<p>${data.ticketError}</p>`;
                    } else {
                        list.innerHTML = "<p>No tickets available for download at this time.</p>";
                    }
                }
                
                // Hide error section if it exists
                const errorSection = document.getElementById("error-section");
                if (errorSection) {
                    errorSection.style.display = "none";
                }
                
                // Show success section
                const successSection = document.getElementById("success-section");
                if (successSection) {
                    successSection.style.display = "block";
                }
                
            } else {
                console.log("Booking failed, showing error section:", data);
                // Handle API error (like the 169 error)
                showErrorSection(data);
            }
        } catch (error) {
            console.error("Error finalizing booking:", error);
            showGenericError();
        }
    } else {
        // Payment not captured
        console.log("Payment not captured, showing status message");
        document.getElementById("status-message").innerText = "Payment not confirmed. Please check your payment status.";
        document.getElementById("status-message").style.display = "block";
    }
});