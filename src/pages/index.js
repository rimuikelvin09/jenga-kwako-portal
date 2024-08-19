import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';

import AboutSection from '../sections/about-section';
import Process from '../sections/process';

import TestimonialCard from '../sections/testimonial';


export default function IndexPage() {
  return (

    <Layout>
      <SEO title="Jenga Kwako | Benchmark Building Solutions ltd" />
      <Banner />
      <AboutSection />
      <Process />
      <TestimonialCard />
    </Layout>

  );
}
