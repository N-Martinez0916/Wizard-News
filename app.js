const express = require("express");
const postBank = require("./postBank");

const morgan = require("morgan");
const allPostsRouter = require("./AllPosts")
const singlePostRouter = require("./SinglePost")

const PORT = 1337;

const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  const posts = postBank.list()
  res.send(allPostsRouter(posts));
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  res.send(singlePostRouter(post))
});

app.get('*', (req, res) => {
  res.status(404).send({
    error: '404 - not found',
    message: "no route found for the request url",
  });
});

// app.use((error, req, res, next)=>{
//   console.log('there is an error', error)
//   if (res.statusCode < 400 ) {
//     res.status(500);
//   }
//   res.send({error: error.message, message: error.message})
// })

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
