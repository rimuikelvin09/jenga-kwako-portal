/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Gachinga from 'assets/gachingabanner.png';
//import ShapeRight from 'assets/aboutbanner2.png;'
import FeaturedProject from '../sections/featured-project';
import TeamSection from '../sections/team-section';
import Otherproducts from '../sections/other-products';
import Highlights from '../sections/highlights';

export default function AboutPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="About Us | Jenga Kwako" />

                    <section sx={styles.banner} id="home">
                        <Container sx={styles.banner.container}>
                            <Box sx={styles.banner.contentBox}>
                                <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
                                    EAST OR WEST
                                    <Text sx={styles.redText}>HOME IS BEST 🏠 </Text>
                                </Heading>
                                <Text as="p" variant="heroSecondary" sx={styles.titleContent}>
                                    We are dedicated to turning your home-ownership dreams into reality with our comprehensive A-Z building solutions.
                                    Together with KMRC, who provide affordable home loans, we guide Kenyans from renting to building their dream homes.
                                </Text>
                            </Box>
                        </Container>
                    </section>

                    <FeaturedProject />
                    <TeamSection />
                    <Highlights />
                    <Otherproducts />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    banner: {
        height: '100vh',
        pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
        pb: [2, null, 0, null, 2, 0, null, 5],
        position: 'relative',
        mb: 6,
        zIndex: 2,
        overflow: 'hidden', // Ensure content does not overflow the section
        background: 'radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(240, 100%, 96%, 1) 100%);', // Gradient overlay 
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the background image
        '@media screen and (max-width: 768px)': {
            height: 'auto',  // Hide the image on mobile devices
        },
        /*'&::before': {
            position: 'absolute',
            content: '""',
            top: '30%',
            left: '10%',
            height: '100%',
            width: '100%',
            zIndex: -1,
            backgroundImage: `url(${ShapeRight})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'bottom right',
            backgroundSize: '50%',
        },*/
        '&::after': {
            position: 'absolute',
            content: '""',
            top: 10,
            bottom: 10,
            left: 0,
            right: 0,
            height: '100%',
            width: '100%',
            zIndex: -1,
            backgroundImage: `url(${Gachinga})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'bottom left',
            backgroundSize: '36%',
            '@media screen and (max-width: 768px)': {
                display: 'none',  // Hide the image on mobile devices
            },

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
            width: ['100%', '90%', '535px', null, '57%', '60%', '78%', '70%'],
            mx: 'auto',
            textAlign: 'left',
            mb: ['40px', null, null, null, null, 7],
            px: [0, null, 5, 6, null, 8, 9],
        },
    },
    redText: {
        color: 'primary',
    },
    titleHeading: {
        textAlign: 'left'
    },
    titleContent: {
        textAlign: ['left', null, 'left'],
        //px: [0, null, 5, 6, null, 8, 9],
        px: 0,
    }
};
