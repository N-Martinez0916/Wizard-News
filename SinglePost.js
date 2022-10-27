const timeAgo = require("node-time-ago");

function singlePostRouter(post) {
  if (!post.id) {
    throw new Error("Post Not Found")
  } else {
    const html =
  

   `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
        <div class='news-item'>
          <h1>
            ${post.title}
            <small>(by ${post.name})</small>
          </h1>
          <h3>
          <span class='news-content'>${post.content}</span>
          </h3>
          <small class="news-info">
          ${timeAgo(post.date)}
          </small>
        </div>
    </div>
  </body>
</html>`;

return html}
};

module.exports = singlePostRouter;
