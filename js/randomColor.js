//adding randoming color function to add to text later on

function randomColor() {
    var color = 'rgb(';
    color += random() + ',';
    color += random() + ',';
    color += random() + ')';
    return color
}