import express from 'express';
import { generateAccessToken, hashPassword } from '../auth';
import { models } from '../index';

const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/signin', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let token;
  if (username) {
    const dbUser = await models.User.findOne({ where: { name: username } });
    const hashedPassword = hashPassword(password);
    const match = await bcrypt.compare(hashedPassword, dbUser.password);
    if (match) {
      token = generateAccessToken(username);
    } else {
      throw new Error(
        `We couldn't find a user with that username/password combo`
      );
    }
    res.send(token);
  }
});

export default router;
