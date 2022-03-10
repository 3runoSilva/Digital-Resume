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
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

const foo = [1, 2, 3];
const [n] = foo;
console.log(n);

$(function () {
  "use strict";

  // Give Active Class

  $(".major").first().addClass("active");

  // Show class"major"

  $(".minor").first().show().animate({ width: "40%" });

  // Show class"minor" On Click

  $(".major").click(function () {
    $(this).addClass("active").siblings(".major").removeClass("active");

    $(this)
      .next()
      .show()
      .animate({ width: "40%" })
      .siblings(".minor")
      .animate({ width: 0 }, function () {
        $(this).hide();
      });
  });
});

let container = $("div");

function competencees() {
  let scrollTo = $(".expertise");
  let position =
    scrollTo.offset().top - container.offset().top + container.scrollTop();
  container.animate({
    scrollTop: position,
  });
}
