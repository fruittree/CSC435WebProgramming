    function findsmallest(){
     let numbers = [-2,100,4,-1,-10];
     let numlen = numbers.length;
     let smallest = numbers[0];
        
    for(i = 1; i< numlen; i++){
        if (smallest > numbers[i]){

            smallest = numbers[i];
        }

    } 
    alert(smallest);
}
    
findsmallest()