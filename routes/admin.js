import express from "express";
import path from "path";
import { fileURLToPath } from "url";

export const router = express.Router();

//Fixes __direname not defined error
const __direname = path.dirname(fileURLToPath(import.meta.url));

//Reachable under /admin/add-product with GET request
router.get("/add-product", (req, res, next) => {
  //   console.log("In another middleware");
  //   res.send(
  //     "<form action='/admin/add-product' method='POST'><input type='text' name='title' /><button type='submit'>Add product</button></form>"
  //   );
  res.sendFile(path.join(__direname, "..", "views", "add-product.html"));
});

//app.get only fires up for GET request
//app.post only fires up for the POST request
//Reachable under /admin/add-product with POST request
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  //Redirecting
  res.redirect("/");
});
