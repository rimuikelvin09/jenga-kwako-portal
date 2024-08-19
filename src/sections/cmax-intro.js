import React, { useRef, useState } from 'react';
/** @jsx jsx */
import {
    jsx,
    Container,
    Box,
    Grid,
    Text,
    Heading,
    Button,
    Image,
} from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';
import {
    FaTemperatureLow,
    FaDollarSign,
    FaVolumeUp,
    FaShieldAlt,
    FaLeaf,
    FaClock,
} from 'react-icons/fa';
//import Emailform from '../components/emailform';

import DescriptionThumb from 'assets/epsintrothumb.png';
import shapePattern from 'assets/shape-pattern1.png';
import CommercialEPS from 'assets/commercial.jpg';
import ResidentialEPS from 'assets/residential.jpg';
import IndustrialEPS from 'assets/industrial.jpg';
import InstitutionEPS from 'assets/institutions.jpg';


import SectionHeader from 'components/section-header';


const data = {
    subTitle: 'What is EPS ?',
    title: 'Expanded Polystyrene Sinterd',
    features: [
        {
            id: 1,
            text:
                'This is your go-to material for insulating buildings while keeping things light and easy. Made from tiny, lightweight polystyrene spheres that fuse together, EPS helps keep homes cool under the hot sun and warm during those chilly evenings. It\'s like having a cozy sweater for your house—keeping the temperatures just right without adding extra weight to your structure.',
        },

    ],
};

const advantagesData = [
    {
        id: 1,
        title: 'Cost Effective',
        icon: <FaDollarSign />,
        description: [
            'Compared to traditional building products, C-MAX® EPS panels achieve far better results, at considerably reduced cost. Further, the reduced construction period and reduced manpower leads to additional savings and better performances.'
        ],
    },
    {
        id: 2,
        title: 'Thermal Insulation',
        icon: <FaTemperatureLow />,
        description: [
            'C-MAX® constructions perform brilliantly in terms of insulation functions, with the thickness and density of the EPS panel being customized to deliver specific thermal insulation requirements, without taking up unnecessary space nor additional costs. C-MAX® buildings can save over 80% of air-conditioning or heating expenses',
        ],
    },
    {
        id: 3,
        title: 'Sound Proofing',
        icon: <FaVolumeUp />,
        description: [
            'C-MAX® EPS panels offer the highest degree of soundproofing according to international acoustic legislation. Apartment and hotel rooms build using C-MAX® EPS products are very soundproof. This represents one the most important advantages of our building system.'
        ],
    },

    {
        id: 4,
        title: 'Earthquake Resistant',
        icon: <FaShieldAlt />,
        description: [
            'Structures built using C-MAX® EPS Panels technology can withstand, completely undamaged, significant seismic activity. Buildings made using C-MAX® EPS panels are lightweight and hence have a low seismic mass but are at the same time rigid enough due to the presence of two sheets of reinforced plaster that interact to create a monolithic ‘shell’ of the whole structure which makes the building super strong.'
        ],
    },
    {
        id: 5,
        title: 'Sustainability & Energy Efficiency',
        icon: <FaLeaf />,
        description: [
            'The C-MAX® EPS building system helps to achieve high levels of energy efficiency which conform to energy efficiency regulations. It provides significant improvements in indoor thermal comfort through the reduction of energy consumption. Analysis shows that buildings built using M2 technology demonstrate a reduction of 60% in carbon emissions compared to traditional buildings. C-MAX® EPS products are non-toxic and recyclable.'
        ],
    },
    {
        id: 6,
        title: 'Rapid Installation',
        icon: <FaClock />,
        description: [
            'Buildings constructed using the C-MAX® system show a marked reduction in construction time, estimated at approximately 50%, compared to traditional building methods. Operations on construction sites are stress-free with remarkable reduction in operation time.'
        ],
    }
];

