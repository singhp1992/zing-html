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