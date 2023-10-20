const fs = require('fs');

(async function run() {
  const blogPostJson = await fetch(`http://127.0.0.1:8080/api/workspace/all/blog-campaign/blog/post`).then((res) =>
    res.json(),
  );

  for (const blogPostJsonItem of blogPostJson) {
    const blogName = blogPostJsonItem.blogName;
    if (fs.existsSync(`src/routes/blog/@${blogName}`)) {
      fs.rmSync(`src/routes/blog/@${blogName}`, { recursive: true, force: true });
    }
  }

  for (const blogPostJsonItem of blogPostJson) {
    const postId = blogPostJsonItem.postId;
    const blogName = blogPostJsonItem.blogName;
    const title = blogPostJsonItem.title;
    const metaDescription = blogPostJsonItem.metaDescription;
    const slug = blogPostJsonItem.slug;
    const updatedAt = blogPostJsonItem.updatedAt;

    if (!fs.existsSync(`src/routes/blog/@${blogName}`)) {
      fs.mkdirSync(`src/routes/blog/@${blogName}`);
    }

    const blogPostDetail = await fetch(
      `http://127.0.0.1:8080/api/workspace/all/blog-campaign/blog/post/${postId}`,
    ).then((res) => res.json());

    const allContent = [];
    for (let i = 1; i <= 15; i++) {
      if (blogPostDetail['content' + i]) {
        allContent.push(blogPostDetail['content' + i]);
      }
    }

    // create post file
    const content = `---
title: "${title.replace(/"/g, '\\"')}"
author: ${blogName}
meta_description: "${metaDescription.replace(/"/g, '\\"')}"
last_modified: ${updatedAt}
# slug: '${blogName}/${slug}'
---

${allContent.join('\n\n')}

`;
    fs.writeFileSync(`src/routes/blog/@${blogName}/${slug}.md`, content, { encoding: 'utf8', flag: 'w' });
  }
})();
