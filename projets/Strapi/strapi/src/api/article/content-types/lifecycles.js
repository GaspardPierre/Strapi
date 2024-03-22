// @ts-nocheck
const slugify = require('slugify');

module.exports = {
  beforeCreate(event) {
    if (event.params.data.title) {
      event.params.data.slug = slugify(event.params.data.title, { lower: true, strict: true });
    }
  },
  beforeUpdate(event) {
    if (event.params.data.title) {
      event.params.data.slug = slugify(event.params.data.title, { lower: true, strict: true });
    }
  },
};
