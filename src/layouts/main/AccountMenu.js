import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { alpha } from '@mui/material/styles';
import { Link, Stack, Drawer, Avatar, Divider, ListItemIcon, ListItemText, ListItemButton, Menu, useTheme, IconButton } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
import useActiveLink from 'src/hooks/useActiveLink';

// _mock
import _mock from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { useSettingsContext } from 'src/components/settings';
import { auth } from 'src/lib/createFirebaseApp';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { updateProfile } from 'firebase/auth';

// ----------------------------------------------------------------------

export function MenuContent() {
  const { themeMode, onToggleMode, user, avatar, setAvatar, client } = useSettingsContext();
  const theme = useTheme();
  const router = useRouter();

  const navigations = [
    {
      title: 'Personal Info',
      path: '/account/personal',
      icon: <Iconify icon="carbon:user" />,
    },
    {
      title: 'Session Audio',
      path: '/account/media',
      icon: <Iconify icon="carbon:favorite" />,
    },
    {
      title: 'Account Settings',
      path: '/account/settings',
      icon: <Iconify icon="carbon:cut-out" />,
    },
    {
      title: 'Account Orders',
      path: '/account/orders',
      icon: <Iconify icon="carbon:document" />,
    },
    {
      title: 'Billing Details',
      path: '/account/billing',
      icon: <Iconify icon="carbon:receipt" />,
    },
  ];
  const [signOut] = useSignOut(auth);

  const handleLogout = () => {
    router.push('/');
    // router.reload();
    const success = signOut();
    if (success) {
      console.log('logged out');
      //
    }
  };

  const handleProfile = async () => {
    // pick a profile pic from /assets/images/avatar/avatar_x
    const pic = Math.floor(Math.random() * 25);
    await updateProfile(user, { photoURL: `/assets/images/avatar/avatar_${pic}.jpg` });
    setAvatar(user.photoURL);

    // dispatch({ type: 'MODAL', payload: { ...modal, open: true } });
  };

  return (
    <Stack
      sx={{
        flexShrink: 0,
        borderRadius: 1,
        width: 1,
        bgcolor: alpha(theme.palette.primary.main, 0.25),
        py: 0,
      }}
    >
      <Stack spacing={2} sx={{ p: 2, pb: 2 }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar src={avatar} sx={{ width: 64, height: 64 }} />
          <Stack direction="row" alignItems="center" sx={{ typography: 'caption', '&:hover': { opacity: 0.65 } }}>
            <IconButton onClick={handleProfile} sx={{ color: 'inherit' }}>
              <Iconify icon="mdi:edit" sx={{ mr: 1 }} />
            </IconButton>
            lucky pic
          </Stack>
        </Stack>

        <Stack spacing={0.5}>
          <TextMaxLine variant="subtitle1" line={1}>
            {client?.acct_per_details?.fname || client?.name}
          </TextMaxLine>
          <TextMaxLine variant="caption" line={1} sx={{ color: 'text.secondary' }}>
            {user?.email}
          </TextMaxLine>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack sx={{ my: 1, px: 2 }}>
        {navigations.map((item) => (
          <MenuItem key={item.title} item={item} />
        ))}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack sx={{ my: 1, px: 1 }}>
        <ListItemButton onClick={onToggleMode}>
          <ListItemIcon>{themeMode === 'dark' ? <Iconify icon="mdi:brightness-7" /> : <Iconify icon="mdi:brightness-2" />}</ListItemIcon>
          <ListItemText
            primary={themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            primaryTypographyProps={{
              typography: 'body2',
            }}
          />
        </ListItemButton>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <Iconify icon="carbon:logout" />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              typography: 'body2',
            }}
          />
        </ListItemButton>
      </Stack>
    </Stack>
  );
}
// ----------------------------------------------------------------------

export default function AccountMenu({ anchorElUser, handleCloseUserMenu }) {
  // const isMdUp = useResponsive('up', 'md');

  return (
    <Menu
      MenuListProps={{ disablePadding: true }}
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={!!anchorElUser}
      onClick={handleCloseUserMenu}
    >
      <MenuContent />
    </Menu>
  );
}

// AccountMenu.propTypes = {
//   handleCloseUserMenu: PropTypes.func,
//   anchorElUser: PropTypes.node,
// };

// ----------------------------------------------------------------------

function MenuItem({ item }) {
  const { active } = useActiveLink(item.path);

  return (
    <Link component={NextLink} key={item.title} href={item.path} color={active ? 'primary' : 'inherit'} underline="none">
      <ListItemButton
        sx={{
          px: 1,
          height: 44,
          borderRadius: 1,
          // color: 'text.primary',
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            typography: 'body2',
            ...(active && {
              typography: 'subtitle2',
            }),
          }}
        />
      </ListItemButton>
    </Link>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.node,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};