const applicationData = [
    {
        id: 1,
        title: 'Residential Buildings',
        image: ResidentialEPS,
        description: [
            'These panels are ideal for owner-occupied homes, especially in areas with extreme weather. They’re perfect for families with lively children who want to enjoy some peace of mind, whether the kids are playing outside or in their rooms.',
        ],
    },
    {
        id: 2,
        title: 'Commercial Buildings',
        image: CommercialEPS,
        description: [
            'These panels are perfect for commercial buildings where speed and cost-efficiency are key. Approved by relevant authorities and proven in numerous commercial projects across Kenya, this construction technology ensures rapid assembly and significant savings without compromising on quality',
        ],
    },
    {
        id: 3,
        title: 'Institutions',
        image: InstitutionEPS,
        description: [
            'Ideal for schools, hospitals, and conference centers, e.t.c, these panels are designed to create quiet, focused environments. Whether you\'re building classrooms, theaters, or conference rooms, their exceptional soundproofing capabilities minimize distractions and enhance learning and communication, ensuring a peaceful and productive space for everyone.'
        ],
    },
    {
        id: 4,
        title: 'Industries',
        image: IndustrialEPS,
        description: [
            'Ideal for schools, hospitals, and conference centers, e.t.c, these panels are designed to create quiet, focused environments. Whether you\'re building classrooms, theaters, or conference rooms, their exceptional soundproofing capabilities minimize distractions and enhance learning and communication, ensuring a peaceful and productive space for everyone.'
        ],
    },
];

