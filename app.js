import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { router as adminRoutes } from "./routes/admin.js";
import { router as shopRoutes } from "./routes/shop.js";

const app = express();

const __direname = path.dirname(fileURLToPath(import.meta.url));

// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next(); //Allows the request to continue to the next middleware
// });

//Parser of the body
//With build-in package
app.use(express.urlencoded({ extended: true }));

//Allowing for static files such as css to be loaded
app.use(express.static(path.join(__direname, "public")));

// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   next();
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

//404 page
app.use((req, res, next) => {
  // res.status(404).send("<h1>Page not found!</h1>");
  res.status(404).sendFile(path.join(__direname, "views", "404.html"));
});

app.listen(3000);
