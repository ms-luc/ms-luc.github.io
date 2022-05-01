function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const canvas = document.getElementById('myCanvas');



function reportWindowSize() {
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
    
    console.log(`new height: ${canvas.height}`)
    console.log(`new width: ${canvas.width}`)
}

reportWindowSize() // first height and width set
window.onresize = reportWindowSize;

const context = canvas.getContext('2d');

var circles = []

function Circle(x, y, dx, dy, radius, color) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = color


    this.draw = function () {

        // line
        context.strokeStyle = this.color;
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(circles[0].x, circles[0].y);
        context.stroke();

        // circle
        context.beginPath();
        context.fillStyle = this.color;
        context.lineWidth = 2;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.fill();


    }

    this.update = function () {

        if(this.x > canvas.width) this.x = canvas.width - 1 
        if(this.y > canvas.height) this.y = canvas.height - 1 
        if(this.x < 0) this.x = 0
        if(this.y < 0) this.y = 0

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {

            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {

            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

}

for (var i = 0; i < 10; i++) {
    var radius = GetRandomInt(20, 30);
    var centerX = GetRandomInt(radius, canvas.width - radius);
    var centerY = GetRandomInt(radius, canvas.height - radius);

    var r = GetRandomInt(100, 255)
    var g = GetRandomInt(100, 255)
    var b = GetRandomInt(100, 255)
    var color = `rgba(${r},${g},${b}, 0.5)`

    circles.push(
        new Circle(
            centerX,
            centerY,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            radius,
            color
        )
    )
}

function animate() {

    requestAnimationFrame(animate);

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i of circles) {

        i.update();
    }

}

animate()