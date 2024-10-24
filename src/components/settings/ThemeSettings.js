import PropTypes from 'prop-types';
//
import ThemeRtlLayout from './ThemeRtlLayout';
import ThemeColorPresets from './ThemeColorPresets';

// ----------------------------------------------------------------------

ThemeSettings.propTypes = {
  children: PropTypes.node,
};

export default function ThemeSettings({ children }) {
  return (
    <ThemeColorPresets>
      <ThemeRtlLayout>{children}</ThemeRtlLayout>
    </ThemeColorPresets>
  );
}
