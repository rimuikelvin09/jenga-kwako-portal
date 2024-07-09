/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-letter.png';
import ShapeLeft from 'assets/shape-left1.png';
//import ShapeRight from 'assets/shape-right.png';
import BannerBg from 'assets/bannerbg-parallax1.jpg';
import { transform } from 'framer-motion';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
            IT'S NOT BUSINESS,
            <Text sx={styles.redText}>IT'S PERSONAL</Text>
          </Heading>
          {/**  <Text as="p" variant="heroSecondary" sx={styles.titleContent}>
            We are dedicated to turning your home-ownership dreams into reality with our comprehensive A-Z building solutions.
            Together with KMRC, who provide affordable home loans, we guide Kenyans from renting to building their dream homes.
          </Text>
          <Button variant="primary">Learn more 👇</Button> */}
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}


const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    mb: 6,
    zIndex: 2,
    overflow: 'hidden', // Ensure content does not overflow the section
    backgroundImage: `url(${BannerBg})`, // Set background image
    backgroundSize: 'cover', // Cover the entire area
    backgroundAttachment: 'fixed', // Fixed background to achieve parallax effect
    backgroundPosition: 'center', // Center the background image
    '&::before': {
      position: 'absolute',
      content: '""',
      //bottom: 6,
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) 100%)', // Gradient overlay
      /*backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',*/
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      // bottom: '40px',
      bottom: 6,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative', // Ensure container stays in place over the background
      zIndex: 1, // Bring content above the background
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
  redText: {
    color: 'red',
  },
  titleHeading: {
    transform: 'rotate(-10deg)',
    textAlign: 'left'
  },
  titleContent: {
    mt: 13,
    textAlign: 'right'
  }
};
