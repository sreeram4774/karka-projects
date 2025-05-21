$.get("index.json",(json)=>{
    console.log(json);
    json.persons.map(function(ele,index){
        let body=$("#tbody");
        row=`<tr><td>${index+1}</td><td>${ele.name}</td><td>${ele.age}</td><td>${ele.place}</td></tr>`
        $(body).append(row)     
    })    
})
