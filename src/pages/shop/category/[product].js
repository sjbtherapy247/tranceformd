// pages/shop/category/[product].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { CircularProgress, Container, Typography } from '@mui/material';
import { db } from 'src/lib/firebaseConfig';


const ProductPage = () => {
  const router = useRouter();
  const { product } = router.query;
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product) {
      const fetchProduct = async () => {
        try {
          const docRef = doc(db, 'products', product);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProductData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [product]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!productData) {
    return <Typography>No product found.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h2">{productData.name}</Typography>
      <Typography variant="h6">${productData.price}</Typography>
      <img src={productData.imageUrl} alt={productData.name} />
      <Typography>{productData.description}</Typography>
      {/* Add further product details and interactions */}
    </Container>
  );
};

export default ProductPage;
