import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import {
  Stack,
  Divider,
  Popover,
  InputBase,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelFilterGuests({
  guests,
  onIncrementGuests,
  onDecreaseGuests,
  sx,
  ...other
}) {
  const totalGuests = guests.children + guests.adults;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <InputBase
        fullWidth
        value={totalGuests > 0 ? `${totalGuests} Guests` : ''}
        placeholder="Guests"
        startAdornment={
          <InputAdornment position="start">
            <Iconify width={24} icon="carbon:events" sx={{ mr: 1, color: 'text.disabled' }} />
          </InputAdornment>
        }
        onClick={handleOpen}
        sx={{ height: 44, typography: 'subtitle1', color: 'inherit', ...sx }}
        {...other}
      />

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{ sx: { width: 360, p: 3 } }}
      >
        <Stack spacing={2.5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
          <Input
            title="Adults"
            caption="Ages 13 or above"
            total={guests.adults}
            onDecrease={onDecreaseGuests}
            onIncrement={onIncrementGuests}
          />

          <Input
            title="Children"
            caption="Ages 2 - 12"
            total={guests.children}
            onDecrease={() => onDecreaseGuests('children')}
            onIncrement={() => onIncrementGuests('children')}
          />
        </Stack>
      </Popover>
    </>
  );
}

TravelFilterGuests.propTypes = {
  guests: PropTypes.shape({
    adults: PropTypes.number,
    children: PropTypes.node,
  }),
  onDecreaseGuests: PropTypes.func,
  onIncrementGuests: PropTypes.func,
  sx: PropTypes.object,
};

// ----------------------------------------------------------------------

function Input({ title, caption, total, onDecrease, onIncrement }) {
  return (
    <Stack direction="row">
      <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {caption}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: 100, typography: 'subtitle1' }}
      >
        <IconButton
          disabled={total < 1}
          onClick={onDecrease}
          sx={{ p: 0, '&.Mui-disabled': { opacity: 0.72 } }}
        >
          <Iconify icon="carbon:subtract-alt" />
        </IconButton>

        {total}

        <IconButton onClick={onIncrement} sx={{ p: 0 }}>
          <Iconify icon="carbon:add-alt" />
        </IconButton>
      </Stack>
    </Stack>
  );
}

Input.propTypes = {
  caption: PropTypes.string,
  onDecrease: PropTypes.func,
  onIncrement: PropTypes.func,
  title: PropTypes.string,
  total: PropTypes.number,
};
