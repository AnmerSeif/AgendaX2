import React, {Component} from "react";
import Title from '../../_Title';
import DateAndAuthor from '../../_DateAndAuthor';
import Row from '../../_Row';
import Link from 'next/link';
import styled from 'styled-components';
import breakpoints from '../../../breakpoints';

const BlogHeaderPost = styled.div`
    width:100%;
    margin-bottom: 10.6875em;
    overflow: hidden;
`;

const BlogHeaderPostThumbnail = styled.div`
    position: relative;
    img {
        &:first-child {
            width:100%;
            height: 38.1875em;
            object-fit: cover;
            font-family: 'object-fit: cover;';
        }

        &:nth-child(2) {
            display: none;
            position: absolute;
            bottom:0;
            right:0;
            z-index: 3;
            transform: translateX(50%);
            ${breakpoints.greaterThan('desktop')`
                display: block;
            `}
        }
    }
        
    &:after {
        content:'';
        display: block;
        position: absolute;
        left:0;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 7.6875em solid #e9e8e9;
        border-left: 100vw solid transparent;
        z-index:2;
    }
`;

const BlogHeaderPostCategory = styled.div`
    position: absolute;
    bottom:0;
    left:4.25em;
    a {
        position: relative;
        font-family: 'Republica-Minor', sans-serif;
        font-size: 0.875em;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 0.0602em;
        text-align: left;
        color: #e9e8e9;
        text-transform: uppercase;
        padding: 0 1em;
        text-decoration: none;
        span {
            position: relative;
            z-index: 4;
            color: #e9e8e9;
        }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color:#231f20;  
            transform: skewX(-10deg);
            /* Standard syntax */
            z-index: 3;
        }
    }
`;

const BlogHeaderPostMeta = styled.div`
    margin: 0 auto;
    margin-top:2.875em;
    max-width:57em;
`;

const BlogHeaderPostTitle = styled.p`
    font-family: 'Oak', sans-serif;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.009524em;
    color: #231f20;
    font-size: 2.625em;
    display: block;
    text-align: center;
    margin-top:1.095238em;
    margin-bottom: 0.547619em;
    max-width:21.714286em;
    text-align: left;
`;

const BlogHeaderPostText = styled.p`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1em;
    font-weight: normal;
    font-style: italic;
    font-stretch: normal;
    line-height: 1.44;
    letter-spacing: 0.0187em;
    text-align: left;
    color: #626262;
    margin-bottom: 1.5em;
`;

const BlogHeaderPostLink = styled.a`
    font-family: 'Oak', sans-serif;
    font-size: 1.1875em;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.1875em;
    text-align: left;
    color: #131313;
    text-decoration: none;
`;

export default class HeaderPost extends Component {
    render() {
        return (
            <BlogHeaderPost>
                <BlogHeaderPostThumbnail>
                    <img src={this.props.img} />
                    <img src="/static/bubbles-1-copy.png" />
                    <BlogHeaderPostCategory>
                        <Link><a href=""><span>Test</span></a></Link> 
                    </BlogHeaderPostCategory>
                </BlogHeaderPostThumbnail   >
                <BlogHeaderPostMeta>
                    <DateAndAuthor 
                        name={this.props.name} 
                        image={this.props.image} 
                        date={this.props.date} />
                    <BlogHeaderPostTitle>{this.props.title}</BlogHeaderPostTitle>
                    <BlogHeaderPostText>Det er sol og sommer, og vi i Agenda X varmer opp til sommerleiren 2018 med en aldri så liten KICK-OFF fest!</BlogHeaderPostText>
                    <Link><BlogHeaderPostLink>LES MER</BlogHeaderPostLink></Link>
                </BlogHeaderPostMeta>
            </BlogHeaderPost>
        )
    }
}