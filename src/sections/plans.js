/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Button, Container } from 'theme-ui';
import { FaChevronRight } from 'react-icons/fa';

const cardData = [
    {
        id: 1,
        title: '2 Bedroom Bungalow',
        image: 'https://via.placeholder.com/300', // Replace with your image URLs
        description: ['Master bedroom en-suite', 'Spacious lounge', 'Kitchen Island', 'Floor area 84sqm'],
        price: 'Ksh 3,500,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-a/', // Replace with your links
    },
    {
        id: 2,
        title: '3 Bedroom Bungalow',
        image: 'https://via.placeholder.com/300',
        description: ['Spacious lounge', 'Kitchen Pantry', 'Kitchen', 'Accessible flat roof', 'floor area 99sqm'],
        price: 'Ksh 4,200,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-b/',
    },
    {
        id: 6,
        title: '3 Bedroom Bungalow',
        image: 'https://via.placeholder.com/300',
        description: ['Spacious lounge', 'Kitchen', 'Dining area', 'floor area 105sqm'],
        price: 'Ksh 4,400,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-b/',
    },
    {
        id: 4,
        title: '4 Bedroom Mansionette',
        image: 'https://via.placeholder.com/300',
        description: ['All bedrooms en-suite', 'Spacious lounge', 'Dining area', 'Kitchen pantry', 'Kitchen', 'Balcony', 'Laundry', 'Walk-in closet', 'floor area 200sqm'],
        price: 'Ksh 8,400,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-d/',
    },
    {
        id: 5,
        title: '4 Bedroom Mansionette',
        image: 'https://via.placeholder.com/300',
        description: ['Master bedroom en-suite', 'Spacious lounge', 'Dining area', 'Kitchen pantry', 'Kitchen', 'Balcony', 'Flatroof', 'Walk-in closet', 'floor area 160sqm'],
        price: 'Ksh 6,700,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-f/',
    },
    {
        id: 3,
        title: '4 Bedroom Mansionette',
        image: 'https://via.placeholder.com/300',
        description: ['All bedrooms en-suite', 'Spacious lounge', 'Dining area', 'Kitchen pantry', 'Kitchen', 'Balcony', 'Walk-in closet', 'floor area 160sqm'],
        price: 'Ksh 6,800,000',
        link: 'https://bbsltd.co.ke/sample-plans/design-e/',
    },

];

const CardSection = () => {
    return (
        <Container sx={styles.container}>
            {cardData.map((card) => (
                <Box sx={styles.card} key={card.id}>
                    <Image src={card.image} sx={styles.image} />
                    <Box sx={styles.content}>
                        <Heading as="h3" sx={styles.title}>{card.title}</Heading>
                        <ul sx={styles.description}>
                            {card.description.map((item, index) => (
                                <li key={index}>
                                    <FaChevronRight sx={styles.icon} /> {item}
                                </li>
                            ))}
                        </ul>
                        <Text sx={styles.price}>{card.price}</Text>
                        <Button as="a" href={card.link} sx={styles.button}>
                            Learn More
                        </Button>
                    </Box>
                </Box>
            ))}
        </Container>
    );
};

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
        gap: 4,
        my: 6,
    },
    card: {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        bg: 'white',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
        },
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    content: {
        padding: 3,
    },
    title: {
        fontSize: 3,
        fontWeight: 'bold',
        mb: 2,
    },
    description: {
        listStyle: 'none',
        padding: 0,
        mb: 2,
        '& li': {
            display: 'flex',
            alignItems: 'center',
            mb: 1,
        },
    },
    icon: {
        marginRight: 2,
        color: 'primary',
    },
    price: {
        fontSize: 2,
        color: 'primary',
        mb: 3,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'primary',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-block',
        padding: '10px 20px',
        borderRadius: '4px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: 'dark',
        },
    },
};

export default CardSection;
