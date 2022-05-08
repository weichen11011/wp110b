var d=[];
function filter357(a,b)
{
    for (var i=a;i<=b;i++)
    {
        if (i%3!=0 && i%5!=0 && i%7!=0)
        {
            d.push(i);
        }
    }
    console.log(d);
    d=[];
}
console.log(filter357(5,10));
console.log(filter357(5,15));
