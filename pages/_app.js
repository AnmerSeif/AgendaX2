import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab, faFacebookF, faInstagram, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons'
library.add(fab,faFacebookF, faInstagram, faSnapchatGhost)
import App, { Container } from 'next/app';
import Layout from '../components/layout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
