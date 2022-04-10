"use strict";
const Hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

Hamburger.addEventListener("click", function () {
  nav.classList.toggle("active");
});
