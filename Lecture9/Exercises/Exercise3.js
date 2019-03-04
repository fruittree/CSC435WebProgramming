today=new Date();
var election = new Date(today.getFullyear(),10,8); 
var one_day=1000*60*60*24;

alert(election)

//getTime() returns the number of milliseconds

//alert(Math.ceil((election.getTime()-today.getTime())/(one_day))+
//" days left until the presidential election!");
