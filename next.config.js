const fs = require('fs');
const blogPostsFolder = './content/blogPosts';
const optimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts')

const getPathsForPosts = () => {
  return fs
    .readdirSync(blogPostsFolder)
    .map(blogName => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/blog/post/${trimmedName}`]: {
          page: '/blog/post/[slug]',
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

module.exports = withFonts(optimizedImages({
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts(),
      '/': { page: '/' },
      '/om-oss': { page: '/about' },
      '/aktiviteter': { page: '/activities' },
      '/ungdomsbloggen': { page: '/youth-blog' },
      '/kontakt': { page: '/contact'},
      '/samarbeidspartnere': { page: '/partners'},
      '/aktuelt': { page: '/blog'},
      '/bli-frivillig': { page: '/volunteer'}
    }
  },
}));
