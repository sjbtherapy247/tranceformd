// Essential global styles
import 'simplebar-react/dist/simplebar.min.css'; // Scroll bar
// import 'yet-another-react-lightbox/styles.css'; // Lightbox
import 'slick-carousel/slick/slick.css'; // Carousel
import 'slick-carousel/slick/slick-theme.css'; // Carousel Theme

// Core dependencies
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { NextSeo, DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic';

// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import enAU from 'date-fns/locale/en-AU';

// Theme and utility imports
import ThemeProvider from 'src/theme';
import createEmotionCache from 'src/utils/createEmotionCache';

// Components
import ProgressBar from 'src/components/progress-bar';
import { SettingsProvider } from 'src/components/settings';
import MotionLazyContainer from 'src/components/animate/MotionLazyContainer';

// Vercel Tools
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import { Analytics } from '@vercel/analytics/react';

// Dynamically loaded components
const Modal = dynamic(() => import('src/components/modal/Modal'), { ssr: false });
const Notification = dynamic(() => import('src/components/notification/Notification'), { ssr: false });
const LoadingCircular = dynamic(() => import('src/components/loading-circular/LoadingCircular'), { ssr: false });

// Client-side Emotion cache
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  // SEO Defaults
  const defaultTitle = 'TRANCEform Wellness - Clinical Hypnotherapy by Design';
  const defaultDescription = 'TRANCEform your mind, TRANCEform your life. Remove anxiety, stress, fear, or boost your sport or work performance by using the power of hypnosis.';
  const defaultUrl = 'https://tranceformd.com';
  const defaultImage = 'https://tranceformd.com/assets/tranceformd-logo/main.jpg';
  const defaultKeywords = 'TRANCEform Hypnosis, Clinical Hypnotherapy, Local Hypnotherapy, Remove Anxiety';

  // Page-specific SEO properties
  const { title, description, image, canonical, keywords } = pageProps;

  // Open Graph Data
  const openGraphData = {
    type: 'website',
    site_name: 'TRANCEform with Simon - Clinical Hypnosis',
    description: description || defaultDescription,
    title: title || defaultTitle,
    url: canonical || defaultUrl,
    images: [
      {
        url: image || defaultImage,
        alt: title || defaultTitle,
        width: 1088,
        height: 718,
      },
    ],
  };

  // Layout Configuration
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {/* SEO Configuration */}
      <DefaultSeo
        defaultTitle={defaultTitle}
        description={defaultDescription}
        openGraph={openGraphData}
        additionalMetaTags={[
          { name: 'keywords', content: defaultKeywords },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'format-detection', content: 'telephone=no' },
        ]}
        twitter={{
          cardType: 'summary_large_image',
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: image || defaultImage,
        }}
      />

      <NextSeo
        title={title || defaultTitle}
        description={description || defaultDescription}
        canonical={canonical || defaultUrl}
        openGraph={openGraphData}
        additionalMetaTags={[{ name: 'keywords', content: keywords || defaultKeywords }]}
      />

      {/* Vercel Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />

      {/* CacheProvider for Emotion */}
      <CacheProvider value={emotionCache}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enAU}>
          <SettingsProvider>
            <ThemeProvider>
              <LoadingCircular />
              <Modal />
              <Notification />
              <MotionLazyContainer>
                <ProgressBar />
                {getLayout(<Component {...pageProps} />)}
              </MotionLazyContainer>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </CacheProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
