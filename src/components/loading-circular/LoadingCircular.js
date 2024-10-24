import { Backdrop, CircularProgress, useTheme } from '@mui/material';
import { useSettingsContext } from '../settings';

const LoadingCircular = () => {
  const {
    state: { loadingSpinner },
  } = useSettingsContext();
  const theme = useTheme();

  // open
  // dispatch({ type: 'START_LOADING' });
  // close
  // dispatch({ type: 'END_LOADING' });

  return (
    <Backdrop sx={{ zIndex: theme.zIndex.modal + 10 }} open={loadingSpinner}>
      <CircularProgress sx={{ color: theme.palette.primary.main }} />
    </Backdrop>
  );
};

export default LoadingCircular;
