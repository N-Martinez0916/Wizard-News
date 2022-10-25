const express = require("express");
const postBank = require("./postBank");
const morgan = require("morgan");

const PORT = 1337;

const app = express();
const timeAgo = require('node-time-ago')


app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  const posts = postBank.list();

  
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

  res.send(html);
});
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  res.send(`<!DOCTYPE html>
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
</html>`);
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = find(id);
  if (!post.id) {
    throw new Error("Not Found");
  }
});

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
