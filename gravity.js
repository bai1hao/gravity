console.log("Gravity is loading..")
const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let vx = 0;
let vy = 0;
let x = 0;
let y = 0;
let size = 50;
let g = 0.05;
let ground = false;
let img = new Image();
img.src = "img/character_0004.png";

function collision() {
    if (y >= canvas.height - size) {
        y = canvas.height - size
        ground = true;
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += vx;
    y += vy;
    collision()
    ctx.fillStyle = "pink"
    ctx.drawImage(img, x, y, size, size)
    requestAnimationFrame(update);
}

update();

setInterval(function gravity() {
    if (ground === false) {
        vy += g;
    }
})
window.onkeyup = e => {
    if (e.key === "ArrowLeft") {
        vx = 0;
    }
    if (e.key === "ArrowRight") {
        vx = 0;
    }
}
window.onkeydown = e => {
    if (e.key === "ArrowUp") {
        if (ground) {
            vy = -5;
            ground = false;
        }
    }
    if (e.key === "ArrowDown") {
        vy = 5;
    }
    if (e.key === "ArrowLeft") {
        vx = -5;
    }
    if (e.key === "ArrowRight") {
        img.style.transform = "rotateY(-180deg)"
        vx = 5;
    }
}