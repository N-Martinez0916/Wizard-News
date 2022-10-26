// const express = require("express");
// const singlePostRouter = express.Router()
// const postBank = require("./postBank");

const timeAgo = require('node-time-ago')

// singlePostRouter.get('/:id', (req, res) => {
  function singlePostRouter(post) {


    // const id = req.params.id;
    // const post = postBank.find(id);
    if(!post.id){
        res.status(499)
        throw new Error('Post Not Found')
    }
    
    // res.send(
      return `<!DOCTYPE html>
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
</html>`
// );
// })
  };

// module.exports = {singlePostRouter: singlePostRouter}
module.exports = singlePostRouter;

