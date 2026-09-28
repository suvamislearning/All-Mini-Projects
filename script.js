/* ===== SCALABLE PROJECTS DATA ===== */
/* Add new projects here — they will automatically appear on the dashboard */
const projects = [
  {
    id: 1,
    title: "Blog Page",
    description: "A simple and cool blog page dashboard for your crazy bloggings.",
    path: "projects/BLOG PAGE/index.html",
    tags: ["HTML", "CSS", "UI"]
  },
  {
    id: 2,
    title: "Contact Us Form",
    description: "A contact form page for visitors to get in touch.",
    path: "projects/CONTACT-US FORM/index.html",
    tags: ["HTML", "CSS", "Forms"]
  },
  {
    id: 3,
    title: "Food Website",
    description: "A vibrant food website showcasing dishes and delivery information.",
    path: "projects/FOOD-WEBSITE/index.html",
    tags: ["HTML", "CSS", "Food"]
  },
  {
    id: 4,
    title: "Shoe Shop",
    description: "A product page for browsing a running shoe and its available variants.",
    path: "projects/SHOE SHOP/index.html",
    tags: ["HTML", "CSS", "E-commerce"]
  },
  {
    id: 5,
    title: "Credit Card UI",
    description: "A sleek payment card interface with a cardholder and account details.",
    path: "projects/credit-card/index.html",
    tags: ["HTML", "CSS", "UI"]
  },
  {
    id: 6,
    title: "Tribute Card",
    description: "A tribute page honoring Indian freedom fighter Subhas Chandra Bose.",
    path: "projects/tribute-card/index.html",
    tags: ["HTML", "CSS", "Tribute"]
  }
];

/* ===== RENDER PROJECTS ===== */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p) => `
    <article class="project-card">
      <span class="project-number">0${p.id}</span>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <a href="${p.path}" class="btn-explore">
        Explore Project <i class="fas fa-arrow-right"></i>
      </a>
    </article>
  `
    )
    .join("");
}

/* ===== TYPEWRITER EFFECT ===== */
const phrases = [
  "My FrontEnd Projects",
  "Creative UI Builds",
  "Code That Feels Alive"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 90;
const deleteSpeed = 45;
const pauseEnd = 1800;
const pauseStart = 400;

function typeWriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const current = phrases[phraseIndex];

  if (!isDeleting) {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeWriter, pauseEnd);
      return;
    }
  } else {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeWriter, pauseStart);
      return;
    }
  }

  setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  typeWriter();

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
