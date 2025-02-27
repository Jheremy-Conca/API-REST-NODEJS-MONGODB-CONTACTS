const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./connection/dbConnection");
const cors = require("cors");
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", require("./routes/contacRoutes"));
app.use(errorHandler);
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
