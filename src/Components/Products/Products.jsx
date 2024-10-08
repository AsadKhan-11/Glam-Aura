import React from "react";
import "./Products.css";
import data from "./Data";
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
          {data.map((data, index) => {
            return (
              <div className="products-cards" key={index}>
                <div className="data-img-container">
                  <img src={data.img} alt="" className="data-img" />
                </div>
                <div className="data-info">
                  <p className="data-name">{data.name}</p>
                  <p className="data-price">{data.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
