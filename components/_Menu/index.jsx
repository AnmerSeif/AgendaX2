import Link from 'next/link'
import logo from '../../img/logo.png';
import search_icon from '../../img/icons/search.png';
import {TweenLite, TimelineLite, Bounce} from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import breakpoints from '../../breakpoints';



const StyledMenu = styled.section`
  display: block;
  position: absolute;
  width: 100%;
  height: 0%;
  left: 0;
  top: 0;

  ${breakpoints.greaterThan('desktop')`
    position: relative; 
    padding-top: 1.5625em;
  `}
`;

const StyledMobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5625em;

  ${breakpoints.greaterThan('desktop')`
    display: none;
  `}
`

const StyledMobileHeaderLeft = styled.div`
  position: relative;
  visibility: hidden;
  opacity: 0;
  
  button {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    background-color: transparent;
    box-shadow: none;
    border: none;
    &:hover {
        cursor: pointer;
    }
    img {
        height: 100%;
    }
  }
  input[type="text"] {
      background-color: transparent;
      box-shadow: none;
      border: none;
      border-bottom: 3px solid black;
      width: 100%;
      max-width: 2em;
      margin-left: 1.5em;
      padding-left: 0.4em;
      &:focus {
          max-width: 10em;
          outline: none;
      }
  }
`

const StyledMobileHeaderCenter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  a {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 50%;
      padding: 1.5625em;
      transform: translateX(-50%);
      img {
          max-width: 8.368421em;
          display: block;
          @include breakpoint(desktop) {
              display: none;
          }
      }
  }
`;

const StyledMobileHeaderRight = styled.div`
  position: relative;
`;

const StyledMobileHeaderRightHambruger = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  &:hover {
      cursor: pointer;
  }
  &:focus {
      outline: none;
  }
`

const StyledMobileHeaderRightHambrugerBox = styled.span`
  span {
      display: block;
      width: 2.0625em;
      height: 0.25em;
      background-color: #f37121;
      margin: 0.5em 0;
      transform-origin: 0% 50%;
      &:first-child {
          margin-top: 0;
      }
  }
`

const StyledMenuBody = styled.div`
  margin-top: 3.53125em;
  display: none;
  opacity: 0;

  ${breakpoints.greaterThan('desktop')`
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    margin: 0;
    opacity: 1;
  `}
`

const StyledMenuBodyInner = styled.div`
  position: relative;
  
  ul {
    list-style: none;
    padding:0;
    margin:0;

    ${breakpoints.greaterThan('desktop')`
      display: flex !important;
      justify-content: center;
      align-items: center;
      flex-flow: row;
      margin: 0;
      opacity: 1;
    `}

    li{
      padding:0;
      margin:0;
      display: block;
      text-align: center;
      a {
          display: inline-block;
          margin: 0 auto;
          font-family: 'Oak', sans-serif;
          color: #262626;
          text-decoration: none;
          text-align: center;
          margin-top: 1.28125em;
          font-size: 0.9375em;

          ${breakpoints.greaterThan('desktop')`
              font-family: 'Oak', sans-serif;
              font-size: 1em;
              font-weight: bold;
              font-style: normal;
              font-stretch: normal;
              letter-spacing: 0.1875em;
              text-align: center;
              color: #262626;
              text-transform: uppercase;
              text-decoration: none;
              padding: 0;
              margin: 0;
              text-align: center;
              margin: 0 1.4375em;
            `}
        }
  }
  
  img {
    max-width: 8.368421em;
    display: none;
    ${breakpoints.greaterThan('desktop')`
          display: block;
      `}
  }
`;

const MenuLogo = styled.a`
  display: none;
  ${breakpoints.greaterThan('desktop')`
      display: block;
  `}
`

const MenuVolunteer = styled.a`
  position: relative;
  padding: 0 1em !important;
  span {
      position: relative;
      z-index: 1;
      color: #e9e8e9;
  }
  &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #02b6af;
      transform: skewX(-20deg);
      /* Standard syntax */
      z-index: 0;
  }
