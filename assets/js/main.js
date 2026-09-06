// main.js

console.log("Critical Engineering Manifesto loaded");

const suspicionWords = document.querySelectorAll(".suspicion span");
const deconstructWords = document.querySelectorAll(".deconstruct span");
const experienceWords = document.querySelectorAll(".experiences span");

document.addEventListener("mousemove", function (event) {

    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;


    suspicionWords.forEach(function (word, index) {

        const strength = (index + 1) * 7;

        const moveX = mouseX * strength;
        const moveY = mouseY * strength;

        const baseRotation =
            word.classList.contains("main-suspicion") ? -3 : 0;

        word.style.transform =
            `translate(${moveX}px, ${moveY}px) rotate(${baseRotation + mouseX * 2}deg)`;
    });


    deconstructWords.forEach(function (word, index) {

        const direction = index - 1;

        const moveX = mouseX * direction * 25;
        const moveY = mouseY * direction * 10;

        word.style.transform =
            `translate(${moveX}px, ${moveY}px)`;
    });


    experienceWords.forEach(function (word, index) {

        const directions = [-1, 0.4, 1];
        const strength = [45, 70, 95];

        const moveX = mouseX * strength[index] * directions[index];
        const moveY = mouseY * strength[index] * 0.35;

        word.style.transform =
            `translate(${moveX}px, ${moveY}px)`;
    });

});