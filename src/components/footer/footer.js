/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'react-scroll';
import data from './footer.data';
import { FaChevronRight } from 'react-icons/fa';


import Jklogo from 'assets/Jengalogo.png';
import KMRClogo from 'assets/Kmrclogo.png';
import Bbslogo from 'assets/Benchmarklogo.png';
import Atlogo from 'assets/alphalogo.png';
import Cmaxlogo from 'assets/cmaxlogo.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        {/* Partners Section */}
        <Box sx={styles.footer.partners}>
          <Grid sx={styles.footer.logos}>
            <Link path="/">
              <Image src={Jklogo} style={{ width: '70px', height: 'auto' }} alt="Logo" />
            </Link>
            <Link path="/">
              <Image src={Bbslogo} style={{ width: '70px', height: 'auto' }} alt="Logo" />
            </Link>
            <Link path="/">
              <Image src={KMRClogo} style={{ width: '70px', height: 'auto' }} alt="Logo" />
            </Link>
            <Link path="/">
              <Image src={Cmaxlogo} style={{ width: '70px', height: 'auto' }} alt="Logo" />
            </Link>
            <Link path="/">
              <Image src={Atlogo} style={{ width: '70px', height: 'auto' }} alt="Logo" />
            </Link>
          </Grid>
        </Box>

        {/* Site-Map Section */}
        <Box sx={styles.footer.siteMap}>
          <Grid sx={styles.footer.siteMapGrid}>
            <Box>
              <Heading sx={styles.footer.heading}>{data.menuItems.heading}</Heading>
              <nav>
                {data.menuItems.quickLinks.map(({ path, label }, i) => (
                  <a to={path} key={i} sx={styles.footer.link}>
                    <FaChevronRight sx={styles.footer.icon} />
                    {label}
                  </a>
                ))}
              </nav>
            </Box>
            <Box>
              <Heading sx={styles.footer.heading}>{data.resources.heading}</Heading>
              <nav>
                {data.resources.items.map(({ path, label }, i) => (
                  <a to={path} key={i} sx={styles.footer.link}>
                    <FaChevronRight sx={styles.footer.icon} />
                    {label}
                  </a>
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
            <Box>
              <Heading sx={styles.footer.heading}>{data.socialMedia.heading}</Heading>
              <nav sx={styles.footer.socialLinks}>
                <Grid sx={styles.footer.socialGrid}>
                  {data.socialMedia.links.map(({ path, icon: IconComponent }, i) => (
                    <Box as="span" key={i} >
                      <a sx={styles.footer.socialIcon} href={path} target="_blank" rel="noopener noreferrer">
                        <IconComponent />
                      </a>
                    </Box>
                  ))}
                </Grid>
              </nav>
            </Box>
          </Grid>
        </Box>

        {/* Copywriter Section */}
        <Box sx={styles.footer.copywriter}>
          <Grid sx={styles.footer.copywriterGrid}>
            <Text sx={styles.footer.copyright}>
              ©️ {new Date().getFullYear()} Benchmark Building Solutions Ltd
            </Text>
            <Text>Powered by AlphatechInsights</Text>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    partners: {
      mb: '40px',
    },
    logos: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      mb: '20px',
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
      color: 'text',
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
      color: 'Primary',
      marginRight: '10px',
    },
    socialGrid: {
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr', 'repeat(5, 1fr)'],
      gap: '30px',
      justifyItems: 'center',
      display: 'flex',
      flexDirection: 'row'
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
      color: 'secondary',
      fontSize: 24,
      mb: '10px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mb: '0',
      },
      '&:hover': {
        color: 'primary',
      },
    },
    copywriter: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
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
    heading: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
      cursor: 'pointer',
    },
    icon: {
      color: 'primary',
      marginRight: '8px',
    }
  },
};
