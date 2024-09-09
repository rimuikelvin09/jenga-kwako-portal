/** @jsx jsx */
import { jsx, Box, Image, Heading, Container } from 'theme-ui';
import { FaChevronRight } from 'react-icons/fa';

import TwoBedB from '../assets/plans/2bed.jpg';
import ThreeBedF from '../assets/plans/3bedflat.jpg';
import ThreeBedB from '../assets/plans/3bedpitched.jpg';
import FourBedF from '../assets/plans/4bedflat.jpg';
import FourBedF2 from '../assets/plans/4bedflat2.jpg';
import FourBedP from '../assets/plans/4bedpitched.jpg';

const cardData = [
    {
        id: 1,
        title: '2 Bedroom Bungalow',
        image: TwoBedB,
        description: [
            'Master bedroom en-suite',
            'Spacious lounge',
            'Kitchen Island',
            'Floor area 84sqm',
        ],
        price: 'Ksh 3,500,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-a/', // Replace with your links
    },
    {
        id: 2,
        title: '3 Bedroom Bungalow',
        image: ThreeBedF,
        description: [
            'Spacious lounge',
            'Kitchen Pantry',
            'Kitchen',
            'Accessible flat roof',
            'floor area 99sqm',
        ],
        price: 'Ksh 4,200,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-b/',
    },
    {
        id: 6,
        title: '3 Bedroom Bungalow',
        image: ThreeBedB,
        description: [
            'Spacious lounge',
            'Kitchen',
            'Dining area',
            'floor area 105sqm',
        ],
        price: 'Ksh 4,400,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-b/',
    },
    {
        id: 4,
        title: '4 Bedroom Mansionette',
        image: FourBedP,
        description: [
            'All bedrooms en-suite',
            'Spacious lounge',
            'Dining area',
            'Kitchen pantry',
            'Kitchen',
            'Balcony',
            'Laundry',
            'Walk-in closet',
            'floor area 200sqm',
        ],
        price: 'Ksh 8,400,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-d/',
    },
    {
        id: 5,
        title: '4 Bedroom Mansionette',
        image: FourBedF,
        description: [
            'Master bedroom en-suite',
            'Spacious lounge',
            'Dining area',
            'Kitchen pantry',
            'Kitchen',
            'Balcony',
            'Flatroof',
            'Walk-in closet',
            'floor area 160sqm',
        ],
        price: 'Ksh 6,700,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-e/',
    },
    {
        id: 3,
        title: '4 Bedroom Mansionette',
        image: FourBedF2,
        description: [
            'All bedrooms en-suite',
            'Spacious lounge',
            'Dining area',
            'Kitchen pantry',
            'Kitchen',
            'Balcony',
            'Walk-in closet',
            'floor area 160sqm',
        ],
        price: 'Ksh 6,800,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-f/',
    },
];

const CardSection = () => {
    return (
        <Container sx={styles.container}>
            {cardData.map((card) => (
                <Box
                    sx={styles.cardWrapper}
                    key={card.id}
                    as="a"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box sx={styles.card}>
                        <Image src={card.image} sx={styles.image} />
                        <Box sx={styles.content}>
                            <ul sx={styles.description}>
                                {card.description.map((item, index) => (
                                    <li key={index}>
                                        <FaChevronRight sx={styles.icon} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                    <Heading as="h3" sx={styles.title}>
                        {card.title}
                    </Heading>
                </Box>
            ))}
        </Container>
    );
};

const styles = {
    container: {
        pt: '50px',
        pb: '50px',
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
        gap: 4,
        my: 6,
    },
    cardWrapper: {
        textDecoration: 'none',
        color: 'inherit',
        mb: 3, // Add margin-bottom to separate the title from the next card
    },
    card: {
        position: 'relative',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        bg: 'white',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '@media (hover: hover)': {
            // Only apply hover effects on devices that support hover
            '&:hover': {
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                transform: 'scale(1.02)',
                '& > div': {
                    opacity: 1, // Show description on hover
                    top: 0,
                    bottom: 0,
                },
            },
        },
    },
    image: {
        width: '100%',
        height: '350px', // Set a fixed height for the images
        objectFit: 'cover', // Ensure the image fits the container without distortion
        transition: 'transform 0.3s ease, filter 0.3s ease',
    },
    content: {
        padding: 3,
        position: 'absolute',
        top: '100%', // Start from below the card
        left: '0',
        right: '0',
        bg: 'rgba(20, 48, 86, 0.8)', // Background color for the overlay
        opacity: 0, // Hide content initially
        transition: 'opacity 0.3s ease, top 0.3s ease, bottom 0.3s ease',
        '@media screen and (max-width: 768px)': {
            // Make description always visible on mobile
            opacity: 1,
            position: 'static',
        },
    },
    title: {
        fontSize: 3,
        fontWeight: 'bold',
        mt: 2,
        textAlign: 'center',
        color: 'primary',
    },
    description: {
        listStyle: 'none',
        padding: 0,
        mb: 2,
        color: 'white',
        '& li': {
            display: 'flex',
            alignItems: 'center',
            mb: 1,
        },
    },
    icon: {
        marginRight: 2,
        color: 'white',
    },
};

export default CardSection;
