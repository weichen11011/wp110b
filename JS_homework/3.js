//請寫一個函數檢查某數是否為質數？

function is_Prime(n){
    var count = 0;

    for(var i = 1 ; i<=n; i++){
        if(n % i == 0){
            count += 1;
        }
    }

    if(count == 2){
        return true;
    }
    else{
        return false;
    }
}
console.log(is_Prime(17));
