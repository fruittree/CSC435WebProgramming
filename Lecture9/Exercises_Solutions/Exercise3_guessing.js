 

function guessing(){
    let num = Math.ceil(Math.random() * 10);
    let gnum = prompt('Guess the number between 1 and 10 inclusive');
    if (gnum == num)
        alert('Matched');
    else
        alert('Not matched, the number was ' + num);
}

guessing()