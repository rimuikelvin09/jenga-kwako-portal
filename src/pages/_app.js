import { useEffect, useState } from 'react';
import Router from 'next/router';
import { ThemeProvider } from 'theme-ui'; //1
import { StickyProvider } from '../contexts/app/app.provider';//2
import theme from '../theme';//3
import { initGA, logPageView } from 'analytics';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import PreLoader from '../components/preloader';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    initGA();
    logPageView();

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  useEffect(() => {
    setLoading(false); // Disable the loader once the component mounts
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        {loading && <PreLoader />}
        <Component {...pageProps} />
      </StickyProvider>
    </ThemeProvider>

  );
}