`

const SecondaryMenu = styled.div`
  display: none;
  position: absolute;
  bottom:-0.5em;
  right:1em;
  justify-content: center;
  align-items: flex-end;

  ${breakpoints.greaterThan('desktop')`
      display: flex;
  `}
`;

const MenuSearch = styled.div`
  position: relative;
  margin-right:0.5625em;
  input[type="text"] {
      background-color: transparent;
      box-shadow: none;
      border: none;
      border-bottom: 0.1875em solid black;
      width: 100%;
      max-width: 2em;
      margin-right: 1.9em;
      padding-right: 0.4em;
      &:focus {
          max-width: 10em;
          outline: none;
      }
  }
  button {
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
      box-shadow: none;
      border: none;
      &:hover {
          cursor: pointer;
      }
      img {
          height: 100%;
      }
  }
`

const MenuSocialLink = styled.div`
  margin:0 0.5625em;

  a{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-size:1.3em;
  }
`;

const MenuMobileFooter = styled.div`
  display: none;
  opacity: 0;
  justify-content: center;
  margin-top:2.8125em;
  ${breakpoints.greaterThan('desktop')`
      display: none !important;
  `}
`

const MenuMobileFooterSocialLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.791667em;
    height: 1.791667em;
    border-radius: 50%;
    font-size:1.5em;
    background-color: #02b6af;
    
    &:nth-child(2){
        margin: 0 1em;
    }
    
    a{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.menuButtonClicked = this.menuButtonClicked.bind(this);
  }

  componentDidMount(){

    
    // MENU SEARCH BUTTON ANIMATION
    this.searchButtonAnimation = TweenLite.to(this.search_button, 0.2, {
      opacity:'1',
      paused:true,
      onStart: ()=>{
        this.search_button.style.visibility = "visible";
      },
      onReverseComplete: ()=> {
        this.search_button.style.visibility = "";
        this.search_button.style.opacity = "";
      }
    })  

    // MENU LOGO ANIMATION
    this.logoAnimation = TweenLite.to(this.logo, 0.2, {
      opacity:'0',
      paused:true,
    })  

    // MENU BUTTON ANIMATION
    this.menuButtonAnimation = new TimelineLite({paused:true, easing: Bounce.easeInOut})
    
    this.menuButtonAnimation.add(TweenLite.to(this.menu_button.children.item(0), 0.2, {
      transform:'rotate(45deg)',
      backgroundColor:'#262626',
      easing: Bounce.easeInOut
    }),'0')  
    
    this.menuButtonAnimation.add(TweenLite.to(this.menu_button.children.item(1), 0.2, {
      opacity:'0',
      easing: Bounce.easeInOut
    }),'0')  
    
    this.menuButtonAnimation.add(TweenLite.to(this.menu_button.children.item(2), 0.2, {
      transform:'rotate(-45deg)',
      backgroundColor:'#262626',
      easing: Bounce.easeInOut
    }),'0')  


    // MENU BODY ANIMATION
    this.menuAnimation = TweenLite.to(this.menu_body, 0.2, {
      opacity:'1',
      paused:true,
      onStart: ()=>{
        document.body.style.overflow="hidden";
        this.menu.style.height = "100%";
        this.menu.style.zIndex="99";
        this.menu.style.backgroundColor="#e9e8e9";
        this.menu_body.style.display = "block";
      },
      onReverseComplete: ()=> {
        document.body.style.overflow="auto";
        this.menu.style.height = "0%";
        this.menu_body.style.display = "";
        this.menu_body.style.opacity = "";
        this.menu.style.backgroundColor="";
        this.menu.style.zIndex="";
      }
    })  

    
    // MENU FOOTER ANIMATION
    this.footerAnimation = TweenLite.to(this.menu_footer, 0.2, {
      opacity:'1',
      paused:true,
      onStart: ()=>{
        this.menu_footer.style.display = "flex";
      },
      onReverseComplete: ()=> {
        this.menu_footer.style.display = "";
        this.menu_footer.style.opacity = "";
      }
    })  


  }

  menuButtonClicked(e){
    e.preventDefault();
    if(this.menu_body.style.display == "block"){
      this.menuAnimation.reverse();
      this.menuButtonAnimation.reverse();
      this.searchButtonAnimation.reverse();
      this.logoAnimation.reverse();
      this.footerAnimation.reverse();
    }
    else{
      this.menuAnimation.play();
      this.menuButtonAnimation.play();
      this.searchButtonAnimation.play();
      this.logoAnimation.play();
      this.footerAnimation.play();
    }
  }


  render() {
    return (
      <StyledMenu ref={(element)=>{ this.menu = element}} >
        <StyledMobileHeader>
          <StyledMobileHeaderLeft ref={(element) =>{this.search_button = element}}>
            <button><img src={search_icon} alt=""/></button>
            <input type="text"/>
          </StyledMobileHeaderLeft>
          <StyledMobileHeaderCenter ref={(element)=>{this.logo = element}}>
            <Link href="/">
              <MenuLogo><img src={logo} alt=""/></MenuLogo>
            </Link>
          </StyledMobileHeaderCenter>
          <StyledMobileHeaderRight>
          <StyledMobileHeaderRightHambruger onClick={this.menuButtonClicked} type="button">
            <StyledMobileHeaderRightHambrugerBox ref={(element)=>{this.menu_button = element}}>
              <span></span>
              <span></span>
              <span></span>
            </StyledMobileHeaderRightHambrugerBox>
          </StyledMobileHeaderRightHambruger>  
          </StyledMobileHeaderRight>
        </StyledMobileHeader>
        <StyledMenuBody ref={(element)=>{this.menu_body = element}}>
          <StyledMenuBodyInner>
            <ul>
              <li>
                <Link href="/activities" as="/aktiviteter">
                  <a><span>Aktiviteter</span></a>
                </Link>
              </li>
              <li>
                <Link href="/aktuelt">
                  <a><span>Aktuelt</span></a>
                </Link>
              </li>
              <li>
                <Link href="/ungdomsbloggen">
                  <a><span>Ungdomsbloggen</span></a>
                </Link>
              </li>
              <li>
                <Link href="/om-oss">
                  <a><span>Om oss</span></a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <MenuLogo><img src={logo} alt=""/></MenuLogo>
                </Link>
              </li>
              <li>
                <Link href="/samarbeidspartnere">
                  <a><span>Samarbeidspartnere</span></a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a><span>Kontakt</span></a>
                </Link>
              </li>
              <li>
                <Link href="/bli-frivillig">
                  <MenuVolunteer><span>Bli frivillig</span></MenuVolunteer>
                </Link>
              </li>
            </ul>
            <SecondaryMenu>
              <MenuSearch>
                <input type="text"/>
                <button><img src={search_icon} alt=""/></button>
              </MenuSearch>
              <MenuSocialLink>
                <a href=""><FontAwesomeIcon icon={['fab', "facebook-f"]} color="black" /></a>
              </MenuSocialLink>
              <MenuSocialLink>
                <a href=""><FontAwesomeIcon icon={['fab', "snapchat-ghost"]} color="black" /></a>
              </MenuSocialLink>
              <MenuSocialLink>
                <a href=""><FontAwesomeIcon icon={['fab', "instagram"]} color="black" /></a>
              </MenuSocialLink>
            </SecondaryMenu>
          </StyledMenuBodyInner>
        </StyledMenuBody>
        <MenuMobileFooter ref={(element)=>{this.menu_footer = element}}>
          <MenuMobileFooterSocialLink>
            <a href=""><FontAwesomeIcon icon={['fab', "facebook-f"]} color="white" /></a>
          </MenuMobileFooterSocialLink>
          <MenuMobileFooterSocialLink>
            <a href=""><FontAwesomeIcon icon={['fab', "snapchat-ghost"]} color="white" /></a>
          </MenuMobileFooterSocialLink>
          <MenuMobileFooterSocialLink>
            <a href=""><FontAwesomeIcon icon={['fab', "instagram"]} color="white" /></a>
          </MenuMobileFooterSocialLink>
        </MenuMobileFooter>
      </StyledMenu>
    );
  }
}