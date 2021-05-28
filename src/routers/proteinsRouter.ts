import express from 'express';

import { models } from '../index';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const proteins = await models.Protein.findAll();
    res.send(proteins);
  } catch (err) {
    console.log(err);
  }
}),
  router.get('/:id', async (req, res) => {
    try {
      const protein = await models.Protein.findByPk(req.params.id);
      res.send(protein);
    } catch (err) {
      console.log(err);
    }
  });

router.post('/', async (req, res) => {
  try {
    const protein = await models.Protein.create({
      name: req.body.name,
    });
    return res.send(protein);
  } catch (err) {
    console.log(err);
  }
});

export default router;
