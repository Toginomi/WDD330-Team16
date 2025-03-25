import { getLocalStorage, setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // Fetch product details using the data source
    this.product = await this.dataSource.findProductById(this.productId);
    
    // Render product details on the page
    this.renderProductDetails();
    
    // Add event listener to 'Add to Cart' button
    document.getElementById('addToCart')?.addEventListener('click', this.addProductToCart.bind(this));
  }

  addProductToCart() {
    const cart = getLocalStorage('so-cart') || [];
    cart.push(this.product);
    setLocalStorage('so-cart', cart);
  }

  renderProductDetails() {
    const productContainer = document.querySelector('#productDetails');
    if (!productContainer || !this.product) return;
    
    productContainer.innerHTML = `
      <h2>${this.product.Name}</h2>
      <img src="${this.product.Image}" alt="${this.product.Name}">
      <p>${this.product.Description}</p>
      <p>Price: $${this.product.Price}</p>
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    `;
  }
}

export default ProductDetails;
