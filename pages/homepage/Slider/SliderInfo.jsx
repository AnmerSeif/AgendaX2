import React from "react";
import css from '../../../styles.scss';
import Link from 'next/link';
import { TweenLite, Linear, TimelineLite } from "gsap";
import {TransitionGroup} from 'react-transition-group';

export default class SliderInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div ref={(element)=>{this.slide_info = element}}  className={css.slider_slide_info}>
            <h2>{this.props.title}</h2>
            <p>{this.props.excerpt}</p>
            <Link as={`/p/${this.props.slug}`} href={`/post?id=${this.props.slug}`}>
              <a>Les mer</a>
            </Link>
        </div>
    );
  }
}



