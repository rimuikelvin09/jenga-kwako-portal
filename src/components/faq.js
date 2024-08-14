/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Heading, Text, Container } from 'theme-ui';

const faqData = {
    title: "FAQ's (Frequently Asked Questions)",
    content: [
        {
            id: 1,
            question: 'What is Jenga Kwako?',
            answer:
                'Jenga Kwako is a comprehensive solution for home ownership, offering services ranging from architectural design to construction and affordable home loans.',
        },
        {
            id: 2,
            question: 'How do I apply for a home loan?',
            answer:
                'You can apply for a home loan by contacting us directly through our website or visiting our offices. We offer KMRC-backed mortgages with affordable interest rates.',
        },
        {
            id: 4,
            question: 'How do i know whether I am eligibe for your financing option ?',
            answer:
                'You can find out by filling in this evaluation form and one of our sales officers will be in touch with the result. Financing option evaluation form',
        },
        {
            id: 5,
            question: 'Do you take care of all necessary inspections and permits?',
            answer:
                'Yes we do. With our extensive network of contacts and experience, we are able to facilitate approvals and ensure that each project is in compliance with all government requirements.',
        },
        {
            id: 6,
            question: 'Should i have a design made to get your services?',
            answer:
                'No you don’t have to. we are proud to have a professional architect on our in-house team who can deliver top-quality designs at nearly half the price. We streamline the process by getting your architectural drawings stamped and approved without any extra hassle, making the construction process as smooth and efficient as possible for our clients',
        },
        {
            id: 7,
            question: 'What is the process for completing the job?',
            answer:
                'The process followed for a project to be complete is; Initiation, Planning, Execution, Monitoring and Completion.',
        },
        {
            id: 8,
            question: 'How would i know the cost of constructing my dream home ?',
            answer:
                'The cost of your project will vary depending on its size and complexity. To help you navigate the hard costs, we have a professional quantity surveyor on our in-house team who will provide guidance and support throughout the project.',
        },
    ],
};

const FAQComponent = () => {
    const [activeId, setActiveId] = useState(faqData.content[0].id);

    const handleToggle = (id) => {
        setActiveId((prevActiveId) => (prevActiveId === id ? null : id));
    };

    return (

        <Box sx={styles.faqSection}>
            <Box sx={styles.faqContent}>
                <Heading as="h2" sx={styles.title}>
                    {faqData.title}
                </Heading>

                {faqData.content.map((item) => (
                    <Box key={item.id} sx={styles.faqItem}>
                        <Box sx={styles.question} onClick={() => handleToggle(item.id)}>
                            {activeId !== item.id && <span sx={styles.plusIcon}>+</span>}
                            {item.question}

                        </Box>
                        <Box
                            sx={{
                                ...styles.answer,
                                maxHeight: activeId === item.id ? '200px' : '0',
                                opacity: activeId === item.id ? 1 : 0,
                                transition: 'max-height 0.3s ease, opacity 0.3s ease',
                            }}
                        >
                            <Text>{item.answer}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>

    );
};

const styles = {
    faqSection: {
        p: 4,
        py: ['60px', null, 8],
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
    },
    title: {
        fontSize: 4,
        fontWeight: 'bold',
        mb: 4,
        color: 'secondary',
    },
    faqContent: {
        display: 'flex',
        flexDirection: 'column',
        width: ['100%', null, '540px', '600px'],
        mx: 'auto',
        mt: -1,
        px: [3, 5],
    },
    faqItem: {
        mb: 3,
        borderBottom: '1px solid #ddd',
        pb: 2,
    },
    question: {
        fontSize: 2,
        fontWeight: 'bold',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
            color: 'primary',
        },
        '&:after': {
            content: '"+"',
            position: 'absolute',
            right: 0,
            color: 'white',
        },
    },
    plusIcon: {
        mr: 2,
        color: 'primary',
    },
    answer: {
        mt: 2,
        fontSize: 1,
        color: 'text',
        borderTop: '1px solid #ddd',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease, opacity 0.5s ease',
    },
};

export default FAQComponent;
