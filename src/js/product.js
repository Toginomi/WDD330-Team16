<<<<<<< HEAD
import { getParam, getLocalStorage, setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';

const productId = getParam('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
=======
import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
>>>>>>> 0344e7e6385d1679687877192c4993a70c9d4241
product.init();

/* // add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

function addProductToCart(product) {
  const cartItems = getLocalStorage('so-cart') || [];
  cartItems.push(product);
  setLocalStorage('so-cart', cartItems);
}

// add listener to Add to Cart button
<<<<<<< HEAD
document.getElementById('addToCart')?.addEventListener('click', addToCartHandler);
=======
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
 */
>>>>>>> 0344e7e6385d1679687877192c4993a70c9d4241
