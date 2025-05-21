function on_load(){
$.getJSON('https://dummyjson.com/products', function (data) {
    console.log("joson",data);
    document.getElementById("id").innerText=data.products[0].id;
    document.getElementById("title").innerText=data.products[0].title;
    document.getElementById("category").innerText=data.products[0].category;
    document.getElementById("price").innerText=data.products[0].price;
    document.getElementById("Percentage").innerText=data.products[0].discountPercentage;
    document.getElementById("rating").innerText=data.products[0].rating;
    document.getElementById("stock").innerText=data.products[0].stock;
    document.getElementById("brand").innerText=data.products[0].brand;
    document.getElementById("Des").innerText=data.products[0].description;

    
  }
  )
}