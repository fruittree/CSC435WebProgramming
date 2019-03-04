
function findMin() {
    let number =  [3,5,6,10,-100,300];
   // create a random list of integers
    let smallest = number[0];
    for (i=0;i<number.length;i++){
            if(number[i]<smallest){
                smallest=number[i];
        }
    }
    console.log(smallest);
}

// calling your function 

findMin()