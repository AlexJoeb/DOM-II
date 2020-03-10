// Your code goes here

document.addEventListener("load", () => {
    document
        .querySelector("h1.logo-heading")
        .addEventListener("mouseover", event => {
            const { target } = event;
            target.textContent = "Testing";
        });

    document
        .querySelector("h1.logo-heading")
        .addEventListener("mouseout", event => {
            const { target } = event;
            target.textContent = "Fun Bus";
        });

    document.addEventListener("keydown", event => {
        document.querySelector(".intro p").textContent += event.key;
    });

    document.addEventListener("wheel", e => {
        console.clear();
        console.log(e);
    });
});

document
    .querySelector("input")
    .addEventListener("focus", e => console.log("Welcome Back"));

const item = document.querySelector(".intro img");
item.addEventListener("dragstart", e => {
    console.log("Whee!");
});

document
    .querySelector("h1.logo-heading")
    .addEventListener("dblclick", event => {
        console.log("Ouch.");
    });

document
    .querySelectorAll("a")
    .forEach(item => item.addEventListener("click", e => e.preventDefault()));

document.addEventListener("copy", e => {
    e.preventDefault();
    console.log("Nope! No plagarism here.");
});

gsap.to('.intro img', {duration: .7, rotate: 360});