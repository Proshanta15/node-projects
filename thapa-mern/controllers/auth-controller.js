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
    res.send("This is the registration page");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

export { homePage, registrationPage };

