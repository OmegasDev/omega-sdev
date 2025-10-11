// ===============================
// Omega Dev — Main Script
// Smooth Scroll, Reveal Animations, Header Scroll Effect, Mobile Nav
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  /* ----------------------------
     Scroll Reveal Animation
  ----------------------------- */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));

  /* ----------------------------
     Mobile Menu Toggle
  ----------------------------- */
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("open"); // open = visible
      mobileMenuButton.classList.toggle("active");
    });
  }

  /* ----------------------------
     Active Navigation Highlight
  ----------------------------- */
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = document.querySelectorAll("section[id]");

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-purple-400", "font-semibold");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("text-purple-400", "font-semibold");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);

  /* ----------------------------
     Smooth Scroll for Anchors
  ----------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  /* ----------------------------
     Scroll-Based Header Change
  ----------------------------- */
  const header = document.querySelector(".site-header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});
