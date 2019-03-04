function pageLoad() {
    let input = document.querySelector('.numberInput');
    let para = document.querySelector('p');
    input.onchange = outputNumber;
}
   

function outputNumber() {
    let input = document.querySelector('.numberInput');
    let para = document.querySelector('p');
    let e = document.getElementById("myMethods");
    var method_type = e.value;

    
    var num = input.value;
      if(isNaN(num)) {
        para.textContent = 'You need to enter a number!';
      } 
    else {
        if (method_type=='square')  {
            para.textContent = num + ' squared is ' + squared(num);
        }
          
        else if (method_type=='cube')  {
            para.textContent = num + ' cubed is ' +  cubed(num);
        } 
          
        else {
            para.textContent = num + ' factorial is ' + factorial(num);
        }    
        
      }
    }

function squared(num) {
      return num * num;
    }

function cubed(num) {
      return num * num * num;
    }

function factorial(num) {
      var x = num;
      while(x > 1) {
        num *= x-1;
        x--;
      }
      return num;
    }

window.onload = pageLoad;                 