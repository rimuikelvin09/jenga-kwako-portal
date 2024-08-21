/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import Link from 'next/link'; // to navigate to other pages
import Logo from 'components/logo';
import LogoDark from 'assets/Jengalogo.png';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import RegisterButton from '../signupform/RegisterButton'; // Import RegisterButton

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} style={{ width: '50px', height: 'auto' }} />
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link href={path} key={i} passHref>
                <a sx={styles.navLink}>{label}</a>
              </Link>
            ))}
          </Flex>

          <RegisterButton isInHeader={true} />

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
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
    '.register__btn': {
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
};
