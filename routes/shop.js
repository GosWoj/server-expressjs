import express from "express";
import path from "path";
import { fileURLToPath } from "url";

export const router = express.Router();

//Fixes __dirname not defined error
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//If it's not router.use then it's looking for exact match
//If users tries url that wasn't covered, it will return
//"Cannot GET /url"
router.get("/", (req, res, next) => {
  //   console.log("In another middleware");
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});
