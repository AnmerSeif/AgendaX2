import React, { Component } from 'react'
import styled from 'styled-components';

const StyledTitle = styled.div`
    position: relative;
    display: inline-block;
    font-size:1em;
    text-transform: uppercase;
    padding:1em 1.9375em;
    margin: 1em 0;
    fontSize: ${props => props.size}em;
`

const StyledBG = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;  
    background-color: #ff7f00;
    transform: skewX(-20deg);
    z-index: 0;
    transform: skewX(${props => props.skew}deg)
`

const StyledText = styled.span`
    position: relative;
    font-family: 'Republica-Minor', sans-serif;    
    font-size: 1.75em;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.79;
    letter-spacing: 0.009631em;
    text-align: left;
    color: #f4f4f4;
    z-index: 1;
`;

export default class Title extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledTitle size={this.props.size}>
                <StyledBG skew={this.props.skew}></StyledBG>
                <StyledText>{this.props.text}</StyledText>
            </StyledTitle>
        )
    }
}