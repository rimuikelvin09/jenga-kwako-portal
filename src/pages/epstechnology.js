import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Gallery from 'components/gallery';

import Epspanel from '../sections/cmax-intro';

import Epsbg from 'assets/cmaxbanner.jpg';

const words = ['THERMAL INSULATION', 'SOUND PROOFING', 'GREEN TECHNOLOGY'];

const SliderEffect = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getPreviousIndex = () => (currentIndex === 0 ? words.length - 1 : currentIndex - 1);
    const getNextIndex = () => (currentIndex + 1) % words.length;

    return (
        <Box sx={styles.sliderContainer}>
            <Text sx={{ ...styles.text, ...styles.textTop }}>{words[getPreviousIndex()]}</Text>
            <Text sx={{ ...styles.text, ...styles.textMiddle }}>{words[currentIndex]}</Text>
            <Text sx={{ ...styles.text, ...styles.textBottom }}>{words[getNextIndex()]}</Text>
        </Box>
    );
};

export default function EpsTechnologyPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="EPS technology | Jenga Kwako" />

                    <section sx={styles.banner} id="home">
                        <Container sx={styles.banner.container}>
                            <Box sx={styles.banner.contentBox}>
                                <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
                                    THE FUTURE OF CONSTRUCTION

                                </Heading>
                                <Text sx={styles.redText}>
                                    <SliderEffect />
                                </Text>
                                <Text as="p" variant="heroSecondary" sx={styles.titleContent}>
                                    The C-MAX® advanced building system is an innovative construction system with a history of over 40 years of remarkable success worldwide.
                                </Text>
                            </Box>
                        </Container>
                    </section>

                    <Epspanel />
                    <Gallery />

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
            height: 'auto',
        },
        '&::before': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: -1,
            backgroundImage: `url(${Epsbg})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: ' left',
            backgroundSize: '47%',
            '@media screen and (max-width: 768px)': {
                display: 'none',
            },
        },


        container: {
            minHeight: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            mx: '5px',
            left: 10,
            '@media screen and (max-width: 768px)': {
                left: '-50px',
                width: '100vw',

            },
        },
        contentBox: {
            width: ['80%', '70%', '400px', null, '40%', '45%', '50%', '45%'],
            ml: 'auto',
            textAlign: 'left',
            mb: ['40px', null, null, null, null, 7],
        },
    },
    redText: {
        color: 'primary',
    },
    titleHeading: {
        width: '100%',
        padding: 0,
        margin: 0,
    },
    titleContent: {
        mt: '10px',
        px: [0, null, 4, 6, null, 8, 0],
    },
    sliderContainer: {
        mt: '30px',
        mb: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        height: '100px',
        position: 'relative',
        overflow: 'hidden',
    },
    text: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'primary',
        position: 'absolute',
        transition: ' opacity 1s ease-in-out',
        textAlign: 'left',
        '@media screen and (max-width: 768px)': {
            fontSize: '20px',
        },
    },
    textTop: {
        top: '10%',
        opacity: 0.15,
        transform: 'translateY(-25px)',
    },
    textMiddle: {
        top: '40%',
        transform: 'translateY(-50%)',
        opacity: 1,
    },
    textBottom: {
        top: '60%',
        opacity: 0.15,
        transform: 'translateY(-10px)',
    },
};
