//請寫一個函數計算兩矩陣相加？

function add(n1,n2){
    for(var i = 0 ; i < n1.length ; i++){
        for(var j = 0 ; j < n1[0].length ; j++){
            n1[i][j] += n2[i][j];
        }
    }
    return n1
}

console.log(add([[1,2],[3,4]], [[1,1],[1,1]]));