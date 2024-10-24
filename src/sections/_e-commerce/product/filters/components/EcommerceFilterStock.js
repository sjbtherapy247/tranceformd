import PropTypes from 'prop-types';
// @mui
import { Switch, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceFilterStock({ filterStock, onChangeStock }) {
  return (
    <FormControlLabel
      control={<Switch color="success" checked={filterStock} onChange={onChangeStock} />}
      labelPlacement="start"
      label="Only in Stock"
      sx={{
        m: 0,
        '& .MuiFormControlLabel-label': { typography: 'h6' },
      }}
    />
  );
}

EcommerceFilterStock.propTypes = {
  filterStock: PropTypes.bool,
  onChangeStock: PropTypes.func,
};
