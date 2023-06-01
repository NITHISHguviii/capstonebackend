import { client } from "../index.js";

export async function addMovies(id, data) {
  return await client
    .db("movies2")
    .collection("moviesdata3")
    .updateOne({ id: id }, { $set: data });
}
export async function deleteMovies(id) {
  return await client
    .db("movies2")
    .collection("moviesdata3")
    .deleteOne({ id: id });
}
export async function createMovies(data) {
  return await client.db("movies2").collection("moviesdata3").insertMany(data);
}
export async function getMovieByid(id) {
  return await client
    .db("movies2")
    .collection("moviesdata3")
    .findOne({ id: id });
}
export async function getMovies(request) {
  return await client
    .db("movies2")
    .collection("moviesdata3")
    .find(request.query)
    .toArray();
}
