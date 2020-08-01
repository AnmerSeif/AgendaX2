import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import breakpoints from '../../breakpoints';
import moment from 'moment';

const Author = styled.div`
    display: flex;
    align-items: center;
`;

const AuthorImage = styled.div`
    display: block;
    width:2.9375em;
    height:2.9375em;
    background-color:#231f20;
    border-radius: 50%;
    overflow:hidden;

    img{
        width:100%;
    }
`;

const DateAndTime = styled.div`
    margin-left:0.875em;
    time{
        display: block; 
        font-family: 'Fira Sans', sans-serif;
        font-size: 1em;
        font-weight: normal;
        font-style: italic;
        font-stretch: normal;
        letter-spacing: 0.0688em;
        text-align: left;
        color: #ff7f00;
        margin-bottom:0.375em;
    }
    a{
        display: block;
        font-family: 'Oak', sans-serif;
        font-size: 1em;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 0.0688em;
        text-align: left;
        color: #231f20;
        text-decoration: none;
    }
`;

export default class DateAndAuthor extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Author>
                <AuthorImage>
                    <img src={this.props.image} />
                </AuthorImage>
                <DateAndTime>
                    <time dateTime={this.props.date}>{moment(this.props.date).format("DD MMM YYYY")}</time>
                    <Link><a href="">{this.props.name}</a></Link>
                </DateAndTime>
            </Author>
        )
    }
}