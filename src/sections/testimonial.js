/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';
import { useState } from 'react';


const data = [
  {
    id: 1,
    quote: '"It is not easy if you don\'t have the cash"',
    name: 'Phylis Wanjiru',
    videoUrl: 'https://youtu.be/szBXNnu1vPI?si=lHD-yp3dNm-FToDF',
    videoId: 'szBXNnu1vPI',
    videoType: 'youtube',
    thumbnail: `https://img.youtube.com/vi/szBXNnu1vPI/hqdefault.jpg`,
  },
  {
    id: 2,
    quote: '"I liked the quality of work"',
    videoUrl: 'https://www.youtube.com/watch?v=0THiQ6iq3C0&t=4s',
    name: 'Evans Kiprotich',
    videoId: '0THiQ6iq3C0',
    videoType: 'youtube',
    thumbnail: `https://img.youtube.com/vi/0THiQ6iq3C0/hqdefault.jpg`,
  },
  {
    id: 3,
    quote: '"We decided not to continue paying rent"',
    videoUrl: 'https://youtu.be/s0j0MNgvX4U',
    name: 'Rosemary',
    videoId: 's0j0MNgvX4U',
    videoType: 'youtube',
    thumbnail: `https://img.youtube.com/vi/s0j0MNgvX4U/hqdefault.jpg`,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
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

export default function TestimonialCard() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [videoType, setVideoType] = useState('');

  const handleVideoOpen = (videoId, videoType) => {
    setVideoId(videoId);
    setVideoType(videoType);
    setVideoOpen(true);
  };

  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Testimonial" title="Meet Client Satisfaction" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
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
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Box sx={styles.thumbnailWrapper} onClick={() => handleVideoOpen(item.videoId, item.videoType)}>
                <Image src={item.thumbnail} sx={styles.thumbnail} />
                <Box sx={styles.playButton}>
                  <IoIosPlay size="30px" color="white" />
                </Box>
              </Box>
              <div className="card-footer">
                <div className="reviewer-info">
                  <Heading as="h3" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Heading as="h4" sx={styles.quote}>
                    {item.quote}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
      {videoType === 'youtube' && (
        <ModalVideo
          channel="youtube"
          isOpen={videoOpen}
          videoId={videoId}
          onClose={() => setVideoOpen(false)}
        />
      )}
      {videoType === 'facebook' && (
        <ModalVideo
          channel="facebook"
          isOpen={videoOpen}
          videoId={videoId}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  thumbnailWrapper: {
    position: 'relative',
    cursor: 'pointer',
    '&:hover .playButton': {
      backgroundColor: 'dark',
    },
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '6px',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'rgba(46, 134, 193, 0.5)', // transparent blue
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    animation: 'pulse 2s infinite', // add pulse effect
    '@keyframes pulse': {
      '0%': {
        boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.7)', // red pulse start
      },
      '70%': {
        boxShadow: '0 0 0 20px rgba(255, 0, 0, 0)', // red pulse end
      },
      '100%': {
        boxShadow: '0 0 0 0 rgba(255, 0, 0, 0)', // red pulse reset
      },
    },
    '& svg': {
      color: 'white', // white play icon
    },
  },
  quote: {
    fontSize: [1, 2],
    fontWeight: 400,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
