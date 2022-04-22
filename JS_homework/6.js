//寫一個程式做因數分解。

var a=[];
function factor(n){
    for(var i = 2 ; i <= n ; i++){
        if(n % i == 0){
            n /= i;
            a.push(i);
            i = 2;
        }
    }
        console.log(a);
}
factor(45)