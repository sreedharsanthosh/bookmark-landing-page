const img = document.querySelector(".img");
const featuresTxtP = document.querySelector(".features-txt p");
const featuresTxtH1 = document.querySelector(".features-txt h1");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", () => {
  btn1.style.borderBottom = "2px solid hsl(0, 94%, 66%)";
  btn2.style.borderBottom = "2px solid #e5e5e5";
  btn3.style.borderBottom = "2px solid #e5e5e5";

  img.src = "./images/illustration-features-tab-1.svg";
});

btn2.addEventListener("click", () => {
  btn1.style.borderBottom = "2px solid #e5e5e5";
  btn2.style.borderBottom = "2px solid hsl(0, 94%, 66%)";
  btn3.style.borderBottom = "2px solid #e5e5e5";

  img.src = "./images/illustration-features-tab-2.svg";
  featuresTxtH1.innerText = " Intelligent search";
  featuresTxtP.innerText =
    " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
});

btn3.addEventListener("click", () => {
  btn1.style.borderBottom = "2px solid #e5e5e5";
  btn3.style.borderBottom = "2px solid hsl(0, 94%, 66%)";
  btn2.style.borderBottom = "2px solid #e5e5e5";

  img.src = "./images/illustration-features-tab-3.svg";
  featuresTxtH1.innerText = " Share your bookmarks";
  featuresTxtP.innerText =
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
