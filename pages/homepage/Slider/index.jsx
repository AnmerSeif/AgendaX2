import React from "react";
import Carousel from 'nuka-carousel';

import styled from 'styled-components';
import breakpoints from '../../../breakpoints';

import content from '../../../content/home.md';


// import SliderInfo from './SliderInfo';
import { TweenLite, Linear, TimelineLite } from "gsap";

import LazyLoad from 'react-lazyload';

const Slider = styled.div`
  position: relative;
  padding:0 1em;
  max-width:120em;
  margin:0 auto;
  margin-top:2.4375em;
  margin-bottom:11.1875em;
  
  ${breakpoints.greaterThan('desktop')`
    padding:0;
  `}

  
  .slider-frame:after{
    content:'';
    display: block;
    position: absolute;
    left:0;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: 3em solid #e9e8e9;
    border-left: 100vw solid transparent;
    z-index:2;

    ${breakpoints.greaterThan('desktop')`
      display: none;
    `}

  }

  .slider-control-bottomcenter {
    z-index: 1;
  }

  .slider-frame .slider-list {
    height: 12.6719em !important;
    
    ${breakpoints.greaterThan('phablet')`
      height: 25.3438em !important;
    `}
    
    ${breakpoints.greaterThan('desktop')`
      height: 34.8125em !important;
    `}

    li {
      display: flex !important;
      justify-content: center;
    }
  }
`;

const SliderElement = styled.div`
  height: 12.6719em;


  ${breakpoints.greaterThan('phablet')`
    height: 25.3438em;
  `}
  

  ${breakpoints.greaterThan('desktop')`
    max-width:98.8125em;
    height: 34.8125em;
  `}

  img{
      width:100%;
      height: 100%;
      object-fit: cover;
      font-family: 'object-fit: cover;';
  }
`;

const NavigationButton = styled.button`
  background-color:transparent;
  box-shadow: none;
  border:none;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  &:hover{
      cursor: pointer;
  }

  &:focus{
      outline:none;
  }

  ${breakpoints.greaterThan('desktop')`
    display: flex;
  `}
`;


const NavigationButtonMobile = styled.button`
  display: flex;
  position: relative;
  flex-basis: 3em;

  ${breakpoints.greaterThan('desktop')`
    display: none;
  `}

  button{
      position: absolute;
      transform: translateY(-50%);
      top:60%;
      left:0;
      background-color:transparent;
      box-shadow: none;
      border:none;
      height: 2em;
      padding:0;

      &:hover{
          cursor: pointer;
      }

      &:focus{
          outline:none;
      }

      img{
      }
  }
  
`;

const Breadcrumbs = styled.div`
    position: absolute;
    bottom:-1.0625em;
    left:0;
    transform: translate(-50%,0);

    ul{
        ${breakpoints.greaterThan('desktop')`
          margin:0;
          padding:0;
          width:64.875em;
          height: 0.3125em;
          list-style: none;
          display: flex;
        `}
      }
`;

const BreadcrumbsLI = styled.li`
  ${breakpoints.greaterThan('desktop')`
    position: relative;
    margin:0;
    padding:0;
    background-color: #e0e0e0;
    flex-grow: 1;
    flex-basis: 0;
    height: 100%;
    margin:0 0.9688em;

    &:hover{
        cursor: ${props => props.active ? 'default' : 'pointer'}; ;
    }
  `}
`

const BreadcrumbsSpan = styled.span`
  position: absolute;
  top:0;
  left:0;
  width:0%;
  height: 100%;
  background-color: ${props => props.active ? '#02b6af' : ''}; ;
`;

const BreadcrumbsMobile = styled.div`
  ul{
    margin:0;
    padding:0;
    list-style: none;
    display: flex;

    li{
        margin:0;
        padding:0;
        ${props => props.active ? '#02b6af' : '#e0e0e0'}
        width:0.875em;
        height: 0.875em;
        border-radius: 50%;
        margin:0 0.6875em;

        &:hover{
          cursor: ${props => props.active ? 'default' : 'pointer'}; ;
            cursor: pointer;
        }
    }
  }
`;

