import React from 'react';
import { Product } from '../../services/ProductService'; 
import './Product.css';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
      <h3>{product.title}</h3>  
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;