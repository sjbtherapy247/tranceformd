import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Button, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { filterStyles } from 'src/utils/cssStyles';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function EcommerceProductItemHero({ product }) {
  const theme = useTheme();

  const { label, title, caption, coverImg } = product;

  return (
    <Grid
      container
      rowSpacing={{
        xs: 5,
        md: 0,
      }}
      sx={{
        py: 10,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid xs={12} md={6}>
        <Box
          sx={{
            maxWidth: { md: 440 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Label color="warning" sx={{ mb: 2 }}>
            {label}
          </Label>

          <TextMaxLine variant="h3" sx={{ mb: 2 }}>
            {title}
          </TextMaxLine>

          <TextMaxLine variant="body2" sx={{ mb: 5, color: 'text.secondary' }}>
            {caption}
          </TextMaxLine>

          <Button
            component={NextLink}
            href={paths.eCommerce.product}
            size="large"
            color="inherit"
            variant="contained"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            Shop Now
          </Button>
        </Box>
      </Grid>

      <Grid xs={12} md={6}>
        <Image
          src={coverImg}
          sx={{
            ...filterStyles(
              `drop-shadow(20px 20px 24px ${alpha(theme.palette.common.black, 0.16)})`
            ),
            maxWidth: 400,
            ml: 'auto',
            mr: { xs: 'auto', md: 'unset' },
          }}
        />
      </Grid>
    </Grid>
  );
}

EcommerceProductItemHero.propTypes = {
  product: PropTypes.shape({
    caption: PropTypes.string,
    coverImg: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
  }),
};
