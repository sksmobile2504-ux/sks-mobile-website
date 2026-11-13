const searchForm = document.querySelector(".search");
const searchInput = document.querySelector("#site-search");
const toast = document.querySelector(".toast");
const languageSelect = document.querySelector("#language-select");

const translations = {
  si: {
    title: "SKS Mobile | දුරකථන, Accessories සහ Repair සේවා",
    description: "SKS Mobile වෙතින් smartphones, accessories සහ විශ්වාසදායක mobile repair සේවා ලබාගන්න.",
    "announcement.headline": "ඔබේ දුරකථනයට අවශ්‍ය හැමදේම එකම තැනකින්",
    "announcement.service": "අලුත්වැඩියා සේවා",
    "language.label": "භාෂාව තෝරන්න",
    "search.label": "භාණ්ඩ සොයන්න",
    "search.placeholder": "දුරකථන සහ accessories සොයන්න...",
    "search.submit": "සොයන්න",
    "search.result": "“{query}” සඳහා අපෙන් විමසන්න — 011 234 5678",
    "search.empty": "සොයන්න අවශ්‍ය භාණ්ඩයේ නම ඇතුළත් කරන්න.",
    "contact.call": "අපට කතා කරන්න",
    "cart.label": "සාප්පු කූඩය",
    "nav.label": "ප්‍රධාන මෙනුව",
    "nav.home": "මුල් පිටුව",
    "nav.phones": "ජංගම දුරකථන",
    "nav.accessories": "Accessories",
    "nav.repairs": "Repair සේවා",
    "nav.about": "අප ගැන",
    "nav.contact": "සම්බන්ධ වන්න",
    "nav.note": "විශ්වාසයෙන් මිලදී ගන්න",
    "promo.label": "විශේෂ දීමනා",
    "promo.previous": "පෙර poster එක",
    "promo.choose": "Poster එකක් තෝරන්න",
    "promo.next": "ඊළඟ poster එක",
    "hero.kicker": "SKS MOBILE — ඔබේ විශ්වාසවන්ත සහකරු",
    "hero.title": "ඔබේ ලෝකය,<br />එක <span>touch</span> එකකින්.",
    "hero.description": "අලුත්ම smartphones, ගුණාත්මක accessories සහ විශ්වාසවන්ත repair සේවාව — ඔබට අවශ්‍ය හැමදේම එකම තැනකින්.",
    "hero.browse": "දුරකථන බලන්න",
    "hero.repairs": "Repair සේවා",
    "hero.customers": "සතුටුදායක පාරිභෝගිකයින්",
    "hero.rating": "විශ්වාසදායක සේවාව",
    "hero.featured": "විශේෂිත smartphone එක",
    "hero.new": "අලුත්ම",
    "hero.collection": "Tech<br />එකතුව",
    "hero.quality": "තත්ත්වය සහතිකයි",
    "hero.genuine": "100% genuine",
    "benefits.label": "අපගේ සේවා වාසි",
    "benefits.delivery": "දිවයින පුරා Delivery",
    "benefits.deliveryDetail": "ආරක්ෂිතව ඔබේ නිවසටම",
    "benefits.quality": "විශ්වාසදායක ගුණාත්මකභාවය",
    "benefits.qualityDetail": "Original නිෂ්පාදන පමණයි",
    "benefits.repair": "දක්ෂ Repair සේවාව",
    "benefits.repairDetail": "පළපුරුදු කාර්මික ශිල්පීන්",
    "benefits.support": "ඔබ වෙනුවෙන්ම සහාය",
    "benefits.supportDetail": "මිලදී ගැනීමෙන් පසුවත්",
    "categories.kicker": "ඔබට අවශ්‍ය දේ තෝරන්න",
    "categories.title": "අපේ <span>එකතුව</span>",
    "categories.viewAll": "සියල්ල බලන්න",
    "categories.phones": "Smartphones",
    "categories.phonesDetail": "අලුත්ම models රැසක්",
    "categories.audio": "Audio & Earbuds",
    "categories.audioDetail": "ඔබේ රිද්මයට ගැළපෙන්න",
    "categories.accessories": "Accessories",
    "categories.accessoriesDetail": "දිනපතා භාවිතයට තවත් දේ",
    "categories.repair": "Repair සේවා",
    "categories.repairDetail": "ඉක්මන්, විශ්වාසදායක අලුත්වැඩියා",
    "featured.kicker": "ඔබේ හොඳම තේරීම",
    "featured.title": "හොඳ tech එකක්,<br /><span>හොඳ මිලකට.</span>",
    "featured.description": "ඔබේ අවශ්‍යතාවයට ගැළපෙන දුරකථනය තෝරාගන්න. අපේ කණ්ඩායම ඔබට උදව් කරන්න සූදානම්.",
    "featured.action": "අපෙන් විමසන්න",
    "featured.tag": "01 — NEW ARRIVALS",
    "featured.footer": "ඔබේ ඊළඟ upgrade එක මෙතැනින්.",
    "contact.kicker": "අපි උදව් කරන්න සූදානම්",
    "contact.title": "ඔබට හොයන දේ හමුවුණේ නැද්ද?",
    "contact.description": "අපේ කණ්ඩායමට කතා කරන්න — ඔබට ගැළපෙන හොඳම විසඳුම සොයා දෙන්නම්.",
    "contact.action": "අපට කතා කරන්න",
    "footer.description": "ඔබේ mobile ලෝකයට අවශ්‍ය හැමදේම.<br />විශ්වාසයෙන්, එකම තැනකින්.",
    "footer.copyright": "© 2025 SKS Mobile. සියලු හිමිකම් ඇවිරිණි.",
    "poster.alt": "SKS Mobile online mobile phone store poster",
    "poster.label": "Poster {number}",
  },
  en: {
    title: "SKS Mobile | Phones, Accessories & Repairs",
    description: "Shop smartphones and accessories, or get reliable mobile phone repairs at SKS Mobile.",
    "announcement.headline": "Everything your phone needs, all in one place",
    "announcement.service": "Repair services",
    "language.label": "Choose language",
    "search.label": "Search products",
    "search.placeholder": "Search phones and accessories...",
    "search.submit": "Search",
    "search.result": "Ask us about “{query}” — 011 234 5678",
    "search.empty": "Enter a product name to search.",
    "contact.call": "Call us",
    "cart.label": "Shopping cart",
    "nav.label": "Main navigation",
    "nav.home": "Home",
    "nav.phones": "Mobile phones",
    "nav.accessories": "Accessories",
    "nav.repairs": "Repair services",
    "nav.about": "About us",
    "nav.contact": "Contact",
    "nav.note": "Shop with confidence",
    "promo.label": "Special offers",
    "promo.previous": "Previous poster",
    "promo.choose": "Choose a poster",
    "promo.next": "Next poster",
    "hero.kicker": "SKS MOBILE — YOUR TRUSTED PARTNER",
    "hero.title": "Your world,<br />one <span>touch</span> away.",
    "hero.description": "The latest smartphones, quality accessories, and reliable repairs — everything you need, all in one place.",
    "hero.browse": "Browse phones",
    "hero.repairs": "Repair services",
    "hero.customers": "happy customers",
    "hero.rating": "Trusted service",
    "hero.featured": "Featured smartphone",
    "hero.new": "LATEST",
    "hero.collection": "Tech<br />collection",
    "hero.quality": "Quality assured",
    "hero.genuine": "100% genuine",
    "benefits.label": "Our service benefits",
    "benefits.delivery": "Islandwide delivery",
    "benefits.deliveryDetail": "Safely delivered to your door",
    "benefits.quality": "Trusted quality",
    "benefits.qualityDetail": "Genuine products, always",
    "benefits.repair": "Expert repair service",
    "benefits.repairDetail": "Experienced technicians",
    "benefits.support": "Here to help you",
    "benefits.supportDetail": "Support after your purchase",
    "categories.kicker": "Find what you need",
    "categories.title": "Explore our <span>collection</span>",
    "categories.viewAll": "View all",
    "categories.phones": "Smartphones",
    "categories.phonesDetail": "The latest models",
    "categories.audio": "Audio & Earbuds",
    "categories.audioDetail": "Find your perfect sound",
    "categories.accessories": "Accessories",
    "categories.accessoriesDetail": "Everyday essentials",
    "categories.repair": "Repair services",
    "categories.repairDetail": "Fast, reliable phone repairs",
    "featured.kicker": "A smart choice for you",
    "featured.title": "Great technology,<br /><span>at a great price.</span>",
    "featured.description": "Choose a phone that fits your needs. Our team is ready to help you find the right one.",
    "featured.action": "Ask us",
    "featured.tag": "01 — NEW ARRIVALS",
    "featured.footer": "Your next upgrade starts here.",
    "contact.kicker": "We're here to help",
    "contact.title": "Couldn't find what you're looking for?",
    "contact.description": "Give our team a call — we'll help you find the right solution.",
    "contact.action": "Call us",
    "footer.description": "Everything your mobile world needs.<br />Trusted service, all in one place.",
    "footer.copyright": "© 2025 SKS Mobile. All rights reserved.",
    "poster.alt": "SKS Mobile online mobile phone store poster",
    "poster.label": "Poster {number}",
  },
  ta: {
    title: "SKS Mobile | கைபேசிகள், உபகரணங்கள் மற்றும் பழுதுபார்ப்பு",
    description: "SKS Mobile இல் ஸ்மார்ட்போன்கள், உபகரணங்கள் மற்றும் நம்பகமான கைபேசி பழுதுபார்ப்பு சேவைகளைப் பெறுங்கள்.",
    "announcement.headline": "உங்கள் கைபேசிக்குத் தேவையான அனைத்தும் ஒரே இடத்தில்",
    "announcement.service": "பழுதுபார்ப்பு சேவைகள்",
    "language.label": "மொழியைத் தேர்ந்தெடுக்கவும்",
    "search.label": "பொருட்களைத் தேடுங்கள்",
    "search.placeholder": "கைபேசிகள் மற்றும் உபகரணங்களைத் தேடுங்கள்...",
    "search.submit": "தேடு",
    "search.result": "“{query}” பற்றி எங்களிடம் கேளுங்கள் — 011 234 5678",
    "search.empty": "தேடுவதற்கு ஒரு பொருளின் பெயரை உள்ளிடுங்கள்.",
    "contact.call": "எங்களை அழைக்கவும்",
    "cart.label": "வாங்கும் கூடை",
    "nav.label": "முக்கிய வழிசெலுத்தல்",
    "nav.home": "முகப்பு",
    "nav.phones": "கைபேசிகள்",
    "nav.accessories": "உபகரணங்கள்",
    "nav.repairs": "பழுதுபார்ப்பு",
    "nav.about": "எங்களைப் பற்றி",
    "nav.contact": "தொடர்புக்கு",
    "nav.note": "நம்பிக்கையுடன் வாங்குங்கள்",
    "promo.label": "சிறப்புச் சலுகைகள்",
    "promo.previous": "முந்தைய விளம்பரம்",
    "promo.choose": "விளம்பரத்தைத் தேர்ந்தெடுக்கவும்",
    "promo.next": "அடுத்த விளம்பரம்",
    "hero.kicker": "SKS MOBILE — உங்கள் நம்பகமான கூட்டாளர்",
    "hero.title": "உங்கள் உலகம்,<br />ஒரு <span>தொடுதலில்</span>.",
    "hero.description": "புதிய ஸ்மார்ட்போன்கள், தரமான உபகரணங்கள் மற்றும் நம்பகமான பழுதுபார்ப்பு சேவை — உங்களுக்குத் தேவையான அனைத்தும் ஒரே இடத்தில்.",
    "hero.browse": "கைபேசிகளைப் பாருங்கள்",
    "hero.repairs": "பழுதுபார்ப்பு சேவைகள்",
    "hero.customers": "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    "hero.rating": "நம்பகமான சேவை",
    "hero.featured": "சிறப்பு ஸ்மார்ட்போன்",
    "hero.new": "புதியது",
    "hero.collection": "தொழில்நுட்ப<br />தொகுப்பு",
    "hero.quality": "தரம் உறுதி",
    "hero.genuine": "100% உண்மையானது",
    "benefits.label": "எங்கள் சேவையின் நன்மைகள்",
    "benefits.delivery": "தீவு முழுவதும் விநியோகம்",
    "benefits.deliveryDetail": "பாதுகாப்பாக உங்கள் வீட்டிற்கே",
    "benefits.quality": "நம்பகமான தரம்",
    "benefits.qualityDetail": "அசல் தயாரிப்புகள் மட்டுமே",
    "benefits.repair": "நிபுணர் பழுதுபார்ப்பு சேவை",
    "benefits.repairDetail": "அனுபவமுள்ள தொழில்நுட்ப வல்லுநர்கள்",
    "benefits.support": "உங்களுக்கான ஆதரவு",
    "benefits.supportDetail": "வாங்கிய பின்னரும் உதவி",
    "categories.kicker": "உங்களுக்குத் தேவையானதைத் தேர்ந்தெடுங்கள்",
    "categories.title": "எங்கள் <span>தொகுப்பு</span>",
    "categories.viewAll": "அனைத்தையும் பாருங்கள்",
    "categories.phones": "ஸ்மார்ட்போன்கள்",
    "categories.phonesDetail": "புதிய மாடல்கள்",
    "categories.audio": "ஒலி & காதுக்கருவிகள்",
    "categories.audioDetail": "உங்கள் விருப்பமான ஒலி",
    "categories.accessories": "கைபேசி உபகரணங்கள்",
    "categories.accessoriesDetail": "தினசரி பயன்பாட்டிற்கு",
    "categories.repair": "பழுதுபார்ப்பு சேவைகள்",
    "categories.repairDetail": "விரைவான, நம்பகமான பழுதுபார்ப்பு",
    "featured.kicker": "உங்களுக்கான சிறந்த தேர்வு",
    "featured.title": "சிறந்த தொழில்நுட்பம்,<br /><span>சிறந்த விலையில்.</span>",
    "featured.description": "உங்கள் தேவைக்கு ஏற்ற கைபேசியைத் தேர்ந்தெடுங்கள். சரியானதைத் தேர்வு செய்ய எங்கள் குழு உதவும்.",
    "featured.action": "எங்களிடம் கேளுங்கள்",
    "featured.tag": "01 — புதிய வரவுகள்",
    "featured.footer": "உங்கள் அடுத்த மேம்பாடு இங்கே தொடங்குகிறது.",
    "contact.kicker": "உதவ நாங்கள் தயாராக இருக்கிறோம்",
    "contact.title": "நீங்கள் தேடியது கிடைக்கவில்லையா?",
    "contact.description": "எங்கள் குழுவை அழையுங்கள் — உங்களுக்கு ஏற்ற தீர்வைக் கண்டறிய உதவுகிறோம்.",
    "contact.action": "எங்களை அழைக்கவும்",
    "footer.description": "உங்கள் கைபேசி உலகிற்குத் தேவையான அனைத்தும்.<br />நம்பகமான சேவை, ஒரே இடத்தில்.",
    "footer.copyright": "© 2025 SKS Mobile. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "poster.alt": "SKS Mobile இணைய கைபேசி கடை விளம்பரப் படம்",
    "poster.label": "விளம்பரம் {number}",
  },
};

