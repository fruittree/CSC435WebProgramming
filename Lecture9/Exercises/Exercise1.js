function powerof2(){
	document.write("n" + "       " + "2^n" + "<br>");
	document.write("------------"+ "<br>");
	for (var n = 1; n<=5; n++) {
		document.write(n + "       " + Math.pow(2,n) + "<br>");
	}
}
powerof2()