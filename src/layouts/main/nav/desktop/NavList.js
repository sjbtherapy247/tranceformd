import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// // next
// import NextLink from 'next/link';
// import { useRouter } from 'next/router';
// // @mui
// import { Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useActiveLink from 'src/hooks/useActiveLink';
// components

//
import { NavItem } from './NavItem';

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const { path /* ,children */ } = item;

  // const { pathname } = useRouter();
  // const [openMenu, setOpenMenu] = useState(false);

  const { active, isExternalLink } = useActiveLink(path, false);

  // if there are children - ie. submenu items
  // const mainList = children ? children.filter((list) => list.subheader !== 'Common') : [];
  // const commonList = children ? children.find((list) => list.subheader === 'Common') : null;
  // const mainList = children;

  // useEffect(() => {
  //   if (openMenu) {
  //     handleCloseMenu();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname]);

  // const handleOpenMenu = () => {
  //   if (children) {
  //     setOpenMenu(true);
  //   }
  // };

  // const handleCloseMenu = () => {
  //   if (children) setOpenMenu(false);
  // };

  return (
    <NavItem
      item={item}
      active={active}
      // open={openMenu}
      isExternalLink={isExternalLink}
      // onMouseEnter={handleOpenMenu}
      // onMouseLeave={handleCloseMenu}
    />
  );
}

NavList.propTypes = {
  item: PropTypes.object,
};

// ----------------------------------------------------------------------
