// @mui
import PropTypes from 'prop-types';
import { Stack, Chip } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceFilterTag({ options, filterTag, onChangeTag, ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" {...other}>
      {options.map((option) => {
        const selected = filterTag.includes(option);

        return (
          <Chip
            key={option}
            size="small"
            label={option}
            variant="outlined"
            onClick={() => onChangeTag(option)}
            sx={{
              m: 0.5,
              ...(selected && {
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              }),
            }}
          />
        );
      })}
    </Stack>
  );
}

EcommerceFilterTag.propTypes = {
  filterTag: PropTypes.array,
  onChangeTag: PropTypes.func,
  options: PropTypes.array,
};
