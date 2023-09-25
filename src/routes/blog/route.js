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
    const blogPostJson = await fetch(`http://127.0.0.1:8080/api/workspace/all/blog-campaign/blog/post`).then((res) => res.json());

    return blogPostJson;
  },
  // permalink: '/@/:blogName/:slug',
  permalink: ({ request, settings, helpers }) => {
    if (!request.blogName) {
      return `/@/${(1000000 * Math.random()) | 0}_${request.slug}`;
    }

    return `/@${request.blogName}/${request.slug}`;
  },
};
