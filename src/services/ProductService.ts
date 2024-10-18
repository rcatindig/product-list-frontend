import axios from 'axios';

// Use the environment variable for the API base URL
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000';

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

class ProductService {
  static async fetchProducts(query = '', limit = 10, skip = 0): Promise<ProductsResponse> {
    try {
      // Use the base URL and append the path dynamically
      const response = await axios.get<ProductsResponse>(`${BASE_URL}/products`, {
        params: {
          q: query,
          limit,
          skip,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching products: ' + error);
    }
  }
}

export default ProductService;
