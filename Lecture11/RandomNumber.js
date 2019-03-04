function pageLoad() {
    let ok = document.getElementById("ok");  
    ok.onclick = randomNumber;
}
    
function randomNumber() {    
  let result = document.getElementById("result");
  result.innerHTML = "your lucky number is: " + Math.floor(Math.random() * 10);  
}

window.onload = pageLoad;                  

