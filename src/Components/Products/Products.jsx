import React from "react";
import "./Products.css";
function Products() {
  return (
    <div className="Products">
      <h2 className="Products-header">OUR PRODUCTS</h2>
      <div className="container-wrapper">
        <ul className="products-list">
          <li className="product-category">
            BODY <ion-icon name="arrow-forward-outline"></ion-icon>
          </li>
          <li className="product-category">
            FACE <ion-icon name="arrow-forward-outline"></ion-icon>
          </li>
          <li className="product-category">
            HAIR <ion-icon name="arrow-forward-outline"></ion-icon>
          </li>
          <li className="product-category">
            ACCESSORIES <ion-icon name="arrow-forward-outline"></ion-icon>
          </li>
          <li className="product-category">
            SETS <ion-icon name="arrow-forward-outline"></ion-icon>
          </li>
        </ul>
        <div className="products-container">
          <li className="prodcut-category">BODY</li>
          <li className="prodcut-category">FACE</li>
          <li className="prodcut-category">HAIR</li>
          <li className="prodcut-category">ACCESSORIES</li>
          <li className="prodcut-category">SETS</li>
        </div>
      </div>
    </div>
  );
}

export default Products;
