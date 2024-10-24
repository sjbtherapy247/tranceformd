import PropTypes from 'prop-types';
// @mui
import { MobileDatePicker } from '@mui/x-date-pickers';
import { InputAdornment, InputBase } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelFilterTime({ departureDay, onChangeDepartureDay, sx }) {
  return (
    <MobileDatePicker
      value={departureDay}
      onChange={onChangeDepartureDay}
      slots={{
        textField: ({ inputProps, InputProps, ownerState, inputRef, error, ...inputOther }) => (
          <InputBase
            fullWidth
            {...InputProps}
            ref={InputProps?.ref}
            inputRef={inputRef}
            inputProps={{
              ...inputProps,
              ...inputOther,
              placeholder: 'Departure day',
            }}
            startAdornment={
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:calendar" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            }
            sx={{ height: 44, typography: 'subtitle1', color: 'inherit', ...sx }}
          />
        ),
      }}
      {...sx}
    />
  );
}

TravelFilterTime.propTypes = {
  departureDay: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  onChangeDepartureDay: PropTypes.func,
  sx: PropTypes.object,
};
