function handleClk(index) {
  fetch('product.json')
    .then(response => response.json())
    .then(data => {
      const products = data.Products[index];
      // console.log("Product added to cart:", product);

      let cartItems = localStorage.getItem('cartItems');
      cartItems = cartItems ? JSON.parse(cartItems) : [];

      cartItems.push(products);

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

fetch('product.json')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('products-container');

    for (let i = 0; i < data.Products.length; i++) {
      const product = data.Products[i];

      const card = document.createElement('div');
      card.classList.add("col-lg-3","col-md-6","col-sm-12","col-12","mt-5");

      card.innerHTML = `
        <div class="card">
          <img src="${product.Img}" class="card-img-top" alt="${product.Name}">
          <div class="card-body">
            <h5 class="card-title">${product.Name}</h5>
            <p class="card-text price">Price: ${product.price}</p>
            <p class="card-text">${product.Description}</p>
            <button onclick="handleClk(${i})">Add to cart</button>
          </div>
        </div>
      `;

      productsContainer.appendChild(card);
    }
  })
  .catch(error => console.error('Error fetching JSON:', error));
