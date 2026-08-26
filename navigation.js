(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const headerPanel = document.querySelector("#headerPanel");
  const profileMenu = document.querySelector(".profile-menu");

  function setMenuOpen(isOpen) {
    if (!menuToggle || !headerPanel) return;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    headerPanel.classList.toggle("is-open", isOpen);
    const label = menuToggle.querySelector("span");
    if (label) label.textContent = isOpen ? "Close" : "Menu";
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    setMenuOpen(isOpen);
  });

  headerPanel?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (profileMenu?.open && !profileMenu.contains(event.target)) {
      profileMenu.removeAttribute("open");
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
})();
