import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Box, Typography, Button } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 100%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function Advertisement({ advertisement, sx, ...other }) {
  const { title, description, path, imageUrl } = advertisement;

  return (
    <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', ...sx }} {...other}>
      <Stack
        alignItems="center"
        sx={{
          p: 5,
          width: 1,
          bottom: 0,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
        }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, mb: 3, color: 'common.white' }}>
          {description}
        </Typography>

        <Button href={path} variant="contained">
          Go Now
        </Button>
      </Stack>

      <Image alt="advertisement" src={imageUrl} ratio="1/1" />

      <StyledOverlay />
    </Box>
  );
}

Advertisement.propTypes = {
  advertisement: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  sx: PropTypes.object,
};
