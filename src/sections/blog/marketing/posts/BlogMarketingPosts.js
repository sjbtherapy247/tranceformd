// @mui
import PropTypes from 'prop-types';
import { Pagination, Box } from '@mui/material';
//
import PostItem from './PostItem';

// ----------------------------------------------------------------------

export default function BlogMarketingPosts({ posts }) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {posts.slice(0, 8).map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          my: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

BlogMarketingPosts.propTypes = {
  posts: PropTypes.array,
};
