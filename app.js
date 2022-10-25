const express = require("express");
const postBank = require("./postBank");
const {allPostsRouter} = require("./AllPosts")
const {singlePostRouter} = require("./SinglePost")
const morgan = require("morgan");
const { request } = require("express");

const PORT = 1337;

const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send('Welcome to the home page');
});



app.use('/posts', allPostsRouter)
app.use('/post', singlePostRouter)

app.use('*', (error, req, res, next)=>{
  console.log('status',error.status)
  res.send(error.message)
  console.log('error message', error.message)
})

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
