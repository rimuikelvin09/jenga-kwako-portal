/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text, Link } from 'theme-ui';
import SectionHeader from 'components/section-header';

const requirementsData = [
    {
        id: 1,
        title: 'Title Deed',
        description: [
            'The title deed must be under the name of the person taking the loan.',
            'It should be free of encumbrances.',
            'It must be the land on which the client wants to build their house.',
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
                                <Link href="/downloads/requirements-checklist.pdf" download>Requirements Checklist</Link>
                            </li>
                            <li>
                                <Link href="/downloads/amortization-table.pdf" download>Amortization Table</Link>
                            </li>
                            <li>
                                <Link href="/downloads/jenga-kwako-tc.pdf" download>Jenga Kwako T & C's</Link>
                            </li>
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
};

