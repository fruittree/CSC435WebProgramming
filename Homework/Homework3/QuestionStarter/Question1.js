window.onload = function() {
 document.getElementById("compute").onclick = computeGrade;
 document.getElementById("clear").onclick = clearClick;
};

function computeGrade() {
 var earned = 0;
 var earnedInputs = document.querySelectorAll(".earned");
 alert(earnedInputs[0].value);
 
    
}