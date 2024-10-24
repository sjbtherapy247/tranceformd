import PropTypes from 'prop-types';
import { add } from 'date-fns';
// next
import NextLink from 'next/link';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Typography, Stack, Link } from '@mui/material';
// utils
import { filterStyles } from 'src/utils/cssStyles';
import { fCurrency } from 'src/utils/formatNumber';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductCountdownBlock } from '../../components';

// ----------------------------------------------------------------------

export default function EcommerceProductItemCountDown({ product, color = 'primary', sx }) {
  const theme = useTheme();

  return (
    <Link component={NextLink} href={paths.eCommerce.product} color="inherit" underline="none">
      <Stack
        spacing={3}
        sx={{
          p: 3,
          borderRadius: 2,
          color: `${color}.darker`,
          bgcolor: `${color}.lighter`,
          transition: theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
          '&:hover': {
            color: `${color}.lighter`,
            bgcolor: `${color}.main`,
          },
          ...sx,
        }}
      >
        <Image
          src={product.coverImg}
          sx={{
            ...filterStyles(
              `drop-shadow(20px 20px 24px ${alpha(theme.palette.common.black, 0.16)})`
            ),
          }}
        />

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          <TextMaxLine variant="subtitle2" sx={{ opacity: 0.72 }}>
            {product.name}
          </TextMaxLine>

          <Typography variant="h5">{`From ${fCurrency(product.price)}`}</Typography>
        </Stack>

        <ProductCountdownBlock expired={add(new Date(), { days: 1, hours: 8 })} />
      </Stack>
    </Link>
  );
}

EcommerceProductItemCountDown.propTypes = {
  color: PropTypes.string,
  product: PropTypes.shape({
    coverImg: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  sx: PropTypes.object,
};
