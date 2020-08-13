import React, { Component } from 'react';

import content from '../content/home.md';
import Row from '../components/_Row';
import Slider from './homepage/Slider'
import FrontPageLink from './homepage/1.BoxLinks'

export default class Home extends Component {
  render() {
    const { attributes, html } = content;
    return (
      <>
        <Slider />
        <Row>
            <FrontPageLink 
              image={"https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
              title={"asdasd"}
              text={"asdasdasdasdasd"}
              link={"http://google.com"}
              bgColor="black"
              // skew={index == 2 ? -15 : 15}
              skew={15}
              size={0.55}
            />
            <FrontPageLink 
              image={"https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
              title={"asdasd"}
              text={"asdasdasdasdasd"}
              link={"http://google.com"}
              bgColor="black"
              // skew={index == 2 ? -15 : 15}
              skew={15}
              size={0.55}
            />
            <FrontPageLink 
              image={"https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
              title={"asdasd"}
              text={"asdasdasdasdasd"}
              link={"http://google.com"}
              bgColor="black"
              // skew={index == 2 ? -15 : 15}
              skew={-15}
              size={0.55}
            />
        </Row>,
      </>
    );
  }
}
