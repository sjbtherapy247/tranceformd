// @mui
import PropTypes from 'prop-types';
import { Pagination, Box } from '@mui/material';
//
import ReviewItem from './ReviewItem';

// ----------------------------------------------------------------------

export default function ReviewList({ reviews }) {
  return (
    <Box sx={{ pt: 5 }}>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          name={review.name}
          avatarUrl={review.avatarUrl}
          postedAt={review.postedAt}
          message={review.message}
          rating={review.rating}
          helpful={review.helpful}
        />
      ))}

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          mt: 5,
          mb: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </Box>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
};