export default function Epspanels() {
    // modal popup video handler
    const [videoOpen, setVideoOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setVideoOpen(true);
    };
    return (
        <>
            <section id='about' sx={{ variant: 'section.about' }}>
                <Container sx={styles.containerBox}>
                    <Box sx={styles.thumbnail}>
                        <Image src={DescriptionThumb} alt="Thumbnail" />
                        <Button
                            sx={styles.videoBtn}
                            onClick={handleClick}
                            aria-label="Play Button"
                        >
                            <span>
                                <IoIosPlay />
                            </span>
                        </Button>

                        <Box sx={styles.shapeBox}>
                            <Image src={shapePattern} alt="Shape" />
                        </Box>
                    </Box>

                    <Box sx={styles.contentBox}>
                        <TextFeature subTitle={data.subTitle} title={data.title} />
                        <Grid sx={styles.grid1}>
                            {data.features.map((item) => (
                                <Box sx={styles.descriptionCard} key={item.id}>
                                    {/**<Image src={item.imgSrc} alt={item.altText} sx={styles.icon} />*/}

                                    <Box sx={styles.wrapper}>
                                        {/** <Heading sx={styles.wrapper.title}>{item.title}</Heading>*/}
                                        <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                    </Box>
                </Container>
                <ModalVideo
                    channel="youtube"
                    isOpen={videoOpen}
                    videoId="0S4OnM8M0KQ"
                    onClose={() => setVideoOpen(false)}
                />

            </section>
            <section>
                <Container sx={styles.section}>
                    <SectionHeader slogan="WHY EPS PANELS?" title="ADVANTAGES" />
                    <Grid sx={styles.advantagesGrid}>
                        {advantagesData.map((item) => (
                            <Box key={item.id} sx={styles.card}>
                                {/* Placeholder for icon */}
                                <Box sx={styles.icon}>{item.icon}</Box>
                                <Heading as="h3" sx={styles.cardTitle}>
                                    {item.title}
                                </Heading>
                                <Text sx={styles.cardText}>
                                    {item.description}
                                </Text>
                            </Box>
                        ))}
                    </Grid>
                </Container>

                <Container sx={styles.section}>
                    <SectionHeader slogan="WHAT CAN YOU BUILD?" title="APPLICATIONS" />
                    <Grid sx={styles.applicationGrid}>
                        {applicationData.map((item) => (
                            <Box key={item.id} sx={styles.card}>
                                <Image src={item.image} alt={item.title} sx={styles.cardImage} />
                                <Heading as="h3" sx={styles.cardTitle}>
                                    {item.title}
                                </Heading>
                                <Text sx={styles.cardText}>
                                    {item.description}
                                </Text>
                            </Box>
                        ))}
                    </Grid>
                </Container>
            </section>
        </>
    );
}

const playPulse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
    coreFeature: {
        py: [0, null, null, 2, null, 7],
        position: 'relative',
    },
    containerBox: {
        display: 'flex',
        alignItems: ['flex-start', null, null, 'center'],
        justifyContent: ['flex-start', null, null, 'space-between'],
        flexDirection: ['column', null, null, 'row'],
        pb: [0, null, null, null, null, 7],
    },
    thumbnail: {
        mr: ['auto', null, null, 6, 60, 85],
        order: [2, null, null, 0],
        ml: ['auto', null, null, 0],
        display: 'inline-flex',
        position: 'relative',
        '> img': {
            position: 'relative',
            zIndex: 1,
            height: [310, 'auto'],
        },
    },
    shapeBox: {
        position: 'absolute',
        bottom: -68,
        left: -160,
        zIndex: -1,
        display: ['none', null, null, null, null, 'inline-block'],
    },
    videoBtn: {
        zIndex: 2,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: ['60px', null, '80px', null, '100px'],
        height: ['60px', null, '80px', null, '100px'],
        p: '0px !important',
        backgroundColor: 'transparent',
        '&::before': {
            position: 'absolute',
            content: '""',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            display: 'block',
            width: ['60px', null, '80px', null, '100px'],
            height: ['60px', null, '80px', null, '100px'],
            backgroundColor: 'primary',
            borderRadius: '50%',
            animation: `${playPulse} 1.5s ease-out infinite`,
            opacity: 0.5,
        },
        '> span': {
            backgroundColor: 'rgba(255,255,255,0.5)',
            width: 'inherit',
            height: 'inherit',
            textAlign: 'center',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.5s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
        },
        svg: {
            fontSize: [40, null, 48, null, 62],
        },
    },
    contentBox: {
        width: ['100%', null, null, 315, 390, 450, null, 500],
        flexShrink: 0,
        mb: [7, null, 60, 0],
        textAlign: ['center', null, null, 'left'],
    },
    grid1: {
        pr: [2, 0, null, null, 6, '70px'],
        pl: [2, 0],
        pt: [2, null, null, null, 3],
        mx: 'auto',
        width: ['100%', 370, 420, '100%'],
        gridGap: ['35px 0', null, null, null, '50px 0'],
        gridTemplateColumns: ['repeat(1,1fr)'],
    },
    descriptionCard: {
        display: 'flex',
        alignItems: 'flex-start',
        transition: 'all 0.3s',
    },

    icon: {
        width: ['45px', null, null, null, '55px'],
        height: 'auto',
        flexShrink: 0,
        mr: [3, null, null, null, 4],
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        mt: '-5px',
        title: {
            fontSize: 3,
            color: 'heading_secondary',
            lineHeight: 1.4,
            fontWeight: 700,
            mb: [2, null, 3, 2, 3],
        },

        subTitle: {
            fontSize: [1, null, null, '14px', 1],
            fontWeight: 400,
            lineHeight: 1.9,
        },
    },
    videoWrapper: {
        maxWidth: '100%',
        position: 'relative',
        width: '900px',
        '&:before': {
            content: '""',
            display: 'block',
            paddingTop: '56.25%',
        },
        iframe: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
        },
    },

    //section 2 styling
    section: {
        py: [4, null, 5],
    },
    advantagesGrid: {
        display: 'grid',
        gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'],
        gap: '20px',
    },
    applicationGrid: {
        display: 'grid',
        gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)'],
        gap: '20px',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.1)',
        padding: ['15px', null, '20px'],
        textAlign: 'left',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
        },
    },
    icon: {
        fontSize: ['30px', null, '50px'],
        color: 'secondary',
        mb: '15px',
    },
    cardTitle: {
        fontSize: ['16px', null, '18px'],
        color: 'primary',
        mb: '10px',
    },
    cardText: {
        fontSize: ['14px', null, '16px'],
        color: 'text',
    },
    cardImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0',
        mb: '15px',
    },
}
