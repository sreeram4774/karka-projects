var a=[1,2,3,4,1,2,7,3]
function submit(){
    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            if(a[i]==a[j]){ 
                console.log("it is duplicate number",a[i])   
            }
            // else if(a[i]!==a[j]){
            //     console.log("it is not duplicate number",a[i])
            // }

           
        }
    }
}