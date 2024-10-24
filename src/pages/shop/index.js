import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../lib/fetchProducts';


export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    }
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/shop/${product.category}/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
