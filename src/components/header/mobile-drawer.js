import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import menuItems from './header.data';

const social = [
  {
    path: 'https://www.instagram.com/jengakwako_ke/',
    icon: <FaInstagram />,
  },
  {
    path: 'https://www.facebook.com/bbsltdke/',
    icon: <FaFacebookF />,
  },
  {
    path: 'https://x.com/BenchmarkBuild4',
    icon: <FaTwitter />,
  },
  {
    path: 'https://www.youtube.com/@bbsltd_ke',
    icon: <FaYoutube />,
  },
  {
    path: 'https://www.linkedin.com/company/benchmark-building-solutions-ltd/',
    icon: <FaLinkedinIn />,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  // Close drawer when a menu item is clicked
  const handleLinkClick = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer(state.isOpen)} // Pass isOpen to drawerStyle
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <Link href={path} key={i} passHref legacyBehavior>
                <a sx={styles.navLink} onClick={handleLinkClick}>
                  {label}
                </a>
              </Link>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link href={path} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      {icon}
                    </a>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  navLink: {
    textDecoration: 'none',
    color: 'text',
    fontSize: 2,
    fontWeight: 'heading',
    px: 5,
    cursor: 'pointer',
    lineHeight: '1.2',
    transition: 'all 0.15s',
    '&:hover': {
      color: 'primary',
    },
    '&.active': {
      color: 'primary',
    },
  },
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  // Modify the drawer style to apply the animation
  drawer: (isOpen) => ({
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
    position: 'fixed',
    top: 0,
    left: 0,
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out', // Smooth slide transition
    zIndex: 1000, // Ensure the drawer is above other elements
  }),

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    a: {
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      color: 'text',
      py: '15px',
      cursor: 'pointer',
      // borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
