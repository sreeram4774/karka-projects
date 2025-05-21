// var array=[5,10,5,10,10,10]
// var a=[]
// for(i=0;i<array.length;i=i+2){
//     a.push(array[i])
//     a.push(array[i+1])
//     a.push(array[i]+array[i+1])
// }
// console.log(a)

var array=[5,10,5,10,10,10]
var a=[]
for(i=0;i<array.length;i=i+2){
    a.push(array[i],array[i+1])
    a.push(array[i]+array[i+1])
}
console.log(a)