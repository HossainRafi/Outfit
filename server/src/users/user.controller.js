// user registration
const userRegistration = async (req, res) => {
  try {
    res.send("From user router");
  } catch (error) {
    console.error("Error: ", error);
  }
};

// module exports
module.exports = {
  userRegistration,
};
