import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ContentfulProvider } from 'react-contentful';
import {
  contentfulClient,
  previewContentfulClient,
} from '@poc-contentful/contentful';

function CustomApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ui-article!</title>
      </Head>
      <ContentfulProvider
        client={
          router.query.preview === '1'
            ? previewContentfulClient
            : contentfulClient
        }
      >
        <Component {...pageProps} />
      </ContentfulProvider>
    </>
  );
}

export default CustomApp;
