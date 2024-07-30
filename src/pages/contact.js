/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Emailform from '../components/emailform';
import FAQComponent from '../components/faq';
import TwitterFeed from 'components/socialfeed/twitterfeed';
import FacebookFeed from 'components/socialfeed/fbfeed';
//import Maps from '../components/maps';

export default function AboutPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Contact Us | Jenga Kwako" />

                    <section sx={styles.section}>
                        <div sx={styles.container}>
                            <div sx={styles.leftColumn}>
                                <Emailform />
                            </div>
                            <div sx={styles.rightColumn}>
                                <FAQComponent />
                            </div>
                        </div>
                    </section>
                    {/*<Maps />**/}
                    <section sx={styles.feedsSection}>
                        <div sx={styles.feedsContainer}>
                            <div sx={styles.feedColumn}>
                                <TwitterFeed />
                            </div>
                            <div sx={styles.feedColumn}>
                                <FacebookFeed />
                            </div>
                        </div>
                    </section>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    section: {

        padding: '20px',
    },
    container: {
        mt: '100px',
        display: 'flex',
        flexDirection: ['column', null, 'row'],
    },
    leftColumn: {
        flex: [1, null, 2],
        paddingRight: [0, null, '20px'],
        paddingBottom: ['20px', null, 0],
    },
    rightColumn: {
        flex: [1, null, 1],
    },
    feedsSection: {
        mt: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: ['column', null, 'row'],
        gap: 0, // No gap between columns
    },
    feedsContainer: {
        display: 'flex',
        width: '100%',
        maxWidth: '1200px', // Adjust as needed
        gap: 0, // No gap between columns
    },
    feedColumn: {
        flex: 1,
        padding: '10px', // Adjust padding as needed
        boxSizing: 'border-box',
    },
};
