import React from 'react';
import './ProductList.css';

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-item">
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={() => deleteProduct(product.name)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No Product Found</p>
      )}
    </div>
  );
};

export default ProductList;
