const { EleventyRenderPlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.extensionMap = [
    {
      key: 'txt',
      extension: 'txt',
      compile: function compile(str, inputPath, preTemplateEngine, bypass) {
        return function render(data) {
          return str;
        }
      }
    }
  ]
}
