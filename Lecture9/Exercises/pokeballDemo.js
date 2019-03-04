function changeImage() {
    let pokeballImg = document.getElementById("pokeball");
    
    if (pokeballImg.src.match("mystery")){
        pokeballImg.src = "images/pokeball.jpg";
    } else{
        (pokeballImg.src = "images/mystery.gif");
    }    
}

