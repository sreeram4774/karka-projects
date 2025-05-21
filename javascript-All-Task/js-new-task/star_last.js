// let a=[1,2,3,4,5]
// let array=[]
// for(let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         array.push("*")
//     }
//     else{
//         array.push(a[i])
//     }
// }
// console.log(array)


let a=[1,2,3,4,5]
let b=[]
let c=[]
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        b.push("*")
    }
    else{
        c.push(a[i])
    }
}
let result=c.concat(b)
console.log(result)