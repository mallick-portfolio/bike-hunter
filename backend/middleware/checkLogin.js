const jwt = require("jsonwebtoken");
const checkLogin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JSON_WEB_TOKEN);
    const { userName, email } = decoded;
    (req.userName = userName), (req.email = email);
    next();
  } catch(err) {
    console.log(err)
    next("I am error from token with checklogin");
  }
};

module.exports = checkLogin;
