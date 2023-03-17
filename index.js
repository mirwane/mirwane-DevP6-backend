const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
require("./mongo");
const { createUser } = require("./user");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/api/auth/signup", createUser);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => {
  console.log(`port http://localhost:${port}`);
});
