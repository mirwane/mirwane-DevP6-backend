const { User } = require("./user");

function createUser(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user
    .save()
    .then((res) => res.send("utilisateur créé"))
    .catch((err) => console.error("erreur création utilisateur", err));
}

module.exports = { createUser };
