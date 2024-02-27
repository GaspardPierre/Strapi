module.exports = [
    {
      method: 'GET',
      path: '/articles/:slug',
      handler: 'api::article.custom-article.findBySlug',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ];
  