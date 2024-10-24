import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Rating } from '@mui/material';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, sx, ...other }) {
  const { name, review, role, rating } = testimonial;

  return (
    <Stack
      alignItems="center"
      sx={{
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Rating value={rating} readOnly />

      <Typography
        sx={{
          my: 3,
          lineHeight: 1.75,
          fontSize: { md: 20 },
        }}
      >
        {review}
      </Typography>

      <Typography variant="h6">{name}</Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {role}
      </Typography>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.object,
};
