function add(array1,array2)
{
    for (var i=0;i<array1.length;i++)
    {
        for (var j=0;j<array1.length;j++)
        {
           array1[i][j]+=array2[i][j];
        }
    }
    return array1;
    
}
console.log(add([[1,2],[3,4]],[[1,1],[1,1]]));
