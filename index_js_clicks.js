window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

const audio = new Audio("assets/click_sound_compr.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});