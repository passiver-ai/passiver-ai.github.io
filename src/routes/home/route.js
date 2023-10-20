const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  // all: async () => {
  //   const blogsJson = await fetch(`http://127.0.0.1:8080/api/workspace/all/blog-campaign/blog`).then((res) =>
  //     res.json(),
  //   );
  //
  //   const mainPostsList = {
  //     post: [],
  //   };
  //
  //   blogsJson?.map((item) => {
  //     if (item.post?.length) {
  //       return;
  //     }
  //
  //     const post = item.post.map((postItem) => {
  //       return {
  //         blogName2222: item.blogName,
  //         ...postItem,
  //       };
  //     });
  //     mainPostsList.post.push(...post);
  //   });
  //
  //   return [mainPostsList];
  // },
  all: () => [{ slug: '/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: '/',
  data: ({ data, request, allRequests }) => {
    if (allRequests.length) {
      const blogPost = allRequests.filter((item) => item.route === 'blog-main');
      if (blogPost.length > 0) {
        data.post = [];

        blogPost.map((item) => {
          item.post.map((itemPost) => {
            itemPost.blogName = item.blogName;
          });

          data.post.push(...item.post);
        });

        data.post.sort((a, b) => {
          return b.postNo - a.postNo;
        });
      }
    }

    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.
    // data.hookInterface = hookInterface;
    // data.hookEntityDefinitions = hookEntityDefinitions;

    return data;
  },
};
