module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/admin": "admin"});
  eleventyConfig.addPassthroughCopy({"src/img": "img"});
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});
  eleventyConfig.addPassthroughCopy({"src/site.webmanifest": "site.webmanifest"});

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // YouTube embed shortcode: {% youtube "VIDEO_ID" %}
  eleventyConfig.addShortcode("youtube", function(id) {
    return `<div class="video-embed">
      <iframe src="https://www.youtube.com/embed/${id}" title="YouTube video"
        loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>`;
  });

  // Simple date filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {year:"numeric", month:"long", day:"numeric"});
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};