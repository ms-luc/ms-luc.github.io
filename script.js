/*

Dark mode = constellations
ADD CLOUDS!! in dark mode
And a moon
Add contellation names

*/

var darkMode = GetRandomInt(0, 2);
if(darkMode == 1){
    
    darkMode = true
    document.body.style.background = "black"
}
else
    darkMode = false

console.log(`DARK MODE ${darkMode}`)

function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const audio = new Audio('mixkit-cooking-stopwatch-alert-1792.wav');
audio.volume = 0.2

const canvas = document.getElementById('myCanvas');

if(darkMode) canvas.style.background = 'linear-gradient('
+ 'to bottom' + ', ' + 'black' + ', ' + 'darkblue' + ')';


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

function Distance(x, y, x2, y2) {
    return Math.sqrt(Math.pow(Math.abs(x - x2), 2) + Math.pow(Math.abs(y - y2), 2))
}

function Circle(x, y, dx, dy, radius, color) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = color
    this.connections = 0

    this.draw = function () {

        // line
        var connections = 0
        for (let i of circles) {

            if(darkMode && radius < 9) break

            if (Distance(this.x, this.y, i.x, i.y) < 250) {
                context.strokeStyle = this.color;
                context.beginPath();
                context.lineWidth = 0.5;
                context.moveTo(this.x, this.y);
                context.lineTo(i.x, i.y);
                context.stroke();

                connections += 1;

                if(darkMode && connections > 1){
                    break
                }
            }

        }
        if (connections != this.connections) {
            this.connections = connections

            if (connections > 7) {
                const newAudio = audio.cloneNode()
                newAudio.play()
            }
        }

        // circle
        context.beginPath();

        var color = this.color
        if(darkMode && connections == 0){
            color = `rgb(150,150,255)`
        }
        context.fillStyle = color;
        context.lineWidth = 2;

        var raidus2 = this.radius + connections * 3
        if(darkMode){
            raidus2 = this.radius + connections / 2
        }
        context.arc(this.x, this.y, raidus2, 0, 2 * Math.PI, false);
        context.fill();


    }

    this.update = function () {

        if (this.x > canvas.width) this.x = canvas.width - 1
        if (this.y > canvas.height) this.y = canvas.height - 1
        if (this.x < 0) this.x = 0
        if (this.y < 0) this.y = 0

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

total_circles = 20

if(darkMode)total_circles = 100

for (var i = 0; i < total_circles; i++) {
    var radius = GetRandomInt(5, 10);
    if(darkMode)radius/ 3
    var centerX = GetRandomInt(radius, canvas.width - radius);
    var centerY = GetRandomInt(radius, canvas.height - radius);

    var r = GetRandomInt(100, 255)
    var g = GetRandomInt(100, 255)
    var b = GetRandomInt(100, 255)
    var color = `rgba(${r},${g},${b}, 0.5)`
    if(darkMode){
        color = "rgb(255,255,255)"
    }

    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;

    if(darkMode){
        dx = (GetRandomInt(0,100) - 50) / 1000
        dy = (GetRandomInt(0,100) - 50) / 1000
    }

    circles.push(
        new Circle(
            centerX,
            centerY,
            dx,
            dy,
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