function transpose(array)
{
    var a=Array.from(Array(array[0].length),()=>new Array(array.length));
    for (var i=0;i<array.length;i++)
    {
        
        for (var j=0;j<array[0].length;j++)
        {
           a[j][i]=array[i][j];
        }
    }
    return a;

}
console.log(transpose([[1,2,3],[3,2,1]]));

https://www.delftstack.com/zh-tw/howto/javascript/javascript-2d-array/
