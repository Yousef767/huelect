const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const circle = document.querySelector(".toggle-circle");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  circle.innerHTML = `<i class="fas fa-sun"></i>`;
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    circle.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    localStorage.setItem("theme", "light");
    circle.innerHTML = `<i class="fas fa-moon"></i>`;
  }
});
