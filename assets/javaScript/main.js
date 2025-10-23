
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

// mobile menu
if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    document.body.classList.toggle(
      "no-scroll",
      mobileNav.classList.contains("active")
    );
  });
}

// animations
const animateElements = document.querySelectorAll(".animate-on-scroll");

const observerOptions = {
  root: null, 
  rootMargin: "0px",
  threshold: 0.9, 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

animateElements.forEach((element) => {
  observer.observe(element);
});
