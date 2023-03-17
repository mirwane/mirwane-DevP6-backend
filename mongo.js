const mongoose = require("mongoose");
const password = "YQLCbEmKfCdQ517K";
const uri = `mongodb+srv://mir193:${password}@cluster0.xevkt4r.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("erreur connection mongo", err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

module.exports = { mongoose, User };
