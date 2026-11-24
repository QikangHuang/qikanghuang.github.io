const sections = [...document.querySelectorAll("main .section")];
const navLinks = [...document.querySelectorAll(".nav-link")];

const linkById = new Map(
  navLinks
    .map((link) => [link.getAttribute("href")?.replace("#", ""), link])
    .filter(([id]) => id)
);

const activate = (id) => {
  navLinks.forEach((link) => link.classList.remove("active"));
  const current = linkById.get(id) || linkById.get("home");
  current?.classList.add("active");
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      activate(visible.target.id);
    }
  },
  {
    rootMargin: "-30% 0px -55% 0px",
    threshold: [0.12, 0.35, 0.6],
  }
);

sections.forEach((section) => observer.observe(section));

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href")?.replace("#", "");
    if (id) {
      activate(id);
    }
  });
});

const lightbox = document.getElementById("figure-lightbox");

if (lightbox && typeof lightbox.showModal === "function") {
  const lightboxImg = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const lightboxOpen = lightbox.querySelector(".lightbox-open");

  document.querySelectorAll(".project-figure").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.dataset.full;
      const thumb = trigger.querySelector("img");
      lightboxImg.src = src;
      lightboxImg.alt = thumb ? thumb.alt : "";
      lightboxCaption.textContent = trigger.dataset.caption || "";
      lightboxOpen.href = src;
      lightbox.showModal();
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });
} else {
  // Very old browsers without <dialog>: fall back to opening the image directly.
  document.querySelectorAll(".project-figure").forEach((trigger) => {
    trigger.addEventListener("click", () => window.open(trigger.dataset.full, "_blank", "noopener"));
  });
}
