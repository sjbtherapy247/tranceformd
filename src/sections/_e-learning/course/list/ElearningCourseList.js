import PropTypes from 'prop-types';
// @mui
import { Pagination, Stack } from '@mui/material';
//
import { ElearningCourseItem, ElearningCourseItemSkeleton } from '../item';

// ----------------------------------------------------------------------

export default function ElearningCourseList({ courses, loading }) {
  return (
    <>
      <Stack spacing={4}>
        {(loading ? [...Array(9)] : courses).map((course, index) =>
          course ? (
            <ElearningCourseItem key={course.id} course={course} />
          ) : (
            <ElearningCourseItemSkeleton key={index} />
          )
        )}
      </Stack>

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

ElearningCourseList.propTypes = {
  courses: PropTypes.array,
  loading: PropTypes.bool,
};
