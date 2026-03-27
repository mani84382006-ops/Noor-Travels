if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#traveller-name")?.value.trim() || "Customer";
    const service = document.querySelector("#service-type")?.value || "Visa service";
    const country = document.querySelector("#country")?.value || "Saudi Arabia";
    const custom = document.querySelector("#custom-service")?.value || "";

    const message = `Hi Noor Travels,
Name: ${name}
Destination: ${country}
Service: ${service}
Other: ${custom}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}
