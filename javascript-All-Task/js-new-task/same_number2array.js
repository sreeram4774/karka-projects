let a=[1,2,3,4,5,6,8]
let b=[6,5,3,8,9]
let c=[]
function submit(){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]==b[j]){
                c.push(a[i])
            }
        }
    }
    console.log(c)
}
submit()