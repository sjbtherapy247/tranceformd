// @mui
import PropTypes from 'prop-types';
import { Checkbox, Stack, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceFilterBrand({ options, filterBrand, onChangeBrand, ...other }) {
  return (
    <Stack {...other}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              size="small"
              value={option}
              checked={filterBrand.includes(option)}
              onChange={() => onChangeBrand(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}

EcommerceFilterBrand.propTypes = {
  filterBrand: PropTypes.array,
  onChangeBrand: PropTypes.func,
  options: PropTypes.array,
};
