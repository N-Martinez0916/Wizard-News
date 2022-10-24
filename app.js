const express = require("express");

const postBank = require('./postBank')

const morgan= require('morgan')

const PORT = 1337;

const app = express();


app.use(morgan('dev'))

app.get("/", (req, res) => {

  const posts = postBank.list()

  const html = `<!DOCTYPE html>
  <html>
  <head>
  <title> Wizard News </title>
  </head>
  <body>
  <ul<
  ${posts.map(post => `<li>${post.title, post.name}</li>`)}
  </ul>
  </body>
  </html>`


  res.send(html)
})


app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
