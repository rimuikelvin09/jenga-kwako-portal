/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, Box, Image, Button } from 'theme-ui';
import Carousel from 'react-multi-carousel';
import SectionHeader from 'components/section-header';

// Import Images
import A from 'assets/Kagaa project media/1.jpg';
import B from 'assets/Kagaa project media/2.jpg';
import C from 'assets/Kagaa project media/3.jpg';
import D from 'assets/Kagaa project media/4.jpg';
import E from 'assets/Kagaa project media/5.jpg';
import F from 'assets/Kagaa project media/6.jpg';
import G from 'assets/Kagaa project media/7.jpg';
import H from 'assets/Kagaa project media/8.jpg';
import J from 'assets/Kagaa project media/10.jpg';
import K from 'assets/Kagaa project media/11.jpg';
import L from 'assets/Kagaa project media/12.jpg';
import M from 'assets/Kagaa project media/13.jpg';
import N from 'assets/Kagaa project media/14.jpg';
import O from 'assets/Kagaa project media/15.jpg';
import P from 'assets/Kagaa project media/16.jpg';
import Q from 'assets/Kagaa project media/17.jpg';
import R from 'assets/Kagaa project media/18.jpg';

// Array of images
const images = [A, B, C, D, E, F, G, H, J, K, L, M, N, O, P, Q, R];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 3,
        slidesToSlide: 1,
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Gallery = () => {
    const [mainImage, setMainImage] = useState(images[0]);

    // Handle image change
    const handleImageChange = (index) => {
        setMainImage(images[index]);
    };

    // Handle after change in carousel
    const handleAfterChange = (previousSlide, { currentSlide }) => {
        const itemsToShow = responsive.desktop.items;
        const centerIndex = Math.floor(itemsToShow / 2);

        // Calculate the index of the centered image
        const totalImages = images.length;
        const centerImageIndex = (currentSlide + centerIndex) % totalImages;

        handleImageChange(centerImageIndex);
    };

    return (
        <section sx={styles.main}>
            <SectionHeader slogan="Featured 'Jenga Kwako na CMAX'  project" title="Gallery" />
            <Box sx={styles.gallery}>
                {typeof window !== 'undefined' && window.innerWidth > 639 && (
                    <Box sx={styles.mainImageContainer}>
                        <Image src={mainImage} sx={styles.mainImage} />
                    </Box>
                )}
                <Box sx={styles.carouselContainer}>
                    <Carousel
                        responsive={responsive}
                        arrows={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        infinite={true}
                        afterChange={handleAfterChange}
                    >
                        {images.map((image, index) => (
                            <Box
                                key={index}
                                sx={styles.carouselItem}
                                onClick={() => handleImageChange(index)}
                            >
                                <Image src={image} sx={styles.carouselImage} />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Box>
        </section>
    );
};


const styles = {
    main: {
        mt: '30px',
    },
    gallery: {
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
    },
    mainImageContainer: {
        mb: [3, null, 4],
    },
    mainImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '500px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    carouselContainer: {
        mt: 2,
    },
    carouselItem: {
        cursor: 'pointer',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        mx: 1,
    },
    carouselImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
};

export default Gallery;
