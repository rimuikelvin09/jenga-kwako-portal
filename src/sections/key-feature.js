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
    title: 'Fast processes',
    text:
      'We\'ve laid the foundation by streamlining every process within our control—no more waiting on the bank’s tidious processes',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Value For money',
    title: 'Value For Money',
    text:
      'Our solid partnerships with manufacturers and suppliers mean we cement top-notch quality at the best prices—delivering maximum value for every shilling.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Quality',
    title: 'Quality Construction',
    text:
      'Quality is our cornerstone—with over 30 years of experience and the bank\'s strict quality checks, you’re in solid hands.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer relationship',
    title: 'Customer Relationship',
    text:
      'Building your home is personal, and so is our approach. We lay the groundwork for lasting relationships, ensuring your satisfaction stands tall for decades.',
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
    gridGap: '20px',
    gridTemplateColumns: [
      'repeat(1, 1fr)', // One column for mobile
      null,
      'repeat(2, 1fr)', // Two columns for larger screens
    ],
  },
};