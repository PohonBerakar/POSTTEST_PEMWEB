const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.className = "btn btn-primary scroll-top";
document.body.appendChild(scrollBtn);
scrollBtn.style.display = "none";
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

sections.forEach((section) => {
  const btn = document.createElement("button");
  btn.textContent = "Lihat Detail";
  btn.className = "btn btn-primary";
  section.appendChild(btn);
  btn.addEventListener("click", () => {
    alert("Mohon maaf, untuk saat ini halaman tidak tersedia");
  });
});