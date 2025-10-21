
import img1 from "./assets/something1.jpg";
import img2 from "./assets/something2.jpg";
import img3 from "./assets/something3.jpg";

import "./styles.css";
//Home
const container = document.querySelector("#content");
const h1 = document.createElement("h1");
h1.textContent = "Welcome to Something Resturant";

//Menu
const imgElement1 = document.createElement("img");
imgElement1.src = img1;
imgElement1.alt = "Something Dish 1";

const imgElement2 = document.createElement("img");
imgElement2.src = img2;
imgElement2.alt = "Something Dish 2";

const imgElement3 = document.createElement("img");
imgElement3.src = img3;
imgElement3.alt = "Something Dish 3";

const btnHome = document.querySelector("#BtnHome");
btnHome.addEventListener("click", () => {
    container.replaceChildren(h1);
});

const btnMenu = document.querySelector("#BtnMenu");
btnMenu.addEventListener("click", () => {
    container.replaceChildren(imgElement1, imgElement2, imgElement3);
});



