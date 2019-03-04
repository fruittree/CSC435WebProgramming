function changeImage() {
    let image = document.getElementById('octupus');
    
    if (image.src.match("purple")) {
        image.src = "images/green.png";
    } else {
        image.src = "images/purple.png";
    }
 }