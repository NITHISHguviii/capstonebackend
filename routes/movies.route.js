import express from "express";
import {
  getMovies,
  getMovieByid,
  createMovies,
  deleteMovies,
  addMovies,
} from "../services/movies.service.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();
router.get("/", async function (request, response) {
  if (request.query.rating) {
    request.query.rating = +request.query.rating;
  }
  console.log(request.query);

  const movie = await getMovies(request);
  response.send(movie);
});
router.get("/", function (request, response) {
  response.send(movies);
});
router.get("/:id", async function (request, response) {
  const { id } = request.params;
  //  console.log(request.params, id);
  //  const movie = movies.find((mv) => mv.id === id);
  const movie = await getMovieByid(id);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "message not found" });
});
router.post("/", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await createMovies(data);
  response.send(result);
});
router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  //  console.log(request.params, id);
  //  const movie = movies.find((mv) => mv.id === id);
  const result = await deleteMovies(id);
  result.deletedCount > 0
    ? response.send({ message: "movie deleted sucessfully" })
    : response.status(404).send({ message: "message not found" });
});
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  //  console.log(request.params, id);
  //  const movie = movies.find((mv) => mv.id === id);
  const result = await addMovies(id, data);

  response.send(result);
});
export default router;
