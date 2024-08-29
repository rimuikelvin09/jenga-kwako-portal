/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerBg from 'assets/aboutbannerbg.jpg';
import Bannerimg from 'assets/samplebanner.png';
import Sampleplan from 'assets/sampleplan.png'
import Sampleplan1 from 'assets/sampleplan1.png'

import CardGrid from '../sections/plans';

export default function SamplePlans() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Sample Plans | Jenga Kwako" />

                    <section sx={styles.banner} id="home">
                        <Container sx={styles.banner.container}>
                            <Box sx={styles.banner.contentBox}>
                                <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
                                    KUONA NI BURE
                                    <Text sx={styles.redText}>KUJENGA NI STRESS-FREE</Text>
                                </Heading>
                                <Text as="p" variant="heroSecondary" sx={styles.titleContent}>
                                    Why settle for just dreaming about your perfect home when you can start right here. At Jenga Kwako, we’re all about turning those late-night Pinterest boards
                                    into actual, brick-and-mortar reality. So, stop fantasizing and start planning—we’re here
                                    to make sure your dream home isn’t just in your head, but right under your feet!.
                                </Text>
                            </Box>
                        </Container>
                    </section>

                    <section>
                        <CardGrid />
                    </section>

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
        overflow: 'hidden',
        background: 'radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(240, 100%, 96%, 1) 100%);',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '@media screen and (max-width: 768px)': {
            height: 'auto',  // Hide the image on mobile devices
        },
        '&::before': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: '0',
            height: '100%',
            width: '100%',
            zIndex: -1,
            backgroundImage: `url(${Sampleplan1})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'bottom right',
            backgroundSize: '45%',
            '@media screen and (max-width: 768px)': {
                display: 'none',  // Hide the image on mobile devices
            },

        },
        /* '&::after': {
             position: 'absolute',
             content: '""',
             top: 10,
             bottom: 10,
             left: 0,
             right: 0,
             height: '100%',
             width: '100%',
             zIndex: -1,
             backgroundImage: `url(${Bannerimg})`,
             backgroundRepeat: `no-repeat`,
             backgroundPosition: 'bottom left',
             backgroundSize: '36%',
             '@media screen and (max-width: 768px)': {
                 display: 'none',  // Hide the image on mobile devices
             },
 
         }, */

        container: {
            minHeight: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            mx: '5px'
        },
        contentBox: {
            width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
            mx: 'auto',
            textAlign: 'left',
            mb: ['40px', null, null, null, null, 7],
            // px: [0, null, 5, 6, null, 8, 9],
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
    }
};
