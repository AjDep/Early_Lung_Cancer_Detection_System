// Middleware functions written in Express related to authentication

const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = decoded;
    next();
  });
};