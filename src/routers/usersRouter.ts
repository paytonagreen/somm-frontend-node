import express from 'express';
import { hashPassword } from '../auth';

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
      const hashedPassword = hashPassword(plainTextPassword);
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
