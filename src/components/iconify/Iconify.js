import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
// @mui

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, height = 24, sx, ...other }, ref) => (
  <Icon
    ref={ref}
    // component={Icon}
    height={height}
    icon={icon}
    sx={{ flexShrink: 0, ...sx }}
    {...other}
  />
));

Iconify.propTypes = {
  icon: PropTypes.node,
  sx: PropTypes.object,
  height: PropTypes.number,
};

export default Iconify;
