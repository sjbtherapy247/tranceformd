import PropTypes from 'prop-types';
// @mui
import { Stack, Rating, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function ProductRating({ rating, label, ...other }) {
  return (
    <Stack spacing={0.5} direction="row" alignItems="center" {...other}>
      <Rating
        size="small"
        value={rating}
        readOnly
        precision={0.5}
        sx={{ '& svg': { height: 12, width: 12 } }}
      />

      {label && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      )}
    </Stack>
  );
}

ProductRating.propTypes = {
  label: PropTypes.string,
  rating: PropTypes.number,
};
