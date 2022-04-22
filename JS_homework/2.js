//請寫一個函數計算 n!

function factorial(n){
    var r = 1;
    for(var i = 1 ; i <= n;i++){
        r *= i;
    }
    return r;
}
console.log(factorial(5));