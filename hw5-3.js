var count=0;
function isprime(n)
{
    for(var i=1;i<=n;i++)
    {
        if (n%i==0)
        {
            count++;
        }
    }
    if (count==2)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }


}
console.log(isprime(17));
console.log(isprime(21));
