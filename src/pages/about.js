// src/pages/about.js
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerBg from 'assets/aboutbannerbg.jpg';
//import { transform } from 'framer-motion';
import FeaturedProject from '../sections/featured-project';
import TeamSection from '../sections/team-section';
import Otherproducts from '../sections/other-products';

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
                                    ABOUT
                                    <Text sx={styles.redText}>BENCHMARK BUILDING SOLUTIONS</Text>
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
                    <Otherproducts />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
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


    redText: {
        color: 'red',
    },
    titleHeading: {
        textAlign: 'center'
    },
    titleContent: {
        mt: 13,
        textAlign: 'center'
    }
};
