const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ALERT':
      return { ...state, alert: action.payload };
    case 'MODAL':
      return { ...state, modal: action.payload };
    case 'START_LOADING':
      return { ...state, loadingSpinner: true };
    case 'END_LOADING':
      return { ...state, loadingSpinner: false };

    default:
      throw new Error('no action');
  }
};

export default reducer;

// reference copy
// const initialstate = {
//   alert: { open: false, severity: 'info', message: '', duration: 1000 },
//   modal: { open: false, title: '', content: '' },
//   loading: false,
//   lightbox: { open: false, currentIndx: 0 },
// };
