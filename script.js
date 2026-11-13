const searchForm = document.querySelector(".search");
const searchInput = document.querySelector("#site-search");
const toast = document.querySelector(".toast");

// Add each new poster here and place its image in assets/banners/.
const promoPosters = [
  {
    image: "assets/banners/sks-mobile-promo.jpg",
    alt: "SKS Mobile online mobile phone store poster",
    href: "#contact",
  },
];

const carousel = document.querySelector(".promo-carousel");
const slides = carousel.querySelector(".promo-slides");
const controls = carousel.querySelector(".promo-controls");
const dots = carousel.querySelector(".promo-dots");
let activePoster = 0;
let rotationTimer;

function showPoster(index) {
  activePoster = (index + promoPosters.length) % promoPosters.length;

  slides.querySelectorAll(".promo-slide").forEach((slide, slideIndex) => {
    const isActive = slideIndex === activePoster;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  dots.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.setAttribute("aria-pressed", String(dotIndex === activePoster));
  });
}

promoPosters.forEach((poster, index) => {
  const slide = document.createElement("a");
  slide.className = "promo-slide";
  slide.href = poster.href;
  slide.setAttribute("aria-label", `Poster ${index + 1}`);
  slide.setAttribute("aria-hidden", "true");

  const image = document.createElement("img");
  image.src = poster.image;
  image.alt = poster.alt;
  image.fetchPriority = index === 0 ? "high" : "auto";
  slide.append(image);
  slides.append(slide);

  if (promoPosters.length > 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Poster ${index + 1}`);
    dot.addEventListener("click", () => showPoster(index));
    dots.append(dot);
  }
});

controls.hidden = promoPosters.length < 2;
showPoster(0);

if (promoPosters.length > 1) {
  carousel.querySelector(".promo-previous").addEventListener("click", () => {
    showPoster(activePoster - 1);
  });
  carousel.querySelector(".promo-next").addEventListener("click", () => {
    showPoster(activePoster + 1);
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function startRotation() {
    window.clearInterval(rotationTimer);
    if (!reducedMotion.matches) {
      rotationTimer = window.setInterval(() => showPoster(activePoster + 1), 5000);
    }
  }

  carousel.addEventListener("mouseenter", () => window.clearInterval(rotationTimer));
  carousel.addEventListener("mouseleave", startRotation);
  carousel.addEventListener("focusin", () => window.clearInterval(rotationTimer));
  carousel.addEventListener("focusout", startRotation);
  reducedMotion.addEventListener("change", startRotation);
  startRotation();
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  toast.textContent = query
    ? `“${query}” සඳහා අපෙන් විමසන්න — 011 234 5678`
    : "සොයන්න අවශ්‍ය භාණ්ඩයේ නම ඇතුළත් කරන්න.";
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
});
