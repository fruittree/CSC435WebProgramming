var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];  
var mf = 1;  // the maximum frequency
var m = 0;  // current maximum count
var item;  // index of the currnet maximum 
for (var i=0; i<arr1.length; i++)  
{  
        for (var j=i; j<arr1.length; j++)  //compare current element with the rest.
        {  
                if (arr1[i] == arr1[j])  // if the two elements are the same, increase the count
                 m++;  
                if (mf<m)   // if the current maximum count is higher than initial value
                {  
                  mf=m;    //switch the two
                  item = arr1[i];  //record the index and the element 
                }  
        }  
        m=0;  
}  
alert(item+" ( " +mf +" times ) ") ;  

