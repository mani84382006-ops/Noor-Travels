document.addEventListener("DOMContentLoaded", () => {

  // ================= NAV MOBILE TOGGLE =================
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      siteNav.classList.toggle("is-open", !expanded);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
      });
    });
  }

  // ================= YEAR AUTO =================
  const yearNode = document.querySelector("#year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  // ================= WHATSAPP FORM =================
  const inquiryForm = document.querySelector("#inquiry-form");
  const whatsappNumber = "919688879994";

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("#traveller-name")?.value.trim() || "Customer";
      const service = document.querySelector("#service-type")?.value || "Visa service";
      const country = document.querySelector("#country")?.value || "Saudi Arabia";
      const customService = document.querySelector("#custom-service")?.value.trim();

      let message = `Hello Noor Travels, My name is ${name}. I need ${service} for ${country}.`;

      if (customService) {
        message += ` Extra requirement: ${customService}.`;
      }

      message += " Please share details.";

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    });
  }

});

// ================= CERTIFICATE TOGGLE =================
function toggleCertificate() {
  const cert = document.getElementById("certificate");

  if (!cert) {
    alert("Certificate section not found in HTML!");
    return;
  }

  if (cert.style.display === "none" || cert.style.display === "") {
    cert.style.display = "block";
    cert.scrollIntoView({ behavior: "smooth" });
  } else {
    cert.style.display = "none";
  }
}
