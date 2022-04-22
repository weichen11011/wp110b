function square(x){
    return x*x
}

function run(f ,n){
    var fx = f(n);
    console.log("f(x)="+fx);
}
run(square,5);
