var d=[];
function factor(n)
{
    for (var i=2;i<=n;i++)
    {
        if (n%i==0)
        {
            d.push(i);
            n/=i;
            i=1
        }
    }
    return d;
}
console.log(factor(45));
