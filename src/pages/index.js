import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';

import AboutSection from '../sections/about-section';
import Feature from '../sections/feature';
import Process from '../sections/process';
//import Resources from '../sections/resources';

import TestimonialCard from '../sections/testimonial';


export default function IndexPage() {
  return (

    <Layout>
      <SEO title="Jenga Kwako | Benchmark Building Solutions ltd" />
      <Banner />

      <AboutSection />
      <Process />
      {/*<Feature />*/}
      {/*<Resources />*/}

      <TestimonialCard />
    </Layout>

  );
}