// Add each new poster here and place its image in assets/banners/.
const promoPosters = [
  {
    image: "assets/banners/sks-mobile-promo.jpg",
    altKey: "poster.alt",
    href: "#contact",
  },
];

const carousel = document.querySelector(".promo-carousel");
const slides = carousel.querySelector(".promo-slides");
const controls = carousel.querySelector(".promo-controls");
const dots = carousel.querySelector(".promo-dots");
let activePoster = 0;
let rotationTimer;
let currentLanguage = "si";

function translate(key, values = {}) {
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    translations[currentLanguage][key] ?? key,
  );
}

function updateLanguage(language) {
  if (!Object.hasOwn(translations, language)) return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = translations[language].title;
  document.querySelector('meta[name="description"]').content =
    translations[language].description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });
  promoPosters.forEach((poster, index) => {
    const slide = slides.querySelectorAll(".promo-slide")[index];
    slide.setAttribute(
      "aria-label",
      translate("poster.label", { number: index + 1 }),
    );
    slide.querySelector("img").alt = translate(poster.altKey);
    dots.querySelectorAll("button")[index]?.setAttribute(
      "aria-label",
      translate("poster.label", { number: index + 1 }),
    );
  });
}

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
  slide.setAttribute("aria-hidden", "true");

  const image = document.createElement("img");
  image.src = poster.image;
  image.alt = translate(poster.altKey);
  image.fetchPriority = index === 0 ? "high" : "auto";
  slide.append(image);
  slides.append(slide);

  if (promoPosters.length > 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.addEventListener("click", () => showPoster(index));
    dots.append(dot);
  }
});

controls.hidden = promoPosters.length < 2;
showPoster(0);
updateLanguage(currentLanguage);
languageSelect.addEventListener("change", () => {
  updateLanguage(languageSelect.value);
  try {
    localStorage.setItem("sks-mobile-language", languageSelect.value);
  } catch (error) {
    console.warn("Could not save the selected language.", error);
  }
});

try {
  const savedLanguage = localStorage.getItem("sks-mobile-language");
  if (savedLanguage && Object.hasOwn(translations, savedLanguage)) {
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);
  }
} catch (error) {
  console.warn("Could not load the saved language.", error);
}

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
    ? translate("search.result", { query })
    : translate("search.empty");
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
});
