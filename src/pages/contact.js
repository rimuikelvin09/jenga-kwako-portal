/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Emailform from '../components/emailform';
import FAQComponent from '../components/faq';

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
};
