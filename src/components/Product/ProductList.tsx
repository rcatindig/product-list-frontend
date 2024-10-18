import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import ProductService, { Product } from '../../services/ProductService'; 
import './Product.css';
import PaginationControl from '../common/PaginationControl';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [skip, setSkip] = useState<number>(0); // For pagination
  const [total, setTotal] = useState<number>(0); // Total products count
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async (query: string, limit: number, skip: number) => {
    setLoading(true);
    try {
      const { products, total } = await ProductService.fetchProducts(query, limit, skip);
      setProducts(products);
      setTotal(total);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts('', 10, skip); // Initial call to fetch products
  }, [skip]);

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setSearchTerm(query);
      fetchProducts(query, 10, skip);
    },
    [skip]
  );

  const handlePageChange = (newSkip: number) => {
    setSkip(newSkip);
    fetchProducts(searchTerm, 10, newSkip);
  };

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-box"
      />

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductItem 
              key={product.id}
              product={product}
              /> 
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <PaginationControl 
        skip={skip} 
        total={total} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default ProductList;