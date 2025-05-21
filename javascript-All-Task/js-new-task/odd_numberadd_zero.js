let a=[1,2,3,4,5]
let b=[]
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        b.push(a[i])
    }
    else{
        b.push(0)
    }
}
console.log(b)