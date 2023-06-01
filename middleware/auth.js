import jwt from "jsonwebtoken";

export const auth = (request, reponse, next) => {
  try{const token = request.header("x-auth-token");
  console.log("token", token);
  jwt.verify(token, process.env.SECRET_KEY);
  next();}catch(err){
reponse.status(401).send({message:err.message})
  }
};
