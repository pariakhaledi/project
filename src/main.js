
let menubar = document.querySelector(".menubar");
let submenu = document.querySelector(".submenu");

menubar.addEventListener("click", function () {
  if (submenu.classList.contains("hidden")) {
    submenu.classList.remove("hidden");
    setTimeout(function () {
      submenu.classList.remove("scale-y-0");
      submenu.classList.add("scale-y-100");
    }, 10);
  } else {
    submenu.classList.remove("scale-y-100");
    submenu.classList.add("scale-y-0");
    setTimeout(function () {
      submenu.classList.add("hidden");
    }, 300);
  }
});

// aboutpage
let icons = document.querySelectorAll(".icon");
let aboutHiddens = document.querySelectorAll(".aboutHidden");

icons.forEach((icon, index) => {
  icon.addEventListener("click", function () {
    if (aboutHiddens[index].classList.contains("hidden")) {
      aboutHiddens[index].classList.remove("hidden");
      icon.textContent = "-";
    } else {
      aboutHiddens[index].classList.add("hidden");
      icon.textContent = "+";
    }
  });
});

// endaboutpage 