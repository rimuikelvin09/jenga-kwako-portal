// pages/clientarea.js

import React, { useState, useEffect } from 'react';

/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ClientSideMenu from '../components/clientsidemenu'; // Updated import

import KeyFeature from '../sections/key-feature';
import Calculator from '../sections/ammortization';
import Requirements from '../sections/requirements';
import Form from '../sections/application-form';

import Clientbg from 'assets/clientbanner.png';

const words = ['Quality', 'Affordable', 'Reliable'];

const Typewriter = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            let updatedText = displayedText;

            if (!isDeleting) {
                // Typing effect
                updatedText = currentWord.substring(0, displayedText.length + 1);
            } else {
                // Deleting effect
                updatedText = displayedText.substring(0, displayedText.length - 1);
            }

            setDisplayedText(updatedText);

            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        };

        const typingSpeed = isDeleting ? 50 : 150;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentWordIndex]);

    return (
        <span className="typewriter">
            {displayedText}
            <span className="textWrapper"></span>
        </span>
    );
};

export default function ClientAreaPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Client Area | Jenga Kwako" />

                    <section sx={styles.banner} id="home">
                        <Container sx={styles.banner.container}>
                            <Box sx={styles.banner.contentBox}>
                                <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
                                    Our Promise Is
                                    <Text sx={styles.redText}>
                                        💯 <Typewriter />
                                    </Text>
                                    Construction Services
                                </Heading>
                                <Text as="p" variant="heroSecondary" sx={styles.titleContent}>
                                    We are dedicated to turning your home-ownership dreams into reality with our comprehensive A-Z building solutions.
                                    Together with KMRC, who provide affordable home loans, we guide Kenyans from renting to building their dream homes.
                                </Text>
                            </Box>
                        </Container>
                    </section>

                    <KeyFeature />

                    <Box as="section" sx={styles.sectionWithMenu}>
                        {/**  <Box sx={styles.sideMenuContainer}>
                            <ClientSideMenu />
                        </Box> */}
                        <Box sx={styles.mainContent}>
                            {/** <Requirements />                           
                            <Form />*/}
                            <Calculator />
                        </Box>
                    </Box>
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
            backgroundImage: `url(${Clientbg})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'bottom right',
            backgroundSize: '40%',
            '@media screen and (max-width: 768px)': {
                display: 'none',
            },
        },
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
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'bottom left',
            backgroundSize: '36%',
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
        },
        contentBox: {
            width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
            mx: 'auto',
            textAlign: 'left',
            mb: ['40px', null, null, null, null, 7],
        },
    },
    redText: {
        color: 'primary',
    },
    titleHeading: {
        padding: 0,
        margin: 0,
    },
    titleContent: {
        mt: '10px',
        px: [0, null, 4, 6, null, 8, 0],
    },

}