export default class FrontPageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      slideIndex: 0
    }
  }

  componentWillMount(){
    this.breadcrumbsTimeline = new TimelineLite();
    this.animateBreadCrumb(0);
  }

  componentDidMount(){
  }

  animateBreadCrumb(index){
    const time = 10000;
    if((typeof window === 'undefined') || window.innerWidth <= 1440) return;
    if(this.breadcrumbs != null ){
      this.breadcrumbsTimeline.seek(0);
      this.breadcrumbsTimeline.clear(true);
      this.breadcrumbskActivePoint = this.breadcrumbs.children.item(index).children.item(0);
      if(this.breadcrumbskActivePoint != null){
        this.breadcrumbsTimeline.add(TweenLite.to(this.breadcrumbskActivePoint,((time+350)/1000),{
          width: '100%',
          ease: Linear.easeNone
        }))
      }
      else {
        console.log("error in anim")
      }
    }
    else{
      console.log("didnt find slick-active")
    }
  }

  handleBeforeSlide = (slideIndex, endSlide) => {
    if((typeof window === 'undefined') || window.innerWidth > 1440 && this.breadcrumbskActivePoint != null) this.breadcrumbskActivePoint.style.width = "0%";
    this.animateBreadCrumb(endSlide);
    this.setState({
      changingSlide : true,
      slideIndex    : endSlide,
    });
  }
  
  handleAfterSlide = () => {
    this.setState({
      changingSlide : false,
    });
  }

  render() {
    const { slider1, slider2, slider3, sliderspeed } = content;
    console.dir(content)
    return (
      <Slider>
        <Carousel 
          ref={(carousel) => {this.carousel = carousel}}
          autoplay={false}
          autoplayInterval={10000}
          pauseOnHover={false}
          wrapAround={true}
          slideIndex={this.state.slideIndex}
          beforeSlide={this.handleBeforeSlide}
          afterSlide={this.handleAfterSlide}
          renderCenterLeftControls={({ previousSlide }) => (
            <NavigationButton ref={(element) => this.prevButton = element} onClick={previousSlide}><img src="/static/icons/chevron-left.png" alt="my image" /></NavigationButton>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <NavigationButton ref={(element) => this.nextButton = element} onClick={nextSlide}><img src="/static/icons/chevron-right.png" alt="my image" /></NavigationButton>
          )}
          renderBottomCenterControls={({ currentSlide }) => (
            (typeof window !== 'undefined') && window.innerWidth > 1440 && 
              <Breadcrumbs>
                <ul ref={(element) => this.breadcrumbs = element} >
                  <BreadcrumbsLI onClick={()=>{this.setState({slideIndex: 0})}} active={this.state.slideIndex == 0} ><BreadcrumbsSpan></BreadcrumbsSpan></BreadcrumbsLI>
                  <BreadcrumbsLI onClick={()=>{this.setState({slideIndex: 1})}} active={this.state.slideIndex == 1} ><BreadcrumbsSpan></BreadcrumbsSpan></BreadcrumbsLI>
                  <BreadcrumbsLI onClick={()=>{this.setState({slideIndex: 2})}} active={this.state.slideIndex == 2} ><BreadcrumbsSpan></BreadcrumbsSpan></BreadcrumbsLI>
                </ul>
              </Breadcrumbs>
          )}
          renderBottomRightControls={({ currentSlide }) => (
            (typeof window !== 'undefined') && window.innerWidth <= 1440 && 
              <BreadcrumbsMobile>
                <ul>
                  <li onClick={()=>{this.setState({slideIndex: 0})}} active={this.state.slideIndex == 0} ></li>
                  <li onClick={()=>{this.setState({slideIndex: 1})}} active={this.state.slideIndex == 1} ></li>
                  <li onClick={()=>{this.setState({slideIndex: 2})}} active={this.state.slideIndex == 2} ></li>
                </ul>
              </BreadcrumbsMobile>
          )}
          >
          <SliderElement 
            key={124}>
              <LazyLoad height={557} once>
                <img src={"https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
              </LazyLoad>
          </SliderElement>
          <SliderElement 
            key={32432}>
              <LazyLoad height={557} once>
                <img src="https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </LazyLoad>
          </SliderElement>
          <SliderElement 
            key={234235325}>
              <LazyLoad height={557} once>
                <img src="https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </LazyLoad>
          </SliderElement>
        </Carousel>
      </Slider>
    );
  }
}



