import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Rating } from '@mui/material';
// @mui
import { fDate } from 'src/utils/formatTime';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, sx, ...other }) {
  const { name, review, rating, postDate } = testimonial;

  return (
    <Stack
      spacing={1}
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      {postDate && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDate(postDate)}
        </Typography>
      )}

      <Typography variant="subtitle2">{name}</Typography>

      <Rating size="small" value={rating} readOnly />

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {review}
      </Typography>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.object,
};
