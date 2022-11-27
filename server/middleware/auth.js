import jwt from "jsonwebtoken";
//checking if the signed in user token is valid if the user wants to delete or post a posts
//by first checking if the user has permissions.

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      //passing the token to the req.userId
      req.userId = decodedData?.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
