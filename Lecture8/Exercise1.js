function cmtoinches() {
	let inches = prompt("tell me a number in inces");  
    let cm = inches * 2.54;
    document.write("length in Inches:"+ inches + " inches <br/>");
    document.write("length in centimeters:"+ cm + " cm <br/>");
}

// calling your function 
cmtoinches()