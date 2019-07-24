import express from "express";
import { routes } from "./src/routes/crmRoutes";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/CRMdb`, { useNewUrlParser: true });

// Body Parser was bundled back into Express as of v4.16.0
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static("public"));

routes(app);

app.get("/", (req, res) => {
  console.log("Nothing to serve at ROOT");
  res.send(`Booya ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
