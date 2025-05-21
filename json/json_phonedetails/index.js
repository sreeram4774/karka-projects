fetch("index.json").then(res => res.json()).then(data => {
    // console.log(data)
    let row = document.getElementById("row")
    for (let i = 0; i < data.product.length; i++) {
        let details = document.createElement('div')
        details.classList.add('col-lg-3', 'col-md-6', 'col-sm-12',`col-12`,`mt-5`)
        let product = data.product[i]
        // console.log(product,"pp")
        details.innerHTML = `
        <div class="card" style="width:auto;">
        <img src="${product.image}" class="card-img-top" alt="${product.image}">
        <div class="card-body">
          <h1 class="card-title">${product.name}</h1>
          <h4 class="card-text">${product.price}</h4>
          <p href="#" >${product.description}</p>
          <button class="bg-primary text-white">${product.button}</button>
        </div>
            `
            
        row.appendChild(details)

    }






})

