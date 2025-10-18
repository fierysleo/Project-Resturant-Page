
//Home
const container = document.querySelector("#content");
const h1 = document.createElement("h1");
h1.textContent = "Welcome to Something Resturant";

//Menu
const img1 = document.createElement("img");
img1.src = "assets/something1.jpg";
img1.alt = "Something Dish";
const img2 = document.createElement("img");
img2.src = "assets/something2.jpg";
img2.alt = "Something Dish";
const img3 = document.createElement("img");
img3.src = "assets/something3.jpg";
img3.alt = "Something Dish";

const btnHome = document.querySelector("#BtnHome");
btnHome.addEventListener("click", () => {
    container.replaceChildren(h1);
});

const btnMenu = document.querySelector("#BtnMenu");
btnMenu.addEventListener("click", () => {
    container.replaceChildren(img1, img2, img3);
});



