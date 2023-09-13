module.exports = {
  // WARNING: Here be dragons and magic of all sorts.

  // 'data' and 'all' for this route are populated by /plugins/elder-plugin/markdown/index.js
  // This example is designed to show you the power of plugins.

  // If you look in your `elder.config.js` you will see that the plugin is configured as so:
  // 'elderjs-plugin-markdown': {
  //   routes: ['blog'],
  // },

  // This is telling the simple markdown plugin, which route to control.

  data: {},
  all: async () => {
    // 모든 blog-name, title(slug) 리턴 from db

    return [
      { blogName: 'passiver', slug: 'getting-started' }
    ];
  },
  permalink: '/@/:blogName/:slug/',
};
