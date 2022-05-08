var ans=0;
function mean(array)
{
    for (var i=0;i< array.length; i++)
    {
        ans+=array[i];
    }
    return ans/=array.length;
}
console.log(mean([1,2,3,4,5]));
