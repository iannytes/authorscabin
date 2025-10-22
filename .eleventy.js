module.exports = function (eleventyConfig) {
  // Collections
  eleventyConfig.addCollection("post", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // Filters
  eleventyConfig.addFilter("toUTCString", (dateObj) => {
    try {
      return new Date(dateObj).toUTCString();
    } catch (err) {
      console.error("Invalid date passed to toUTCString filter:", dateObj);
      return "";
    }
  });
eleventyConfig.addFilter("date", (dateObj, format = "iso") => {
  const d = new Date(dateObj);
  if (format === "iso") return d.toISOString();
  if (format === "utc") return d.toUTCString();
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
function coerceDate(value) {
  if (!value) return new Date();
  const d = new Date(value);
  return isNaN(d) ? new Date() : d;
}

// Use this anywhere in templates for RSS-safe UTC
eleventyConfig.addFilter("rssDate", (value) => {
  return coerceDate(value).toUTCString();
});

// ISO 8601 helper (if you want it elsewhere)
eleventyConfig.addFilter("isoDate", (value) => {
  return coerceDate(value).toISOString();
});
  // Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("youtube", function (id) {
    return `<div class="video-embed">
      <iframe src="https://www.youtube.com/embed/${id}" title="YouTube video"
        loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>`;
  });

  // Static passthroughs
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
