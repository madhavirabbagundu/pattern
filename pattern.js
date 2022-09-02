// *****
// *
// *
// *
// *

for(var i = 0; i <= 4; i++){
    var out = ""
    for(var j = 0; j < i; j++){
    if(j === 0){
      out+='*'+" "
    }
    else if(i === 4){
        out+="*"+" "
    }
}
    console.log(out)
}