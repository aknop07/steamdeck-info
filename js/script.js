console.log("Hello world!");

let button = document.querySelector(".js-button");
let heading = document.querySelector(".js-image");
let text = document.querySelector(".js-text");


button.addEventListener("click", () => {
    heading.classList.toggle("section__button--invisible");
    heading.classList.contains("section__button--invisible") ? text.innerText = "Show" : text.innerText = "Remove";
});