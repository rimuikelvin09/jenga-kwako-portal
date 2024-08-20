/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-letter.png';
import ShapeLeft from 'assets/shape-left1.png';
import BannerBg from 'assets/bannerbg-parallax1.jpg';
import Homebanner from 'assets/homebanner.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
            IT'S NOT BUSINESS,
            <Text sx={styles.redText}>IT'S PERSONAL</Text>
          </Heading>
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
    //height: '100vh',
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    mb: 6,
    zIndex: 2,
    overflow: 'hidden',
    background: 'radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(240, 100%, 96%, 1) 100%);',
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the background image
    '&::before': {
      position: 'absolute',
      content: '""',
      top: '-35%',
      left: '55%',
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${Homebanner})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '45%',
      transform: 'scaleX(-1)',
      /* '@media screen and (max-width: 768px)': {
         display: 'none',  // Hide the image on mobile devices
       },*/
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      top: 10,
      bottom: 0,
      paddingBottom: '50%',
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      //backgroundImage: `url(${Homebanner})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'top right',
      backgroundSize: '40%',
      transform: 'scaleX(-1)', // Invert the image horizontally
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
    left: '10%',
    textAlign: 'left',
    top: '20px',
  },
  titleContent: {
    mt: 13,
    textAlign: 'right'
  }
};
