/** @jsx jsx */
import { jsx, Container, Box, Image, Heading, Text } from 'theme-ui';

import Carousel from 'react-multi-carousel';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';
import { useState } from 'react';
import SectionHeader from 'components/section-header';
import TextFeature from 'components/text-feature';

//import FeatureThumb1 from 'assets/core-feature.jpg'; // First image
import Expo24 from 'assets/expo24.jpg'; // Second image

const data = [
    {
        id: 1,
        videoId: '0S4OnM8M0KQ',
        videoType: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/0S4OnM8M0KQ/hqdefault.jpg',
        subTitle: 'Land & Property Diary, Citizen TV',
        title: 'Naomi Mbuvi',
        description:
            'Our project in Kagaa was featured because we utilized a unique technology and achieved an excellent end product. Watch this and find out more.',
    },
    {
        id: 2,
        imgSrc: Expo24,
        subTitle: 'KICC, Nairobi Kenya',
        title: 'Build Expo 2024',
        description:
            'We were given the chance to showcase our services and products at the 2024 Build Expo.',
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1310 },
        items: 1,
    },
    laptop: {
        breakpoint: { max: 1310, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
    },
};

export default function Highlights() {
    const [videoOpen, setVideoOpen] = useState(false);
    const [videoId, setVideoId] = useState('');
    const [videoType, setVideoType] = useState('');

    const handleVideoOpen = (videoId, videoType) => {
        setVideoId(videoId);
        setVideoType(videoType);
        setVideoOpen(true);
    };

    return (
        <section id="highlights" sx={{ variant: 'section.highlights' }}>
            {/**<Container css={{ textAlign: 'center' }}>
                <SectionHeader slogan="Highlights" title="Some of the company highlights" />
            </Container> */}

            <Container>
                <Box sx={styles.carouselWrapper}>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={true}
                        autoPlaySpeed={10000}
                        centerMode={false}
                        className=""
                        containerClass="carousel-container"
                        dotListClass=""
                        draggable={true}
                        focusOnSelect={false}
                        infinite={true}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderDotsOutside={false}
                        responsive={responsive}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        autoPlay={true}
                    >
                        {data.map((item) => (
                            <Box key={item.id} sx={styles.containerBox}>
                                <Box sx={styles.thumbnailWrapper}>
                                    {item.videoId ? (
                                        <Box
                                            sx={styles.thumbnailWrapper}
                                            onClick={() =>
                                                handleVideoOpen(item.videoId, item.videoType)
                                            }
                                        >
                                            <Image src={item.thumbnail} sx={styles.thumbnail} />
                                            <Box sx={styles.playButton}>
                                                <IoIosPlay size="30px" color="white" />
                                            </Box>
                                        </Box>
                                    ) : (
                                        <Image src={item.imgSrc} alt={`${item.title} Thumbnail`} />
                                    )}
                                </Box>
                                {/** <Box sx={styles.contentBox}>
                                    <Heading as="h3" sx={styles.heading}>
                                        {item.title}
                                    </Heading>
                                    <Text sx={styles.subTitle}>{item.subTitle}</Text>
                                    <Text sx={styles.description}>{item.description}</Text>
                                </Box>*/}
                                <Box sx={styles.contentBox}>
                                    <TextFeature
                                        subTitle={item.subTitle}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Carousel>
                </Box>
                {videoType === 'youtube' && (
                    <ModalVideo
                        channel="youtube"
                        isOpen={videoOpen}
                        videoId={videoId}
                        onClose={() => setVideoOpen(false)}
                    />
                )}
            </Container>
        </section>
    );
}

const styles = {
    carouselWrapper: {
        '.carousel-container': {
            px: [3, 4],
            py: [4, 5],
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: 'white',
        },
    },
    containerBox: {
        px: [4, 5], // Adjust padding for spacing
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: ['wrap', null, null, 'nowrap'],
        flexDirection: ['column', null, 'row'],
    },
    contentBox: {
        mt: 5,
        flexShrink: 0,
        px: [4, 5], // Increased padding for spacing
        textAlign: ['left', null, null, 'left'],
        width: ['100%', '80%', '60%'],
    },
    thumbnailWrapper: {
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbnail: {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '8px',
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'rgba(46, 134, 193, 0.5)', // transparent blue
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        animation: 'pulse 2s infinite', // add pulse effect
        '@keyframes pulse': {
            '0%': {
                boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.7)', // red pulse start
            },
            '70%': {
                boxShadow: '0 0 0 20px rgba(255, 0, 0, 0)', // red pulse end
            },
            '100%': {
                boxShadow: '0 0 0 0 rgba(255, 0, 0, 0)', // red pulse reset
            },
        },
        '& svg': {
            color: 'white', // white play icon
        },
    },
};
