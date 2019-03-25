//adding randoming color function to add to text later on

function random() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    var color = 'rgb(';
    color += random() + ',';
    color += random() + ',';
    color += random() + ')';
    return color
}

for ( var i = 1; i <= 10; i+=1) {
    rgbColor = randomColor();
    css += rgbColor
}

console.log(css)