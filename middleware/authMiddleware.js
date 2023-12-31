const jwt = require("jsonwebtoken");
const USER = require("../models/userModel");
const errorHandler = require("../utils/errorHandler");

const protect = async (req, res, next) => {
  try {
 
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
       let  token = req.headers.authorization.split(" ")[1];
      
       
        if(!token){
            return next(new errorHandler("token expire", 400));
        }

 const jwtDecode = await jwt.verify(token, "abcde");

      let user = await USER.findById(jwtDecode.id)
    
      req.user=user
       next();

    }
  } catch (err) {
    return next(new errorHandler("invalid token  ", 400));
  }
};

module.exports = protect;

