function df(f,x,h = 0.00001){
    return (f(x+h) - f(x))/h;
}

function square(n){
    return n*n
}

var sq = (x)=>x*x

console.log(df(square,5));
console.log("df = "+df((x)=>x*x,5));
console.log("df = "+df(sq,5));