import express from 'express';

import { models } from '../index';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const grapes = await models.Grape.findAll();
    res.send(grapes);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const grape = await models.Grape.findByPk(req.params.id);
    return res.send(grape);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const grape = await models.Grape.create({
      name: req.body.name,
    });
    return res.send(grape);
  } catch (err) {
    console.log(err);
  }
});

export default router;
