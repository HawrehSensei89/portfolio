document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const nav = document.querySelector("#header nav");

  if (!header || !nav) return;

  const menuButton = document.createElement("button");
  menuButton.className = "menu-toggle";
  menuButton.type = "button";
  menuButton.setAttribute("aria-label", "Toggle navigation");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.innerHTML = '<i class="ri-menu-line"></i>';

  header.insertBefore(menuButton, nav);

  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.innerHTML = isOpen
      ? '<i class="ri-close-line"></i>'
      : '<i class="ri-menu-line"></i>';
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.innerHTML = '<i class="ri-menu-line"></i>';
    });
  });
});
