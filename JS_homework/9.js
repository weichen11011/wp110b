//請用遞迴寫一個函數印出費氏數列的第 n 個

function f(n1){
    if(n1 == 0) return 0
    else if(n1 == 1) return 1
    else return f(n1-1) + f(n1-2)
}
console.log(f(7))