var array=[5,10,15,20,22,23]
var a=[]
for(i=0;i<array.length;i++){
    if(array[i]%2==1){
        a.push("0")
    }
    else{
        a.push(array[i])
    }
}
console.log(a)

