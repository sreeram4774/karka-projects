const array=[1, 2, 3, 4, 5]
const sum=array.reduce((data,item)=>{
    return data * item
},1)
console.log(sum)
