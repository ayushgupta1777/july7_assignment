import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductForm from '../components/AddProductForm';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const addProduct = (product) => {
    if (!products.find(p => p.name === product.name)) {
      setProducts([...products, product]);
    } else {
      alert('Product already exists');
    }
  };

  const deleteProduct = (productName) => {
    setProducts(products.filter(product => product.name !== productName));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <AddProductForm addProduct={addProduct} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <ProductList products={filteredProducts} deleteProduct={deleteProduct} />
    </div>
  );
};

export default HomePage;
