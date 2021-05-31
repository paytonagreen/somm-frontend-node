import express from 'express';

import { models } from '../index';

const bcrypt = require('bcrypt');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await models.User.findByPk(req.params.id);
    return res.send(user);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    if (req.body.password) {
      const plainTextPassword = req.body.password;
      const saltRounds = 10;
      const hashedPassword = bcrypt.hash(
        plainTextPassword,
        saltRounds,
        function (err: any, hash: any) {
          if (err) {
            throw new Error(err);
          } else {
            return hash;
          }
        }
      );
      const user = await models.User.create({
        name: req.body.name,
        password: hashedPassword,
      });
      return res.send(user);
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
