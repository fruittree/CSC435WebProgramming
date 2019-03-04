(function() {

  // set-up code that doesn't involve the DOM 
  //   (e.g. setting up initial values, arrays, etc.)

  window.onload = function() {
        let ok = document.getElementById("ok");  
        ok.onclick = randomNumber;
  };

  //function definitions go here
function randomNumber() {    
    let result = document.getElementById("result");
    result.innerHTML = "your lucky number is: " + Math.floor(Math.random() * 10);  
}


})();