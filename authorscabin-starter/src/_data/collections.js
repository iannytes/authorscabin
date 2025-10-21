module.exports = {
  collections: {
    post: function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/posts/*.md");
    }
  }
}