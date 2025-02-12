let passowrdsShowIcons = document.querySelectorAll("#passwordShow");
if (passowrdsShowIcons.length > 0) {
  passowrdsShowIcons.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.classList.toggle("showPassword");
      if (e.parentElement.classList.contains("showPassword")) {
        e.className = "fa-light fa-eye";
        e.previousElementSibling.setAttribute("type", "text");
      } else {
        e.className = "fa-light fa-eye-slash";
        e.previousElementSibling.setAttribute("type", "password");
      }
    });
  });
}

let btnsActive = document.querySelectorAll(".loginas button,.loginas a");
if (btnsActive.length > 0) {
  btnsActive.forEach((e) => {
    e.addEventListener("click", () => {
      btnsActive.forEach((el) => {
        el.classList.remove("active");
      });
      e.classList.add("active");
    });
  });
}
