/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text, Link } from 'theme-ui';
import SectionHeader from 'components/section-header';
import { FaFileDownload } from 'react-icons/fa';

const requirementsData = [
    {
        id: 1,
        title: 'Title Deed',
        description: [
            'The title deed must be under the name of the person taking the loan.',
            'It should be free of encumbrances.',
            'It must be the land on which the client wants to build their house.',
            'If you do not have land yet, there is a buy and build option under this product.',
        ],
    },
    {
        id: 2,
        title: 'Source of Income',
        description: [
            'If you are employed, a payslip is required.',
            'If you own a business, income statements from either bank or Mpesa are required.',
            'Both payslip and business income statements can be used to complement each other.',
            'If applying as a couple, income sources of both parties can be used.',
        ],
    },
];

export default function Requirements() {
    return (
        <section>
            <Container sx={styles.section}>
                <Grid sx={styles.grid}>
                    <Box sx={styles.leftColumn}>
                        <SectionHeader slogan="Primary Requirements" title="This is what you need" />
                        {requirementsData.map((item) => (
                            <Box key={item.id} sx={styles.requirementItem}>
                                <Heading as="h3" sx={styles.requirementTitle}>
                                    {item.title}
                                </Heading>
                                <ul>
                                    {item.description.map((point, index) => (
                                        <li key={index} sx={styles.requirementText}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={styles.rightColumn}>
                        <Heading as="h3" sx={styles.downloadsTitle}>
                            Downloadables
                        </Heading>
                        <ul sx={styles.downloadList}>
                            <li>
                                <a
                                    sx={styles.navLink}
                                    href="/downloadables/JK-Requirements-Checklist.pdf"
                                    download
                                >
                                    <FaFileDownload />.
                                    Requirements Checklist
                                </a>

                            </li>
                            <li>
                                <a
                                    sx={styles.navLink}
                                    href="/downloadables/JK-ammortization-table.pdf"
                                    download
                                >
                                    <FaFileDownload />.
                                    Amortization Table
                                </a>
                            </li>
                            {/*<li>
                                <a
                                    sx={styles.navLink}
                                    href="/downloadables/JK-terms.pdf"
                                    download
                                >
                                    <FaFileDownload />.
                                    Jenga Kwako T & C's
                                </a>
                            </li>
                            <li>
                                <a
                                    sx={styles.navLink}
                                    href="/downloadables/KMRC-Annual-Report-2023.pdf"
                                    download
                                >
                                    <FaFileDownload />.
                                    KMRC annual report 2023
                                </a>
                            </li>*/}
                        </ul>
                    </Box>
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    section: {
        padding: '20px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        gap: '20px',
    },
    leftColumn: {
        backgroundColor: 'muted',
        padding: '20px',
        borderRadius: '8px',
    },
    requirementItem: {
        marginBottom: '20px',
    },
    requirementTitle: {
        fontSize: '18px',
        color: 'primary',
        marginBottom: '10px',
    },
    requirementText: {
        fontSize: '16px',
        color: 'text',
        marginBottom: '5px',
        listStyleType: 'disc',
        marginLeft: '20px',
    },
    rightColumn: {
        backgroundColor: 'muted',
        padding: '20px',
        borderRadius: '8px',
    },
    downloadsTitle: {
        fontSize: '18px',
        color: 'primary',
        marginBottom: '10px',
    },
    downloadList: {
        listStyleType: 'none',
        paddingLeft: '0',
        '& li': {
            marginBottom: '10px',
        },
    },
    navLink: {
        textDecoration: 'none',
        color: 'text',
        fontSize: 2,
        fontWeight: 'heading',
        px: 5,
        cursor: 'pointer',
        lineHeight: '1.2',
        transition: 'all 0.15s',
        '&:hover': {
            color: 'primary',
        },
        '&.active': {
            color: 'primary',
        },
    },
};

