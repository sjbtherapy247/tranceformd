// @mui
import PropTypes from 'prop-types';
import { Stack, Link, Typography, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function BlogSidebarCategories({ categories }) {
  return (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>

      {categories.map((category) => (
        <Stack key={category.label} direction="row" alignItems="center">
          <Box sx={{ width: 6, height: 6, mr: 2, bgcolor: 'primary.main', borderRadius: '50%' }} />

          <Link variant="body2" href={category.path} color="inherit">
            {category.label}
          </Link>
        </Stack>
      ))}
    </Stack>
  );
}

BlogSidebarCategories.propTypes = {
  categories: PropTypes.array,
};
