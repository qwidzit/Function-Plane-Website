// ----- Theme toggle (light by default; respects user choice across visits) -----
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("fp-theme");
  if (stored === "dark" || stored === "light") {
    root.setAttribute("data-theme", stored);
  } else {
    root.setAttribute("data-theme", "light");
  }

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("fp-theme", next);
    });
  }
})();

// ----- Mobile menu -----
(function () {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("menuToggle");
  const drawer = document.getElementById("navDrawer");
  if (!nav || !toggle || !drawer) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    drawer.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  });

  drawer.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      drawer.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    })
  );
})();

// ----- Footer year -----
(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
