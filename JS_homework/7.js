//寫一個程式把矩陣轉置。

const transpose=([[1,2,3], [3,2,1]]);
const a=[];
for(var i = 0 ; i < transpose[0].length ; i++){
    a[i]=[];
    for(var j = 0 ; j < transpose.length ; j++){
        a[i][j] = transpose[j][i];
    }
}
console.log(a);