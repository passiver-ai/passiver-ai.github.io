const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: async () => {
    const blogsJson = await fetch(`http://127.0.0.1:8080/api/workspace/all/blog-campaign/blog`).then((res) =>
      res.json(),
    );

    console.log(blogsJson);

    return blogsJson;
  },
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  // permalink: '/@/:blogName',
  permalink: ({ request, settings, helpers }) => {
    if (!request.blogName) {
      return `/@/${(1000000 * Math.random()) | 0}`;
    }

    return `/@${request.blogName}`;
  },
  data: ({ data, request, allRequests }) => {
    if (allRequests.length) {
      data.blogName = request.blogName;
      data.post = allRequests.filter(
        (item) => item.blogName === request.blogName && item.route === 'blog-main',
      )[0].post;
      console.log(data.post);
    }

    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.
    // data.hookInterface = hookInterface;
    // data.hookEntityDefinitions = hookEntityDefinitions;

    return data;
  },
  template: 'BlogMain.svelte',
};
