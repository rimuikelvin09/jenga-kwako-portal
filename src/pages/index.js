import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
//import KeyFeature from '../sections/key-feature';
import AboutSection from '../sections/about-section';
//import Feature from '../sections/feature';
import FeaturedProject from '../sections/featured-project';
import Process from '../sections/process';
import Resources from '../sections/resources';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import OtherProducts from '../sections/other-products';
//import Subscribe from '../sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Jenga Kwako | Benchmark Building Solutions ltd" />
          <Banner />
          {/*<KeyFeature />*/}
          <AboutSection />
          <Process />
          {/*<Feature />*/}
          <Resources />
          <FeaturedProject />
          <TeamSection />
          <TestimonialCard />
          <OtherProducts />
          {/**<Subscribe /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
