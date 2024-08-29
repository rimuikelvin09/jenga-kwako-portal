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
        path: '/sampleplans',
        label: 'Sample plans'
      },
      {
        path: 'https://bbsltd.co.ke/kagaa-project/',
        label: 'Ongoing Projects'
      },
      {
        path: 'https://bbsltd.co.ke/gallery/',
        label: 'Featured Projects'
      },
      {
        path: 'https://bbsltd.co.ke/diaspora-building-solutions/',
        label: 'Diaspora Building Solutions'
      },
      {
        path: 'https://bbsltd.co.ke/building-consultancy/',
        label: 'Construction Consultancy Services'
      },
    ],
  },
  resources: {
    heading: 'Resources',
    items: [
      {
        path: '/downloadables/JK-ammortization-table.pdf',
        label: 'Ammortization Table'
      },
      {
        path: '/downloadables/JK-Requirements-Checklist.pdf',
        label: 'Requirements checklist'
      },
      /* {
       path: '/downloadables/KMRC-Annual-Report-2023.pdf',
       label: 'KMRC Annual Reports'
     },
     {
       path: '/downloadables/JK-terms.pdf',
       label: 'Jenga Kwako T&C\'s '
     },*/
      {
        path: '/',
        label: 'Construction GPT (beta) '
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
