
const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); 

    const sectionID = this.getAttribute("href"); 
    const section = document.querySelector(sectionID);

    section.scrollIntoView({ behavior: "smooth" });
  });
});

const learnMoreBtn = document.querySelector(".btn--outline");

learnMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const section = document.querySelector("#how"); 
  section.scrollIntoView({ behavior: "smooth" });
});
const header = document.querySelector(".header");
const heroSection = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px", 
  }
);

obs.observe(heroSection);
const mobileBtn = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".main-nav");

if (mobileBtn) {
  mobileBtn.addEventListener("click", function () {
    nav.classList.toggle("open-nav");
  });
}
