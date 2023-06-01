import { client } from "../index.js";
import bcrpt from "bcrypt";

export async function generateHashedPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrpt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrpt.hash(password, salt);
  console.log(salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function CreateUser(data) {
  return await client.db("movies2").collection("users").insertOne(data);
}
export async function getuserbyname(username) {
  return await client
    .db("movies2")
    .collection("users")
    .findOne({ username: username });
}
