class Player {
    constructor(x, y, w, h, c, v)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.v = v;
    };

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };

    update(keys){
        if (keys["w"]) this.y -= this.v;
        if (keys["s"]) this.y += this.v;
        if (keys["a"]) this.x -= this.v;
        if (keys["d"]) this.x += this.v;
    };
};

const myPlayer = new Player(10, 10, 50, 50, "red", 5);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let keys = {};

window.addEventListener("keydown", (event) => keys[event.key] = true);
window.addEventListener("keyup", (event) => keys[event.key] = false);

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    myPlayer.draw(ctx);
    myPlayer.update(keys);
    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);