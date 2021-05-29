import express from 'express';

import { models } from '../index';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const countries = await models.Country.findAll();
    res.send(countries);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const country = await models.Country.findByPk(req.params.id);
    return res.send(country);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const country = await models.Country.create({
      name: req.body.name,
    });
    return res.send(country);
  } catch (err) {
    console.log(err);
  }
});

export default router;