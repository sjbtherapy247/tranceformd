import PropTypes from 'prop-types';
// @mui
import { Stack, TextField, InputAdornment } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Iconify from 'src/components/iconify';
//
import Advertisement from '../../advertisement';
import BlogSidebarAuthor from './BlogSidebarAuthor';
import BlogSidebarCategories from './BlogSidebarCategories';
import BlogSidebarPopularTags from './BlogSidebarPopularTags';
import BlogSidebarRecentPosts from './BlogSidebarRecentPosts';

// ----------------------------------------------------------------------

export default function BlogSidebar({
  author,
  categories,
  popularTags,
  recentPosts,
  advertisement,
  sx,
  ...other
}) {
  const isMdUp = useResponsive('up', 'md');

  return (
    <>
      {author && isMdUp && <BlogSidebarAuthor author={author} />}

      {isMdUp && (
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}

      <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
          ...sx,
        }}
        {...other}
      >
        {categories && <BlogSidebarCategories categories={categories} />}

        {recentPosts && <BlogSidebarRecentPosts recentPosts={recentPosts} />}

        {popularTags && <BlogSidebarPopularTags popularTags={popularTags} />}

        {advertisement && <Advertisement advertisement={advertisement} />}
      </Stack>
    </>
  );
}

BlogSidebar.propTypes = {
  advertisement: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  author: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    picture: PropTypes.string,
  }),
  categories: PropTypes.array,
  popularTags: PropTypes.array,
  recentPosts: PropTypes.object,
  sx: PropTypes.object,
};
