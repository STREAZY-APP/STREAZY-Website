document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     HAMBURGER (nur wenn da)
  ========================= */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  /* =========================
     SPRACHMENÜ
  ========================= */
  const languageSelector = document.querySelector(".language-selector");
  const languageDropdown = document.getElementById("languageDropdown");

  if (languageSelector && languageDropdown) {
    document.addEventListener("click", (event) => {
      if (!languageSelector.contains(event.target)) {
        languageDropdown.classList.remove("open");
      }
    });
  }

  /* =========================
     FADE-IN BEIM SCROLLEN
  ========================= */
  const elements = document.querySelectorAll(".fade-in-scroll");

  if (elements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // nur einmal animieren
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    elements.forEach((el) => observer.observe(el));
  }
});

/* =========================
   SPRACHMENÜ TOGGLE
========================= */
function toggleLanguageMenu() {
  document.getElementById("languageDropdown")?.classList.toggle("open");
}