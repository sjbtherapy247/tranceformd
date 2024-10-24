import PropTypes from 'prop-types';
// @mui
import { Stack, Box } from '@mui/material';
// utils
import { fCurrency } from 'src/utils/formatNumber';

// ----------------------------------------------------------------------

export default function ProductPrice({ price, priceSale = 0, sx, ...other }) {
  return (
    <Stack direction="row" sx={{ typography: 'subtitle2', ...sx }} {...other}>
      {fCurrency(price)}

      <Box
        component="span"
        sx={{
          ml: 0.5,
          color: 'text.disabled',
          textDecoration: 'line-through',
          fontWeight: 'fontWeightMedium',
        }}
      >
        {priceSale > 0 && fCurrency(priceSale)}
      </Box>
    </Stack>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.number,
  priceSale: PropTypes.number,
  sx: PropTypes.object,
};
