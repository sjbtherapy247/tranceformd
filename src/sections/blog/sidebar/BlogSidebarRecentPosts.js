// @mui
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
//
import PostItemMobile from '../components/PostItemMobile';

// ----------------------------------------------------------------------

export default function BlogSidebarRecentPosts({ recentPosts }) {
  const { list } = recentPosts;

  return (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Posts</Typography>

      {list.map((post) => (
        <PostItemMobile key={post.id} post={post} onSiderbar />
      ))}
    </Stack>
  );
}

BlogSidebarRecentPosts.propTypes = {
  recentPosts: PropTypes.object,
};
