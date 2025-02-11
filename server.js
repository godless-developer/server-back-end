const express = require("express");
const { upComingMovies } = require("./utils/movieUpComing");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser());

let movies = [];

const addMovies = (movieData) => {
  movies.push(movieData);
  console.log(movies);
};
app.get("/", (request, response) => {
  response.send({
    data: upComingMovies,
    text: "hello world",
  });
});

app.post("/movie", (request, response) => {
  console.log("body!", request.body);
  addMovies(request.body);
  response.send("Movie succesfully added ");
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
