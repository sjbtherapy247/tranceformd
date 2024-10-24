import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// next
import NextLink from 'next/link';
// @mui
import { Link, List, Drawer, IconButton, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// config
import { NAV } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
//
import Image from 'src/components/image/Image';
//
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const { pathname } = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={open}
        // anchor="right"
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_BASE,
          },
        }}
      >
        <Scrollbar>
          <Link component={NextLink} href="/">
            <Box sx={{ lineHeight: 0, position: 'relative', height: '64px', width: '185.44px' }}>
              <Image src="/assets/sjb-logo/hnav-logo.jpg" alt="go home" sx={{ height: 1 }} />
            </Box>
          </Link>

          <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}
          </List>

          <Box sx={{ p: 3 }}>
            <Link component={NextLink} href="/services#hypnotherapyPackages">
              <Button fullWidth variant="contained" onClick={handleClose}>
                Book Now
              </Button>
            </Link>
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
