import PropTypes from 'prop-types';
// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select from '@mui/material/Select';
//
import { inputStyle, menuItemStyle, MenuProps } from '../styles';

// ----------------------------------------------------------------------

const LEVELS = ['Beginner', 'Intermediate', 'Expert'];

// ----------------------------------------------------------------------

export default function ElearningFilterLevel({ filterLevel, onChangeLevel }) {
  return (
    <FormControl fullWidth variant="filled" sx={inputStyle}>
      <Select
        multiple
        displayEmpty
        value={filterLevel}
        onChange={onChangeLevel}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                All levels
              </Typography>
            );
          }
          return (
            <Typography variant="subtitle2" component="span">
              {selected.join(', ')}
            </Typography>
          );
        }}
      >
        {LEVELS.map((type) => (
          <MenuItem key={type} value={type} sx={menuItemStyle}>
            <Checkbox size="small" checked={filterLevel.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

ElearningFilterLevel.propTypes = {
  filterLevel: PropTypes.array,
  onChangeLevel: PropTypes.func,
};
