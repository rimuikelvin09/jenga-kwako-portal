/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import Link from 'next/link'; // to navigate to other pages
import data from './footer.data';
import { FaChevronRight } from 'react-icons/fa';

import KMRClogo from 'assets/Kmrclogo.png';
import Bbslogo from 'assets/Benchmarklogo.png';
import Atlogo from 'assets/alphalogo.png';
import Cmaxlogo from 'assets/cmaxlogo.png';
import Stanbiclogo from 'assets/stanbiclogo.png';
import Kpra from 'assets/kpra.png';
import Nca from 'assets/NCA.png';
import Footerbg from 'assets/footerbg1.jpg';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      {/* Partners Section */}
      <Box sx={styles.footer.partners}>
        <Grid sx={styles.footer.logos}>
          <Link href="https://bbsltd.co.ke/">
            <Image src={Bbslogo} style={{ width: '100px', height: 'auto' }} alt="Logo" />
          </Link>
          <Link href="https://www.kmrc.co.ke/">
            <Image src={KMRClogo} style={{ width: '100px', height: 'auto' }} alt="Logo" />
          </Link>
          <Link href="https://www.cmax.co.ke/cmax-technology/">
            <Image src={Cmaxlogo} style={{ width: '100px', height: 'auto' }} alt="Logo" />
          </Link>
          <Link href="https://www.stanbicbank.co.ke/kenya/personal/products-and-services/borrow-for-your-needs/see-all-home-loans/affordable-housing">
            <Image src={Stanbiclogo} style={{ width: '100px', height: 'auto' }} alt="Logo" />
          </Link>
          <Link href="https://alphainsights.co.ke/">
            <Image src={Atlogo} style={{ width: '100px', height: 'auto' }} alt="Logo" />
          </Link>
        </Grid>
      </Box>

      {/* Site Map and Social Media Section */}
      <Box sx={styles.footer.siteMapBg}>
        <Container sx={styles.footer.siteMapContainer}>
          <Box sx={styles.footer.siteMap}>
            <Grid sx={styles.footer.siteMapGrid}>
              {/* Social Media and Accreditations Column */}
              <Box>
                <Heading sx={styles.footer.heading}>{data.socialMedia.heading}</Heading>
                <nav sx={styles.footer.socialLinks}>
                  <Grid sx={styles.footer.socialGrid}>
                    {data.socialMedia.links.map(({ path, icon: IconComponent }, i) => (
                      <Box as="span" key={i}>
                        <a sx={styles.footer.socialIcon} href={path} target="_blank" rel="noopener noreferrer">
                          <IconComponent />
                        </a>
                      </Box>
                    ))}
                  </Grid>
                </nav>

                {/* Accreditations */}
                <Box sx={styles.footer.accreditations}>
                  <Heading sx={styles.footer.heading}>Accreditations</Heading>
                  <Grid sx={styles.footer.accreditationGrid}>
                    <Image
                      src={Kpra}
                      style={{
                        width: '170px',
                        height: 'auto',
                        filter: 'brightness(1.8)'
                      }}
                      alt="Kpra Logo"
                    />
                    <Image src={Nca} style={{ width: '70px', height: 'auto' }} alt="NCA Logo" />
                  </Grid>
                </Box>
              </Box>

              {/* Other Footer Sections */}
              <Box>
                <Heading sx={styles.footer.heading}>{data.menuItems.heading}</Heading>
                <nav>
                  {data.menuItems.quickLinks.map(({ path, label }, i) => (
                    <Link href={path} key={i} passHref>
                      <a sx={styles.footer.link}>
                        <FaChevronRight sx={styles.footer.icon} />
                        {label}
                      </a>
                    </Link>
                  ))}
                </nav>
              </Box>
              <Box>
                <Heading sx={styles.footer.heading}>{data.resources.heading}</Heading>
                <nav>
                  {data.resources.items.map(({ path, label }, i) => (
                    <Link href={path} key={i} passHref>
                      <a sx={styles.footer.link}>
                        <FaChevronRight sx={styles.footer.icon} />
                        {label}
                      </a>
                    </Link>
                  ))}
                </nav>
              </Box>
              <Box>
                <Heading sx={styles.footer.heading}>{data.getInTouch.heading}</Heading>
                <Box sx={styles.footer.contactInfo}>
                  {data.getInTouch.details.map(({ icon: IconComponent, info }, i) => (
                    <Box key={i} sx={styles.footer.contactItem}>
                      <IconComponent sx={styles.footer.contactIcon} />
                      <Text>{info}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Copywriter Section */}
      <Box sx={styles.footer.copywriter}>
        <Grid sx={styles.footer.copywriterGrid}>
          <Text sx={styles.footer.copyright}>
            ©️ {new Date().getFullYear()} Benchmark Building Solutions Ltd
          </Text>
          <Text>Powered by
            <a
              sx={styles.atLink}
              href={'https://alphainsights.co.ke/'}
            >
              👉 AlphatechInsights
            </a>
          </Text>
        </Grid>
      </Box>
    </footer>
  );
}

const styles = {
  footer: {
    partners: {
      mt: '100px',
      mb: '100px',
    },
    logos: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      mb: '20px',
      cursor: 'pointer',
      ':last-child': {
        mb: '0',
      },
      '&:hover': {
        color: 'primary',
      },
    },
    siteMapBg: {
      pt: '50px',
      pb: '50px',
      background: `url(${Footerbg}) no-repeat center center`,
      backgroundSize: 'cover',
      position: 'relative',
      width: '100%',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(20, 48, 86, .96)',
        zIndex: 1,
      },
    },
    siteMapContainer: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      mx: 'auto',
      px: [3, 5],
    },
    siteMap: {
      mb: '40px',
    },
    siteMapGrid: {
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '1fr', 'repeat(4, 1fr)'],
      gap: '20px',
      textAlign: 'left',
      width: '100%',
    },
    link: {
      fontSize: [1, '15px'],
      color: 'white',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      ':hover': {
        color: 'primary',
      },
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    contactItem: {
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mb: '0',
      },
      '&:hover': {
        color: 'primary',
      },
    },
    contactIcon: {
      color: 'primary',
      marginRight: '10px',
    },
    socialGrid: {
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr', 'repeat(5, 1fr)'],
      gap: '30px',
      justifyItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    socialLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    socialIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary',
      fontSize: 24,
      mb: '10px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mb: '0',
      },
      '&:hover': {
        color: 'white',
      },
    },
    heading: {
      fontSize: 3,
      color: 'muted',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
      cursor: 'pointer',
    },
    icon: {
      color: 'primary',
      marginRight: '8px',
    },

    accreditations: {
      mt: '20px',
    },
    accreditationGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      mt: '10px',
    },

    copywriter: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      pt: [6, null, 7],
      pb: ['10px', null, '30px'],
      pl: ['10px', null, '100px'],
      pr: ['20px', null, '100px'],
      textAlign: 'left',
    },
    copywriterGrid: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: ['column', 'row'],
    },
    copyright: {
      fontSize: [1, '15px'],
      mb: [3, 0],
    },
  },
  atLink: {
    textDecoration: 'none',
    color: 'green'
  }
};
