// var a=[1,2,3,4,5,6,7,2,4,2,5,2,2]
// var b=[2]
// var c=[]
// for(i=0;i<a.length;i++){
//     for(j=0;j<b.length;j++){
//         if(a[i]==b[j]){
//             c.push("*")
//         }
//         else{
//             c.push(a[i])
//         }
  
//     }
// }
// console.log(c)

var a=[1,2,3,4,5,6,7,2,4,2,5,2,2]
var c=[]
for(i=0;i<a.length;i++){
   if(a[i]===2){
    c.push("*")
   }
   else{
    c.push(a[i])
   }
}
// console.log(c.join(" "))
console.log(c)


