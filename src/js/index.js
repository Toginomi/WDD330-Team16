document.getElementById('sort-options').addEventListener('change', (event) => {
  const sortBy = event.target.value;
  sortAndRenderProducts(sortBy);
});

function sortAndRenderProducts(sortBy) {
  const productList = getProductList();
  const sortedList = sortBy === 'name'
    ? productList.sort((a, b) => a.name.localeCompare(b.name))
    : productList.sort((a, b) => a.price - b.price);

  renderProductList(sortedList);
}

function renderProductList(products) {
  const productListContainer = document.querySelector('.product-list');
  productListContainer.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('li');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <a href="product_pages/?product=${product.id}">
        <img src="${product.image}" alt="${product.name}" />
        <h3 class="card__brand">${product.brand}</h3>
        <h2 class="card__name">${product.name}</h2>
        <p class="product-card__price">$${product.price.toFixed(2)}</p>
      </a>
    `;
    productListContainer.appendChild(productCard);
  });
}

function getProductList() {
  const productCards = document.querySelectorAll('.product-card');
  return Array.from(productCards).map(card => ({
    id: card.querySelector('a').getAttribute('href').split('=')[1],
    name: card.querySelector('.card__name').textContent.trim(),
    brand: card.querySelector('.card__brand').textContent.trim(),
    price: parseFloat(card.querySelector('.product-card__price').textContent.replace('$', '').trim()),
    image: card.querySelector('img').getAttribute('src')
  }));
}
