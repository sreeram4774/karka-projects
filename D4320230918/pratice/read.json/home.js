
// function handle_load(){
// fetch("./lib/examples/employee.json",{mode:"no-cors"})
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
// }

function handle_load(){
    // r-data ead local JSON file in javascript
    json_data = fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {return json})
    return json_data
    }
    handle_load()
    .then((jsonData)=>{
    
        console.log("json",jsonData)
        for(i of jsonData.products){
        let body=document.getElementById("kunush")
        let row=document.createElement("tr")
        // let col1=document.createElement("td")
        let col1=document.createElement("td")
        let col2=document.createElement("td")
        let col3=document.createElement("td")
        let col4=document.createElement("td")
        let img=document.createElement("img")
        // img.setAttribute("src",i.image[0])


        // col1.innerText=i.no
        col1.appendChild(img)
        col2.innerText=i.title
        col3.innerText=i.description
        col4.innerText=i.price
        row.appendChild(col1)
        row.appendChild(col2)
        row.appendChild(col3)
        row.appendChild(col4)
        body.appendChild(row)
        // body.appendChild(row4)



        
    }
}
)
     


