class Snowflake {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
        this.y += this.speed;
        if (this.y > this.canvasHeight) {
            this.y = 0 - this.size;
            this.x = Math.random() * this.canvasWidth;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }
}

const canvas = document.getElementById('snowflakesCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];
const snowflakeCount = 100; // 雪花数量

for (let i = 0; i < snowflakeCount; i++) {
    snowflakes.push(new Snowflake(canvas.width, canvas.height));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let snowflake of snowflakes) {
        snowflake.update();
        snowflake.draw(ctx);
    }
    requestAnimationFrame(animate);
}

animate();
