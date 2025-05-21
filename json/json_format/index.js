fetch("index.json").then(res=>res.json())
.then(data=>{
    console.log(data)
    document.getElementById("name").textContent=data.name
        document.getElementById("age").textContent=data.age>20 ?"Eligible":"Not Elegible"
            document.getElementById("married").textContent=data.ismarried==false ?"Unmarried":"marriecd"

        
})