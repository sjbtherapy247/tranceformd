// @mui
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
//
import { EcommerceProductItemBestSellers } from '../item';

// ----------------------------------------------------------------------

export default function EcommerceProductListBestSellers({ products }) {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Best Sellers</Typography>

      {products.slice(0, 8).map((product) => (
        <EcommerceProductItemBestSellers key={product.id} product={product} />
      ))}
    </Stack>
  );
}

EcommerceProductListBestSellers.propTypes = {
  products: PropTypes.array,
};
