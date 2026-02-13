// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form handler (AJAX - no redirect)
const form = document.querySelector(".contact-form");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop redirect

    statusEl.textContent = "Sending message...";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzdaeayg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        statusEl.textContent = "Message sent successfully!";
        form.reset();
      } else {
        statusEl.textContent = "Failed to send message.";
      }
    } catch (error) {
      statusEl.textContent = "Error sending message.";
    }
  });
}




