{
    const welcome = () => {
        console.log("Hello world!");
    };

    const toggleImageVisibility = () => {
        const heading = document.querySelector(".js-image");
        const text = document.querySelector(".js-text");
        heading.classList.toggle("section__button--invisible");
        heading.classList.contains("section__button--invisible") ? text.innerText = "Show" : text.innerText = "Remove";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleImageVisibility);

        welcome();
    };

    init();
}