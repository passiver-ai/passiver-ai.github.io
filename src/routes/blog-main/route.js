const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: async () => {

    // 모든 blog-name을 리턴 from db
    const blogPostJson = await fetch(`http://127.0.0.1:8080/api/workspace/all/blog-campaign/post`).then((res) => res.json());
    console.log(blogPostJson);

    return [
      { blogName: 'passiver' },
      // { blogName: 'passive-income-master' },
    ];
  },
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: '/@/:blogName',
  data: ({ data }) => {
    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;
    return data;
  },
  template: 'BlogMain.svelte',
};
