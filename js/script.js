// Menyunun acilisi ve baglanisi

let hamburger = document.getElementById("hamburger");
let navbar = document.getElementById("navo");

navbar.style.right = "-255px";

function toggleNavbar() {
    navbar.style.right = navbar.style.right === "-255px" ? "0" : "-255px";
}

hamburger.addEventListener("click", toggleNavbar);

let soz1 = document.getElementById("soz1");
let soz2 = document.getElementById("soz2");

setInterval(function() {
  if (soz1.style.opacity == "0") {
    soz2.style.opacity = "1";
    soz1.style.opacity = "0";
  } else if (soz1.style.opacity !== "0") {
    soz1.style.opacity = "1";
    soz2.style.opacity = "0";
  }
}, 1000);





