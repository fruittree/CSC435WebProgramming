function demos(){

    let rand1to10 = Math.floor(Math.random() * 10 + 1);
    //alert(rand1to10);
    let three = Math.floor(Math.PI); 
    
    let power = Math.pow(Math.random(),2);
    
/*    let a = ["Stef", "Jason"];   
    
    a.push("Brian"); 
    document.write(a+'<br>');
    a.unshift("Kelly");   
    document.write(a+'<br>');
    
    b = a.shift();  
    document.write(a+'<br>');
    c = a.pop();                     
    document.write(a+'<br>');
    document.write(c+'<br>');*/
    
    let months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    
    document.write(months+'<br>');


}
demos()


/*function forloop() {
    for (var i = 1; i <= 10; i++) {
        let mystery = "";

       // inner loop 1
        

        for (var j = 1; j <= 10 - i; j++) {
            mystery += " ";
        }
       // inner loop 2
        document.write("<br>");

        for (var j = 1; j <= 2 * i - 1; j++) {
            mystery += "*";
        }
       
        

        document.write(mystery);
    }
}

forloop()*/