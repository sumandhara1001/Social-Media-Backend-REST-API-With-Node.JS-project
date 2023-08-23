import express  from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express(router);
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
  .connect(
    "mongodb+srv://sumandhara1001:LQ8dkz3V708I9OkE@cluster0.6p1rwya.mongodb.net/Blog"
    ) 

.then(() => app.listen(5000))
.then(() => 
console.log("Connected TO Database and Listening TO Localhost 5000"))
.catch((err) => console.log(err));




