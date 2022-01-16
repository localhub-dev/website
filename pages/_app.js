import Head from 'next/head';

import '../styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>localHub | Coming Soon</title>
        <link rel='shortcut icon' href='/favicon.png' />
        <meta name='description' content='Providing useful packages and local dev tools to improve your HubSpot theme development experience.' />
        <meta name='theme-color' content='#ff7a59' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='localHub | Coming Soon' />
        <meta property='og:url' content='https://localhub.dev' />
        <meta property='og:site_name' content='localHub' />
        <meta property='og:description' content='Providing useful packages and local dev tools to improve your HubSpot theme development experience.' />
        <meta property='og:image' content='/images/localhub-web.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content='@localhubdev' />
        <meta property='twitter:title' content='localHub' />
        <meta property='twitter:description' content='Providing useful packages and local dev tools to improve your HubSpot theme development experience.' />
        <meta property='twitter:image:src' content='/images/localhub-web.png' />
        <meta property='twitter:image:width' content='1200' />
        <meta property='twitter:image:height' content='630' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}