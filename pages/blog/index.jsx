import React, { Component } from 'react';
import styled from 'styled-components';
import Row from '../../components/_Row';
import Title from '../../components/_Title';
import HeaderPost from '../../components/Blog/HeaderPost';
import BlogPostCard from '../../components/_BlogPostCard';

import Link from 'next/link';

const BLOG_POSTS_PATH = '../../content/blogPosts';

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context('../../content/blogPosts', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  const firstThree = markdownFiles.slice(0,3);
  return Promise.all(
    firstThree.map(async path => {
      const markdown = await import(`../../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};


const StyledBlog = styled.div`
  margin-top: 4.875em;
`;

const StyledBlogTitle = styled.div`
  margin-bottom: 7.5em;
`;

const StyledBlogPostHeader = styled.div`
  margin-bottom: 6.25em;
`;

export default class Blog extends Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }
  render() {
    const { postsList } = this.props;
    return (
      <StyledBlog>
          <Row>  
              <StyledBlogTitle>
                  <Title text="Aktuelt." bgColor="black" size={1.5} />
              </StyledBlogTitle>
          </Row>
          <Row>
              <HeaderPost title="Dette er en veldig lang overskrift, ok ikke så lang da..." img="/static/layer-114.jpg" category="Kategori" authorImage="/static/layer-114.jpg" authorName="Anmer Seif" date={new Date().toString()} />
          </Row>
          <Row>
              {
                  postsList.map((post, index)=>{
                  return (
                      <BlogPostCard key={post.slug} slug={post.slug} title={post.attributes.title} excerpt={post.excerpt} titleBgColor="#000000" img={post.attributes.thumbnail} category={post.attributes.category} date={post.date} />
                      )
                  })
              }
          </Row>
      </StyledBlog>
    );
  }
}
