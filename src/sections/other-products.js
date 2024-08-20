/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/blog/1.jpg';
import PostThumb2 from 'assets/blog/2.jpg';
import PostThumb3 from 'assets/blog/3.jpg';
import PostThumb4 from 'assets/blog/4.jpeg';
import PostThumb5 from 'assets/blog/6.jpg';

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'Jenga Stress-Free',
    postLink: 'https://bbsltd.co.ke/jenga-stress-free/',
    title: 'Jenga Stress-Free',
    description: 'From project inception to seamless handover, we’re your one-stop A-Z solution for both commercial and residential construction….',
  },
  {
    id: 2,
    imgSrc: PostThumb2,
    altText: 'Labour-Only Contracting',
    postLink: 'https://bbsltd.co.ke/labour-only/',
    title: 'Labour-Only Contracting',
    description: 'Discover our vast, vetted, and expertly trained labor force, ready to tackle any construction project – be it commercial or residential….',

  },
  {
    id: 3,
    imgSrc: PostThumb3,
    altText: 'Diaspora Building Solutions',
    postLink: 'https://bbsltd.co.ke/diaspora-building-solutions/',
    title: 'Diaspora Building Solutions',
    description: 'We’ve taken the initiative to support clients looking to invest back home, whether it’s in commercial buildings or their dream homes…. ',

  },
  {
    id: 4,
    imgSrc: PostThumb4,
    altText: 'Repairs, Remodelling & Renovations ',
    postLink: 'https://bbsltd.co.ke/repairs-remodeling-renovation/',
    title: 'Repairs, Remodelling & Renovations ',
    description: 'Elevate your space with confidence! Whether it’s a home or office transformation or essential repairs….',

  },
  {
    id: 5,
    imgSrc: PostThumb5,
    altText: 'Building Consultancy',
    postLink: 'https://bbsltd.co.ke/repairs-remodeling-renovation/',
    title: 'Building Consultancy ',
    description: 'With our expertise, we not only provide top-tier consultancy but also excel in executing specialized construction modules…. ',

  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection() {
  return (
    <section id='other-products' sx={{ variant: 'section.otherProducts' }}>
      <Container>
        <SectionHeader
          slogan="Other Products"
          title="Get Bencmark's Product Offerings"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                description={item.description}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
