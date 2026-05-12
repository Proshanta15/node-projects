import User from "../models/user-model.js";

// Home Page Logic
const homePage = async (req, res) => {
  try {
    res.send("Welcome to the Home Page");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

// Registration Page Logic
const registrationPage = async (req, res) => {
  try {
    console.log(req.body);

    const { username, phone, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await User.create({
      username,
      phone,
      email,
      password
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

export { homePage, registrationPage };

