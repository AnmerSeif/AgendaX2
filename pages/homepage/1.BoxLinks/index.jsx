import React, { Component } from 'react'
import Link from 'next/link';
import Title from '../../../components/_Title';
import LazyLoad from 'react-lazyload'; 
import styled from 'styled-components';
import breakpoints from '../../../breakpoints';

const FrontpageLink = styled.div`
    width:100%;
    max-width:120em;
    margin:0 auto;
    padding:0 1.09375em;
    box-sizing: border-box;
    margin-bottom:4.2188em;
    
    ${breakpoints.greaterThan('laptop')`
        max-width:18.75em;
        margin-bottom:0;
  `}
    
    div{
        position: relative;
        display:inline-block;
        transform: translate(5%, 30%);
    }

    img{
        height: 172px;
        width:100%;
    }
    p{
        display: block;
        font-family: 'Fira Sans', sans-serif;
        font-size: 1em;
        font-weight: normal;
        font-style: italic;
        font-stretch: normal;
        line-height: 1.31;
        letter-spacing: 0.1625em;
        text-align: left;
        color: #090909;
        
    
        ${breakpoints.greaterThan('laptop')`
            max-width:16em;
        `}

        b{
            font-weight: 900;
        }
    }
    a{
        font-family: 'Oak', sans-serif;
        font-size: 1.1875em;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 0.157895em;
        text-align: left;
        color: #131313;
    }
`;

export default class BoxLinks extends Component {
    render() {
        return(
            <FrontpageLink>
                <Link href={this.props.link}><a><Title skew={this.props.skew} bgColor={this.props.bgColor} size={this.props.size} text={this.props.title} margin="0" /></a></Link>
                    <Link href={this.props.link}>
                        <a>
                                <img src={this.props.image} />
                        </a>
                    </Link>
                <Link href={this.props.link}>
                    <a>
                        <h3></h3>
                    </a>
                </Link>
                <p>
                    {this.props.text}
                </p>
                <Link href={this.props.link}><a>Les mer</a></Link>
            </FrontpageLink>
        )
    }
}