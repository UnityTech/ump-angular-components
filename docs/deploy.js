const ghpages = require('gh-pages');

ghpages.publish('dist', () => {
  console.log('Documentation deployed successfully');
});
