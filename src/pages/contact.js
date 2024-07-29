// src/pages/about.js
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function AboutPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Contact Us | Jenga Kwako" />
                    <section sx={styles.section}>
                        <h1>Contact Us page</h1>
                        <p>Welcome to the contact us page!</p>
                    </section>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    section: {
        padding: '20px',
        textAlign: 'center',
    },
};
