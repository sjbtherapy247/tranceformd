import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Link,
  Stack,
  // Button,
  AppBar,
  Toolbar,
  // Container,
  Tooltip,
  IconButton,
  Badge,
  Avatar,
} from '@mui/material';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';
import { useSettingsContext } from 'src/components/settings/SettingsContext';

// config
import { HEADER } from 'src/config-global';

import Image from 'src/components/image/Image';
import Iconify from 'src/components/iconify/Iconify';

import { bgBlur } from 'src/utils/cssStyles';
import { useEffect, useState } from 'react';
import _mock from 'src/_mock/_mock';
import { NavMobile, NavDesktop, navConfig } from '../nav';
import AccountMenu from '../AccountMenu';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();
  const { onToggleMode, user, loading, avatar } = useSettingsContext();
  const [anchorElUser, setAnchorElUser] = useState();

  const isMdUp = useResponsive('up', 'md');
  const isSmUp = useResponsive('up', 'sm');

  const isOffset = useOffSetTop(2);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleUserClick = () => {
  //   //
  // }

  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none', width: '99vw' }}>
      <Toolbar
        disableGutters
        sx={{
          display: 'block',
          height: {
            xs: HEADER.H_MOBILE,
            // md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: 800,
            // duration: theme.transitions.duration.shorter,
          }),

          ...(isOffset && {
            ...{ backgroundColor: theme.palette.primary.dark },
            // ...bgBlur({ color: theme.palette.primary.darker, blur: 6 }),
            // ...bgBlur({ color: theme.palette.background.default, blur: 5 }),
            // color: 'text.primary',
            color: 'common.white',
            // height: {
            //   md: HEADER.H_MAIN_DESKTOP,
            // },
          }),
          ...(!isOffset && {
            // ...{ backgroundColor: theme.palette.primary.dark },
            ...bgBlur({ color: theme.palette.primary.darker, blur: 7, opacity: 0.1 }),
            // ...bgBlur({ color: theme.palette.background.default, blur: 5 }),
            // color: 'text.primary',
            // height: {
            //   md: HEADER.H_MAIN_DESKTOP,
            // },
          }),
          // ...(!isMdUp && {
          //   ...{ backgroundColor: theme.palette.primary.dark },
          //   color: 'common.white',
          // }),
        }}
      >
        <Box sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          {isSmUp && (
            <Link href="/" component={NextLink}>
              <Tooltip arrow placement="bottom" title="home" enterDelay={1000}>
                <Box
                  sx={{
                    ml: '6px',
                    lineHeight: 0,
                    position: 'relative',
                    height: isOffset ? '64px' : '54px',
                    width: '185.44px',
                    borderRadius: isOffset ? 0 : 1,
                    overflow: 'hidden',
                    transition: theme.transitions.create(['height'], {
                      easing: theme.transitions.easing.easeInOut,
                      duration: 500,
                      // duration: theme.transitions.duration.shorter,
                    }),
                  }}
                >
                  <Image src="/assets/sjb-logo/hnav-logo.jpg" alt="SjB Therapy | Local Hypnotherapy" disabledEffect sx={{ height: 1 }} />
                </Box>
              </Tooltip>
            </Link>
          )}
          {!isSmUp && (
            <Link href="/" component={NextLink}>
              <Tooltip arrow placement="bottom" title="home" enterDelay={1000}>
                <Box sx={{ ml: 1, lineHeight: 0, position: 'relative', height: '54px', width: '54px', borderRadius: 1, overflow: 'hidden' }}>
                  <Image src="/assets/sjb-logo/hicon.png" alt="SjB Therapy | Local Hypnotherapy" disabledEffect sx={{ height: 1 }} />
                </Box>
              </Tooltip>
            </Link>
          )}
          {!isMdUp && <NavMobile data={navConfig} />}

          {isMdUp && <NavDesktop data={navConfig} />}

          <Stack spacing={1} flexGrow={1} direction="row" alignItems="center" justifyContent="flex-end" sx={{ pr: { xs: 0, md: 2 } }}>
            {/* {!isMdUp && (
              <IconButton color="inherit">
                <Iconify icon="carbon:search" />
              </IconButton>
            )} */}

            {user && !loading && (
              <>
                {/* <IconButton component={NextLink} href={paths.eCommerce.cart} color="inherit">
                  <Badge badgeContent={4} color="error">
                    <Iconify icon="carbon:shopping-cart" />
                  </Badge>
                </IconButton> */}

                {/* <IconButton component={NextLink} href={paths.eCommerce.account.personal} color="inherit"> */}
                <IconButton onClick={handleOpenUserMenu} color="inherit">
                  {/* <Iconify icon="carbon:user" /> */}
                  <Avatar src={avatar} sx={{ width: 40, height: 40 }} />
                </IconButton>
              </>
            )}

            {/* <Stack spacing={1} direction="row" alignItems="center" sx={{ pr: { xs: 0, md: 2 } }}> */}
            {!user && !loading && (
              <>
                <Tooltip title={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'} arrow placement="bottom-end">
                  <IconButton onClick={onToggleMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Iconify icon="mdi:brightness-7" /> : <Iconify icon="mdi:brightness-2" />}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sign in" arrow placement="bottom">
                  <Link component={NextLink} href="/auth/login-cover" underline="none" color="inherit">
                    <IconButton color="inherit" aria-label="search">
                      <Iconify icon="mdi:login" />
                    </IconButton>
                  </Link>
                </Tooltip>
              </>
            )}

            {/* <Badge badgeContent={2} color="info">
                <IconButton component={NextLink} href={paths.eCommerce.wishlist} size="small" color="inherit" sx={{ p: 0 }}>
                  <Iconify icon="carbon:favorite" width={24} />
                </IconButton>
              </Badge> */}

            {/* </Stack> */}
          </Stack>
          <AccountMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
