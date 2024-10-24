// @mui
import PropTypes from 'prop-types';
import { Typography, Chip, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function BlogSidebarPopularTags({ popularTags }) {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Popular Tags
      </Typography>

      {popularTags.map((tag) => (
        <Chip key={tag.label} label={tag.label} sx={{ m: 0.5 }} onClick={() => {}} />
      ))}
    </Box>
  );
}

BlogSidebarPopularTags.propTypes = {
  popularTags: PropTypes.array,
};
