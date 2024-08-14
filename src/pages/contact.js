/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Emailform from '../components/emailform';
import FAQComponent from '../components/faq';
//import TwitterFeed from 'components/socialfeed/twitterfeed';
import FacebookFeed from 'components/socialfeed/fbfeed';

export default function ContactPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Contact Us | Jenga Kwako" />

                    <section sx={styles.section}>
                        <div sx={styles.container}>
                            <div sx={styles.leftColumn}>
                                <FAQComponent />
                                <Emailform />
                            </div>
                            <div sx={styles.rightColumn}>
                                {/** <TwitterFeed />*/}
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
        gap: '20px', // Space between left and right columns on larger screens
    },
    leftColumn: {
        flex: [1, null, 2],
        display: 'flex',
        flexDirection: 'column',
        gap: '20px', // Space between FAQ and Email Form
    },
    rightColumn: {
        flex: [1, null, 1],
        display: 'flex',
        flexDirection: 'column',
        gap: '20px', // Space between Facebook Feed and Twitter Feed
        maxWidth: '100%', // Ensure no overflow on the right column
    },
    feedColumn: {
        width: '100%', // Ensure both feeds take full width of the container
        overflow: 'hidden', // Prevent horizontal overflow
        boxSizing: 'border-box',
    },
};