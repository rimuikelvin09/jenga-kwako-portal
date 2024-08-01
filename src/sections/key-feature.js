/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Timely processes',
    text:
      'We have done our best to ensure that the factors within our controll that slow down a project are streamlined, including the hectic bank processes.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Value For money',
    title: 'Value For Money',
    text:
      'Our strategic partnerships with manufactures and suppliers ensure that we get the best quality materials at the most reasonable prices ensuring that the client gets maximum value for their money',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Quality',
    title: 'Quality Construction',
    text:
      'Be assured of Quality because firstly, our lead contrcator has been in the industry for more than 30 years & Secondly, the bank implies its quality control measures when delivering the project',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer relationship',
    title: 'Customer Relationship',
    text:
      'Construction of your own house is very personal, we are intentional about fostering proper relationships with our clients in order to ensure that our clients are satisfied decades after the project is done',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="From Financing to Finishing"
          title="Why we stand out"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
