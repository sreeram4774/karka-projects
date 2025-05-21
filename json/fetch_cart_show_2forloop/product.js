function handle_click(index){
  var itemArray=localStorage.getItem("item")?JSON.parse(localStorage.getItem("item")):[]
  itemArray.push(index)
  localStorage.setItem("item",JSON.stringify(itemArray))

  }

fetch("product.json").then(res=>res.json()).then(data=>{
    // console.log(data)
    let row=document.getElementById("row")
    for(let i=0;i<data.data.length;i++){
        let div=document.createElement("div")
        div.classList.add(`col-lg-3`,`col-md-6`,`col-sm-12`,`col-12`,`mt-5`,`d-block`,`mx-auto`)
        let product=data.data[i]
        // console.log(product,"pp")
        div.innerHTML=`
        <div class="card" style="width:auto;">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h1 class="card-title mb-2">${product.name}</h1>
          <h5 class="card-text mb-2">${product.price}</h5>
          <p class="mb-4">${product.details}</p>
          <button onclick="handle_click(${i})" class="bg-primary text-white mx-auto d-block">Add to Cart</button>
        </div>
      </div>
    
         `
       

        row.appendChild(div)

        

    }
})
