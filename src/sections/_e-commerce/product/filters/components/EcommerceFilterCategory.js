import PropTypes from 'prop-types';
// @mui
import { Stack } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceFilterCategory({
  options,
  filterCategories,
  onChangeCategories,
  ...other
}) {
  return (
    <Stack spacing={1} alignItems="flex-start" {...other}>
      {options.map((option) => (
        <Stack
          key={option}
          direction="row"
          alignItems="center"
          onClick={() => onChangeCategories(option)}
          sx={{
            typography: 'body2',
            cursor: 'pointer',
            ...(filterCategories === option && {
              fontWeight: 'fontWeightBold',
            }),
          }}
        >
          <Iconify icon="carbon:chevron-right" width={12} sx={{ mr: 1 }} />
          {option}
        </Stack>
      ))}
    </Stack>
  );
}

EcommerceFilterCategory.propTypes = {
  filterCategories: PropTypes.string,
  onChangeCategories: PropTypes.func,
  options: PropTypes.array,
};
