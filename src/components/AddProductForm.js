import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (name && price) {
      addProduct({ name, price });
      setName('');
      setPrice('');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="add-product-form">
      <input 
        type="text" 
        placeholder="Product Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
};

export default AddProductForm;
