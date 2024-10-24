import PropTypes from 'prop-types';

// ** MUI Imports
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollToTopStyled = styled('div')(({ theme }) => ({
  zIndex: 11,
  position: 'fixed',
  right: theme.spacing(4),
  bottom: theme.spacing(6),
}));

const ScrollToTop = (props) => {
  // ** Props
  const { children, className } = props;

  // ** init trigger
  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true,
  });

  const handleClick = () => {
    const anchor = document.querySelector('body');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Zoom in={trigger}>
      <ScrollToTopStyled className={className} onClick={handleClick} role="presentation">
        {children}
      </ScrollToTopStyled>
    </Zoom>
  );
};

ScrollToTop.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ScrollToTop;
