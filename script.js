//USEFUL URLS USED IN THIS PROJECT

//Window.localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

// Used localStorage to save information in the browser to make sure that the selected theme saves even after page refresh.
let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "/public/css/index.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "/public/css/blue.css";
  }

  localStorage.setItem("theme", mode);
}
