const fs = require('fs');

(async function run() {
  const blogPostJson = await fetch(`http://127.0.0.1:8080/api/workspace/all/blog-campaign/post`).then((res) =>
    res.json(),
  );

  for (const blogPostJsonItem of blogPostJson) {
    const blogName = blogPostJsonItem.blogName;
    const slug = blogPostJsonItem.slug;

    // create blog folder
    if (!fs.existsSync(`src/routes/blog/${blogName}`)) {
      fs.mkdirSync(`src/routes/blog/${blogName}`);
    }

    // create post file
    const content = 'content';
    fs.writeFileSync(`src/routes/blog/${blogName}/${slug}.md`, content, { encoding: 'utf8', flag: 'w' });
  }
})();
