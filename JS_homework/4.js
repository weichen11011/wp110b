//請將 a 到 b 之間無法被 3, 5, 7 整除的數字放到陣列中？

var a=[] , newLength;
function  filter357(num1,num2){
    for(num1; num1<=num2 ; num1++){
        if(num1 % 3 !=0){
            if(num1 % 5 !=0){
                if(num1 % 7 !=0){
                    newLength = a.push(num1);
                }
            }
        }
    }
    for(var i = 0 ; i < a.length ; i++){
        console.log(a[i])
    }
}
filter357(5,15)