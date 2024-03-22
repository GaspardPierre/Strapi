'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;
const customRoutes = require('./custom-routes')

module.exports = createCoreRouter('api::article.article', customRoutes);
