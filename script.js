document.addEventListener("DOMContentLoaded", function () {

  const inquiryForm = document.getElementById("inquiry-form");

  // ✅ Correct WhatsApp number (India format)
  const whatsappNumber = "919688879994";

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("traveller-name").value || "Customer";
      let country = document.getElementById("country").value;
      let service = document.getElementById("service-type").value;
      let custom = document.getElementById("custom-service").value || "None";

      // ✅ Simple message (no formatting issues)
      let message = "Hi Noor Travels,%0A"
        + "Name: " + name + "%0A"
        + "Destination: " + country + "%0A"
        + "Service: " + service + "%0A"
        + "Other: " + custom;

      // ✅ FINAL URL
      let url = "https://wa.me/" + whatsappNumber + "?text=" + message;

      window.open(url, "_blank");
    });
  }

});
