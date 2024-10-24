import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Avatar } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

TestimonialItemContent.propTypes = {
  testimonial: PropTypes.object,
};

export function TestimonialItemContent({ testimonial }) {
  const { review } = testimonial;

  return (
    <Stack alignItems="center">
      <Iconify
        icon="carbon:quotes"
        sx={{ width: 48, height: 48, opacity: 0.48, color: 'primary.main' }}
      />

      <Typography
        sx={{
          mt: 2,
          mb: 5,
          lineHeight: 1.75,
          fontSize: { xs: 20, md: 24 },
          fontFamily: (theme) => theme.typography.h1.fontFamily,
        }}
      >
        {review}
      </Typography>
    </Stack>
  );
}

// ----------------------------------------------------------------------

TestimonialItemThumbnail.propTypes = {
  isSelected: PropTypes.bool,
  testimonial: PropTypes.object,
};

export function TestimonialItemThumbnail({ testimonial, isSelected }) {
  const { avatar } = testimonial;

  return (
    <Stack
      sx={{
        width: 96,
        height: 96,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        src={avatar}
        sx={{
          width: 48,
          height: 48,
          opacity: 0.48,
          cursor: 'pointer',
          transition: (theme) => theme.transitions.create('all'),
          ...(isSelected && {
            opacity: 1,
            transform: 'scale(2)',
          }),
        }}
      />
    </Stack>
  );
}
