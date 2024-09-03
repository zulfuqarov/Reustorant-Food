import jwt from "jsonwebtoken";

const authenticateToken = (role) => {
  return (req, res, next) => {
    const token = req.cookies.jwtToken;

    if (!token) return res.status(401).json({ message: "Token is required" });

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_CODE);

    req.userId = decodedToken.sub;
    req.userRole = decodedToken.role;

    if (req.userRole !== role) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};
