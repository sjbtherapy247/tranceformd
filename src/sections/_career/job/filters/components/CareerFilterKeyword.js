import PropTypes from 'prop-types';
// @mui
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
// _mock
import _mock from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CareerFilterKeyword({ filterKeyword, onChangeKeyword, sx }) {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      options={_mock.jobTitle}
      getOptionLabel={(option) => option}
      value={filterKeyword}
      onChange={(event, value) => onChangeKeyword(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          variant="filled"
          placeholder="Job title, keywords..."
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:search" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            ),
            sx: { pb: 1, ...sx },
          }}
        />
      )}
    />
  );
}

CareerFilterKeyword.propTypes = {
  filterKeyword: PropTypes.string,
  onChangeKeyword: PropTypes.func,
  sx: PropTypes.object,
};
