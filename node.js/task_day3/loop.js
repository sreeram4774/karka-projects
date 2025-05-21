let a=[1,2,3,4,5,0,6,7,8,9]
let b=0
for(i=0;i<a.length;i++){
    b=b+a[i]
    if(a[i]==0){
        break
    }
    console.log(b)
}