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
