let counter = 0;
let milestones = [1, 5, 20, 100, 1000, 10000];
let index = 0;

const counterEl = document.getElementById("counter");
const btn = document.getElementById("mainBtn");
const game = document.getElementById("game");
const final = document.getElementById("final");

btn.addEventListener("click", () => {
    if (index < milestones.length) {
        counter = milestones[index];
        counterEl.textContent = counter;
        index++;
    }

    if (counter === 10000) {
        setTimeout(() => {
            game.classList.add("hidden");
            final.classList.remove("hidden");
            createHearts();
        }, 500);
    }
});

function createHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💙";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.fontSize = "24px";
        document.body.appendChild(heart);
    }
}