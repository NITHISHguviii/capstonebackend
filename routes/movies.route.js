import express from "express";
import {client} from "../index.js"
const router = express.Router();
router.get("/", async function (request, response) {
    if (request.query.rating) {
      request.query.rating = +request.query.rating;
    }
    console.log(request.query);
  
    const movie = await client
      .db("movies2")
      .collection("moviesdata3")
      .find(request.query)
      .toArray();
    response.send(movie);
  });
  router.get("/", function (request, response) {
    response.send(movies);
  });
  router.get("/:id", async function (request, response) {
    const { id } = request.params;
    //  console.log(request.params, id);
    //  const movie = movies.find((mv) => mv.id === id);
    const movie = await client
      .db("movies2")
      .collection("moviesdata3")
      .findOne({ id: id });
    movie
      ? response.send(movie)
      : response.status(404).send({ message: "message not found" });
  });
  router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);
    const result = await client
      .db("movies2")
      .collection("moviesdata3")
      .insertMany(data);
    response.send(result);
  });
  router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    //  console.log(request.params, id);
    //  const movie = movies.find((mv) => mv.id === id);
    const result = await client
      .db("movies2")
      .collection("moviesdata3")
      .deleteOne({ id: id });
    result.deletedCount > 0
      ? response.send({ message: "movie deleted sucessfully" })
      : response.status(404).send({ message: "message not found" });
  });
  router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    //  console.log(request.params, id);
    //  const movie = movies.find((mv) => mv.id === id);
    const result = await client
      .db("movies2")
      .collection("moviesdata3")
      .updateOne({ id: id }, { $set: data });
  
    response.send(result);
  });
  export default router;