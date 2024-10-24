import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import {
  Box,
  List,
  Link,
  Stack,
  Drawer,
  Button,
  Divider,
  Typography,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material';
// config
import { NAV, ICON } from '../../config-global';
//
import Logo from '../logo';
import Iconify from '../iconify';
import Scrollbar from '../scrollbar';

// ----------------------------------------------------------------------

export default function MegaMenuMobile({ data, open, action, onOpen, onClose }) {
  const { pathname } = useRouter();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {action || (
        <Button variant="contained" onClick={onOpen} startIcon={<Iconify icon="carbon:menu" />}>
          Menu
        </Button>
      )}

      <Drawer
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: NAV.W_BASE } }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          {data.map((parent) => (
            <SubMenu key={parent.title} parent={parent} pathname={pathname} />
          ))}
        </Scrollbar>
      </Drawer>
    </>
  );
}

MegaMenuMobile.propTypes = {
  action: PropTypes.node,
  data: PropTypes.array,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};

// ----------------------------------------------------------------------

const ParentItem = forwardRef(({ icon, title, hasSub, ...other }, ref) => (
  <ListItemButton ref={ref} sx={{ height: 44, textTransform: 'capitalize' }} {...other}>
    <ListItemIcon
      sx={{
        width: ICON.NAV_ITEM,
        height: ICON.NAV_ITEM,
      }}
    >
      {icon}
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{ typography: 'body2' }}>{title}</ListItemText>
    {hasSub && <Iconify icon="carbon:chevron-right" width={16} />}
  </ListItemButton>
));

ParentItem.propTypes = {
  hasSub: PropTypes.bool,
  icon: PropTypes.node,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function SubMenu({ parent, pathname }) {
  const { title, icon, path, children } = parent;

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (openDrawer) {
      handleCloseDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  if (children) {
    return (
      <>
        <ParentItem title={title} icon={icon} onClick={handleOpenDrawer} hasSub />

        <Drawer
          open={openDrawer}
          onClose={handleCloseDrawer}
          BackdropProps={{ invisible: true }}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: NAV.W_BASE - 12,
              borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
            },
          }}
        >
          <Stack direction="row" alignItems="center" px={1} py={1.5}>
            <IconButton onClick={handleCloseDrawer}>
              <Iconify icon="carbon:chevron-left" width={16} />
            </IconButton>

            <Typography noWrap variant="subtitle1" sx={{ ml: 1, textTransform: 'capitalize' }}>
              {title}
            </Typography>
          </Stack>
          <Divider />

          <Scrollbar>
            <Stack spacing={5} py={3}>
              {children.map((list) => {
                const { subheader, items } = list;

                return (
                  <List key={subheader} disablePadding>
                    <Typography
                      component="div"
                      variant="overline"
                      sx={{ px: 2.5, mb: 1, color: 'text.secondary' }}
                      noWrap
                    >
                      {subheader}
                    </Typography>
                    {items.map((link) => (
                      <Link
                        key={link.title}
                        component={NextLink}
                        href={link.path}
                        color="inherit"
                        underline="none"
                      >
                        <ListItemButton sx={{ px: 1.5 }}>
                          <ListItemIcon
                            sx={{
                              mr: 0.5,
                              width: ICON.NAV_ITEM,
                              height: ICON.NAV_ITEM,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Box
                              sx={{
                                width: 4,
                                height: 4,
                                bgcolor: 'currentColor',
                                borderRadius: '50%',
                              }}
                            />
                          </ListItemIcon>

                          <ListItemText
                            primary={link.title}
                            primaryTypographyProps={{ noWrap: true, typography: 'body2' }}
                          />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                );
              })}
            </Stack>
          </Scrollbar>
        </Drawer>
      </>
    );
  }

  return (
    <Link component={NextLink} href={path} color="inherit" underline="none">
      <ParentItem title={title} icon={icon} />
    </Link>
  );
}

SubMenu.propTypes = {
  parent: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.node,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  pathname: PropTypes.string,
};
