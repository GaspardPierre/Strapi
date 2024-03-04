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
    {
      method: 'GET',
      path: '/articles/:tag',
      handler: 'api::article.custom-article.findByTag',
    },
  ];
  