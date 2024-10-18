import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import ProductList from './components/ProductList/ProductList';


function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Product Listing</h1>
      </header>
      
      <main className="p-4">
        {/* Include the ProductList component here */}
        <ProductList />
      </main>

      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>© 2024 Product Store</p>
      </footer>
    </div>
  );
}

export default App;
