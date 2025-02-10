const express = require("express");
const { upComingMovies } = require("./utils/movieUpComing");
const app = express();
const cors = require("cors");
app.use(cors());

//popular
app.get("/", (req, res) => {
  res.send({
    data: upComingMovies,
  });
});

app.listen(4000, () => {
  console.log(`My back end is started at: ${4000}`);
});
//route
// app.get("/movie", function (req, res) {
//   res.send({
//     text: "Hello World",
//   });
// });
