module.exports = {
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      const article = await strapi.db.query('api::article.article').findOne({
        where: {
            where: { slug },
            populate: { tags: true }, // Adaptez les relations à peupler selon vos besoins
          }});
      
          return article ? article : ctx.notFound();
        },

        async findByTag(ctx) {
          const { tag } = ctx.query;
      
          const articles = await strapi.db.query('api::article.article').findMany({
            where: {
              tags: {
                name: {
                  $containsi: tag, 
                },
              },
            },
            populate: { tags: true }, 
          });
      
          return articles;
        },
      };