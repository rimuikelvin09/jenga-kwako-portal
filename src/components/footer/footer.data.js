import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default {
  menuItems: {
    heading: 'Useful Links',
    quickLinks: [
      {
        path: '/',
        label: 'Sample plans'
      },
      {
        path: '/',
        label: 'Ongoing Projects'
      },
      {
        path: '/',
        label: 'Featured Projects'
      },
      {
        path: '/',
        label: 'Diaspora Building Solutions'
      },
      {
        path: '/',
        label: 'Construction Consultancy Services'
      },
    ],
  },
  resources: {
    heading: 'Resources',
    items: [
      {
        path: '/',
        label: 'Ammortization Table'
      },
      {
        path: '/',
        label: 'Requirements checklist'
      },
      {
        path: '/',
        label: 'KMRC Annual Reports'
      },
      {
        path: '/',
        label: 'Construction GPT (beta) '
      },
      {
        path: '/',
        label: 'Jenga Kwako T&C\'s '
      },
    ],
  },
  getInTouch: {
    heading: 'Get In Touch',
    details: [
      {
        icon: FaEnvelope,
        info: 'info@bbsltd.co.ke'
      },
      {
        icon: FaPhone,
        info: '+254 722 333 324'
      },
      {
        icon: FaMapMarkerAlt,
        info: 'Mapa House, Basement, Biashara street, Kiambu Town'
      },
    ],
  },
  socialMedia: {
    heading: 'Social Media',
    links: [
      {
        path: 'https://www.instagram.com/jengakwako_ke/',
        icon: FaInstagram
      },
      {
        path: 'https://www.facebook.com/bbsltdke/',
        icon: FaFacebookF
      },
      {
        path: 'https://x.com/BenchmarkBuild4',
        icon: FaTwitter
      },
      {
        path: 'https://www.youtube.com/@bbsltd_ke',
        icon: FaYoutube
      },
      {
        path: 'https://www.linkedin.com/company/benchmark-building-solutions-ltd/',
        icon: FaLinkedinIn
      },
    ],
  },
};
