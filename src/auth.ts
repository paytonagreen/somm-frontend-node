const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export function generateAccessToken(username: string) {
  return jwt.sign(username, process.env.TOKEN_SECRET, {
    expiresIn: '2592000s',
  });
}

export function authenticateToken(req: any, res: any, next: any) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as String,
    (err: any, user: any) => {
      if (err) return res.sendStatus(403);

      req.user = user;
    }
  );
}

export function hashPassword(plainTextPassword: string) {
  const saltRounds = 10;
  bcrypt.hash(plainTextPassword, saltRounds, function (err: any, hash: any) {
    if (err) {
      throw new Error(err);
    } else {
      return hash;
    }
  });
}
