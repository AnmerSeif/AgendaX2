import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab, faFacebookF, faInstagram, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons'
library.add(fab,faFacebookF, faInstagram, faSnapchatGhost)
import App, { Container } from 'next/app';
import Layout from '../components/layout';

import OakEOT from '../fonts/Oak-Bold.eot';
import OakWOFF from '../fonts/Oak-Bold.woff';
import OakTTF from '../fonts/Oak-Bold.ttf';
import OakSVG from '../fonts/Oak-Bold.svg';

import RepublicaMinorWOFF from '../fonts/Republica-Minor.ttf.woff';
import RepublicaMinorSVG from '../fonts/Republica-Minor.ttf.svg';
import RepublicaMinorEOT from '../fonts/Republica-Minor.ttf.eot';

const GlobalFonts =  createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,700,900|Raleway:400,700,900');

    @font-face {
        font-family: 'Oak';
           src: url('${OakEOT}');
           src: url('${OakEOT}?#iefix') format('embedded-opentype'),
                url('${OakWOFF}') format('woff'),
                url('${OakTTF}') format('truetype'),
                url('${OakSVG}') format('svg');
        font-weight: normal;
        font-style: normal;
     }

     @font-face {
        font-family: 'Republica-Minor';
        src:url('${RepublicaMinorWOFF}') format('woff'),
            url('${RepublicaMinorSVG}#Republica-Minor') format('svg'),
            url('${RepublicaMinorEOT}'),
            url('${RepublicaMinorEOT}') format('embedded-opentype'); 
        font-weight: normal;
        font-style: normal;
     }
`;

const GlobalStyle = createGlobalStyle`

body{
    background-color:#e9e8e9;
    
    .container{
        padding-top:8.3125em;
        
        ${breakpoints.greaterThan('desktop')`
            padding-top:0;
        `}
    }
    
}
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalFonts />
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
