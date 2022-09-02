var arr = [3,6,2,9,4]

for(var i = 0; i < arr.length-1; i++){
    // var temp = arr[0]
    for(var j = 0; j < arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
           var temp = arr[j]
           arr[j] = arr[j+1]
           arr[j+1] = temp
        }
    }
}
console.log(arr)
