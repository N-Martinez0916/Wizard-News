const express = require("express");
const app = express();

const morgan= require('morgan')

app.get("/", (req, res) => res.send("Hello World!"));

app.use(morgan('dev'))


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
