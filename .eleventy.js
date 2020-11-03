module.exports = function (eleventyConfig) {
    // Input directory: src
    // Output directory: _site

    // The following copies to `_site/img`
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("Avenir Free");

    eleventyConfig.addCollection("sortedProjects", function (collectionApi) {
        return collectionApi.getFilteredByTag("projects").sort(
            (a, b) => a.data.order - b.data.order
        );
    });
};