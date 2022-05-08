var ans=0;
function f(n)
{
    if (n==0)
    {
        return 0;
    }
    if (n==1)
    {
       return 1;
    }
    else
    {
        return f(n-1)+f(n-2);
    }
}
console.log(f(10));

https://www.csie.ntu.edu.tw/~b98902112/cpp_and_algo/cpp02/recursion.html
