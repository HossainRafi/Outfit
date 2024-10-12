const User = require("./user.model");

// user registration
const userRegistration = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({ username, email, password });
    await user.save();
    res.status(200).send({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error registering a user ", error);
    res.status(500).send({ message: "Registration failed!" });
  }
};

// module exports
module.exports = {
  userRegistration,
};
