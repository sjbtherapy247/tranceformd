import { Alert, AlertTitle, Snackbar } from '@mui/material';
import React from 'react';
import { useSettingsContext } from '../settings';

const Notification = () => {
  const {
    state: { alert },
    dispatch,
  } = useSettingsContext();
  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: 'UPDATE_ALERT', payload: { ...alert, open: false, variant: 'filled' } }); // everytime we close we revert default variant to 'filled'
  };
  return (
    <Snackbar
      open={alert?.open}
      autoHideDuration={alert.duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: alert.posn || 'top', horizontal: 'center' }}
      // sx={{ width: { xs: 400, sm: 'auto' } }}
    >
      <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }} variant={alert.variant} elevation={10}>
        <AlertTitle>{alert.severity}</AlertTitle>
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
