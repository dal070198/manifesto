console.log("Manifesto page loaded");

const suspicion = document.querySelectorAll(".suspicion span");
const deconstruct = document.querySelectorAll(".deconstruct span");
const experiences = document.querySelectorAll(".experiences span");

document.addEventListener("mousemove", function(event) {

    let mouseX = event.clientX / window.innerWidth - 0.5;
    let mouseY = event.clientY / window.innerHeight - 0.5;


    suspicion.forEach(function(word, index) {

        let amount = (index + 1) * 15;

        word.style.transform =
            "translate(" +
            mouseX * amount +
            "px, " +
            mouseY * amount +
            "px)";
    });


    deconstruct.forEach(function(word, index) {

        let amount = (index - 1) * 50;

        word.style.transform =
            "translate(" +
            mouseX * amount +
            "px, " +
            mouseY * amount +
            "px)";
    });


    experiences.forEach(function(word, index) {

        let amount = (index + 1) * 35;

        word.style.transform =
            "translate(" +
            mouseX * amount +
            "px, " +
            mouseY * amount +
            "px)";
    });

});