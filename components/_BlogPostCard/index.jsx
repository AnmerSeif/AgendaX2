import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Row from '../_Row';
import Title from '../_Title';
import moment from 'moment';


const StyledBlogPostCard = styled.div`
    max-width: 18.75em;
    overflow: hidden;
    position: relative;
`

const StyledBlogPostCardImageContainer = styled.div`
    position: relative;

    &:after{
        content:'';
        display: block;
        position: absolute;
        left:0;
        bottom: 1.3875em;
        width: 0;
        height: 0;
        border-bottom: 12em solid #e9e8e9;
        border-left: 100vw solid transparent;
        z-index:2;
    }
`
const StyledBlogPostCardImage = styled.img`
    height: 12.0625em;
    width: 100%;
    object-fit: cover;
    font-family: 'object-fit: cover;';
`
const StyledBlogPostCardCategory = styled.div`
    transform: translate(3%, -50%);
    position: relative;
    z-index: 3;
`

const StyledBlogPostCardTitle = styled.p`
    font-family: 'Oak', sans-serif;
    font-size: 1em;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.31;
    letter-spacing: 0.1625em;
    text-align: left;
    color: #090909;
`

const StyledBlogPostCardText = styled.p`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1em;
    font-weight: normal;
    font-style: italic;
    font-stretch: normal;
    line-height: 1.44;
    letter-spacing: 0.0187em;
    text-align: left;
    color: #626262;
    margin-bottom: 1.625em;
`

const StyledBlogPostCardLink = styled.a`
    font-family: 'Oak', sans-serif;
    font-size: 1.1875em;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.1875em;
    text-align: left;
    color: #131313;
    text-decoration: none;
`

const StyledBlogPostCardDate = styled.time`
    display: block; 
    font-family: 'Fira Sans', sans-serif;
    font-size: 1em;
    font-weight: normal;
    font-style: italic;
    font-stretch: normal;
    letter-spacing: 0.0688em;
    text-align: left;
    color: #02b6af;
    margin-bottom:0.375em;
`

export default class BlogPostCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledBlogPostCard>
                <StyledBlogPostCardImageContainer>
                    <StyledBlogPostCardImage src={this.props.img} alt=""/>
                    <StyledBlogPostCardCategory>
                        <Title text={this.props.category} bgColor={this.props.titleBgColor} margin="0.2em" size={0.45}/>
                    </StyledBlogPostCardCategory>
                </StyledBlogPostCardImageContainer>
                <StyledBlogPostCardTitle>{this.props.title}</StyledBlogPostCardTitle>
                <StyledBlogPostCardText>{this.props.excerpt}</StyledBlogPostCardText>
                <Row justifyContent="space-between">
                    <Link as={`/p/${this.props.slug}`} href={`/post?id=${this.props.slug}`}><StyledBlogPostCardLink href="">LES MER</StyledBlogPostCardLink></Link>
                    <StyledBlogPostCardDate datetime={this.props.date}>{moment(this.props.date).format("DD MMM YYYY")}</StyledBlogPostCardDate>
                </Row>
            </StyledBlogPostCard>
        )
    }
}