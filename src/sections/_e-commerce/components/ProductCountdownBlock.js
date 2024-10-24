import PropTypes from 'prop-types';
// @mui
import { Stack, Typography } from '@mui/material';
// hooks
import useCountdown from 'src/hooks/useCountdown';

// ----------------------------------------------------------------------

export default function ProductCountdownBlock({ expired, hiddenLabel = false, sx, ...other }) {
  const { days, hours, minutes, seconds } = useCountdown(expired);

  return (
    <Stack
      spacing={1}
      display="inline-flex"
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        typography: 'subtitle1',
        ...sx,
      }}
      {...other}
    >
      {Number(days) > 0 && (
        <>
          <TimeBlock label="Days" value={days} hiddenLabel={hiddenLabel} />
          <Separator hiddenLabel={hiddenLabel} />
        </>
      )}

      <TimeBlock label="Hours" value={hours} hiddenLabel={hiddenLabel} />

      <Separator hiddenLabel={hiddenLabel} />

      <TimeBlock label="Minutes" value={minutes} hiddenLabel={hiddenLabel} />

      <Separator hiddenLabel={hiddenLabel} />

      <TimeBlock label="Seconds" value={seconds} hiddenLabel={hiddenLabel} />
    </Stack>
  );
}

ProductCountdownBlock.propTypes = {
  expired: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  hiddenLabel: PropTypes.bool,
  sx: PropTypes.object,
};

// ----------------------------------------------------------------------

function TimeBlock({ label, value, hiddenLabel }) {
  return (
    <Stack spacing={1}>
      <Stack
        className="value"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 56,
          height: 44,
          borderRadius: 1,
          bgcolor: 'grey.800',
          color: 'common.white',
        }}
      >
        {value}
      </Stack>

      {!hiddenLabel && (
        <Typography
          className="label"
          variant="caption"
          sx={{ color: 'grey.600', textAlign: 'center' }}
        >
          {label}
        </Typography>
      )}
    </Stack>
  );
}

TimeBlock.propTypes = {
  hiddenLabel: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
};
// ----------------------------------------------------------------------

function Separator({ hiddenLabel }) {
  return (
    <Stack spacing={1} flexShrink={0} className="separator" sx={{ color: 'grey.800' }}>
      <Stack alignItems="center" justifyContent="center" flexGrow={1}>
        :
      </Stack>

      {!hiddenLabel && (
        <Typography variant="caption" sx={{ opacity: 0 }}>
          :
        </Typography>
      )}
    </Stack>
  );
}

Separator.propTypes = {
  hiddenLabel: PropTypes.bool,
};
