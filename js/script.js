// Menyunun acilisi ve baglanisi

let hamburger = document.getElementById("hamburger");
let navbar = document.getElementById("navo");

navbar.style.right = "-255px";

function toggleNavbar() {
    navbar.style.right = navbar.style.right === "-255px" ? "0" : "-255px";
}

hamburger.addEventListener("click", toggleNavbar);