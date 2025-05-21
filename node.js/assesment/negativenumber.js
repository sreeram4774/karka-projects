var array=[5,2,-7,3,-2,-1,0,1]
var remove=[]
function sum(){
    for(i=0;i<array.length;i++){
        if(i>0){
            remove.push(i)
        }
    }
}
sum()
console.log(remove)