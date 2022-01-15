import { AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

import { Navbar } from '@components';

import '@styles/main.scss';

export default function App ({ Component, pageProps }) {
  const { pathname } = useRouter();
  useEffect(() => {
    document.documentElement.setAttribute('lhub-mode', 'dark');
  }, []);

  return (
    <>
      <Head>
        <title>localHub | Coming Soon</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Providing useful packages and local dev tools to improve your HubSpot theme development experience.' />
        <meta name='theme-color' content='#ff7a59' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='localHub | Coming Soon' />
        <meta property='og:url' content='https://localhub.dev' />
        <meta property='og:site_name' content='localHub' />
        <meta property='og:description' content='Providing useful packages and local dev tools to improve your HubSpot theme development experience.' />
        <meta property='og:image' content='/images/vizality-web.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content='@localhubdev' />
        <meta property='twitter:title' content='localHub' />
        <meta property='twitter:description' content='Providing useful packages and local dev tools to improve your HubSpot theme development experience.' />
        <meta property='twitter:image:src' content='/images/vizality-web.png' />
        <meta property='twitter:image:width' content='1200' />
        <meta property='twitter:image:height' content='630' />

        <script type='text/javascript' src='/js/test.js'></script>
      </Head>
      <AnimateSharedLayout>
        <Navbar />
          <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}
