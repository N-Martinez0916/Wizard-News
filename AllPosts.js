// const express = require("express");
// const allPostsRouter = express.Router()
// const postBank = require("./postBank");

const timeAgo = require('node-time-ago')

  // allPostsRouter.get('/', (req, res) =>{
    function allPostsRouter (posts) {
    // const posts = postBank.list()
    const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
    
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts
        .map(
          (post) => `
        <div class='news-item'>
          <p>
          <a href="/posts/${post.id}">▲ ${post.title}</a>
            <small>(by ${post.name})</small>
            
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${timeAgo(post.date)}
          </small>
        </div>`
        )
        .join("")}
    </div>
  </body>
</html>`;

  // res.send(html);
  // })
  return html;
};

// module.exports = {allPostsRouter: allPostsRouter}
module.exports = allPostsRouter