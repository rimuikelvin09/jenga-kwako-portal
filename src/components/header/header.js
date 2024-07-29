/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
//import { Link } from 'react-scroll';
import Link from 'next/link';//to navigate to other pages
import Logo from 'components/logo';
import LogoDark from 'assets/Jengalogo.png';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import useHubSpotForm from './useHubSpotForm';

export default function Header({ className }) {
  const { loadForm, closeForm, isFormVisible } = useHubSpotForm('139636134', 'e3dbe126-3d3c-4f80-bc4f-3cabb8a9381e');

  return (

    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} style={{ width: '50px', height: 'auto' }} />

          {/**   <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
            <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
              
            ))}
          </Flex>  */}

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link href={path} key={i} passHref>
                <a sx={styles.navLink}>{label}</a>
              </Link>
            ))}
          </Flex>

          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Sign-Up"
            onClick={loadForm}
          >
            Sign-Up
          </Button>

          <MobileDrawer />
        </Container>
      </header>
      {
        isFormVisible && (
          <div sx={styles.formOverlay}>
            <div sx={styles.formContainer}>
              <button sx={styles.closeButton} onClick={closeForm}>❌</button>
              <div id="hubspotForm"></div>
            </div>
          </div>
        )
      }
    </DrawerProvider >

  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
  },
  navLink: {
    fontSize: 2,
    fontWeight: 'body',
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
  formOverlay: {
    mt: '400px',
    width: '100%',
    height: '100%',
    maxWidth: '100vw',
    maxHeight: '90vh',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(100px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  formContainer: {
    position: 'relative',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    width: '100%',
    maxWidth: '650px',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  closeButton: {
    position: 'fixed',
    top: '-280px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#333',
    zIndex: 1100,
  },
};
