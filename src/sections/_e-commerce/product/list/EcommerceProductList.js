import PropTypes from 'prop-types';
// @mui
import { Box, Stack, Pagination } from '@mui/material';
//
import {
  EcommerceProductViewListItem,
  EcommerceProductViewGridItem,
  EcommerceProductViewListItemSkeleton,
  EcommerceProductViewGridItemSkeleton,
} from '../item';

// ----------------------------------------------------------------------

export default function EcommerceProductList({ loading, viewMode, products }) {
  return (
    <>
      {viewMode === 'grid' ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        >
          {(loading ? [...Array(16)] : products).map((product, index) =>
            product ? (
              <EcommerceProductViewGridItem key={product.id} product={product} />
            ) : (
              <EcommerceProductViewGridItemSkeleton key={index} />
            )
          )}
        </Box>
      ) : (
        <Stack spacing={4}>
          {(loading ? [...Array(16)] : products).map((product, index) =>
            product ? (
              <EcommerceProductViewListItem key={product.id} product={product} />
            ) : (
              <EcommerceProductViewListItemSkeleton key={index} />
            )
          )}
        </Stack>
      )}

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          mt: 10,
          mb: 5,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

EcommerceProductList.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.array,
  viewMode: PropTypes.string,
};
