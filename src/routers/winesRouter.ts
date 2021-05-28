import express from 'express';
import { models } from '../index';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const wines = await models.Wine.findAll();
    res.send(wines);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const wine = await models.Wine.findByPk(req.params.id);
    res.send(wine);
  } catch (err) {
    console.log(err);
  }
});

router.post('/wines', async (req, res) => {
  try {
    const wine = await models.Wine.create({
      name: req.body.name,
      description: req.body.description,
    });
    res.send(wine);
  } catch (err) {
    console.log(err);
  }
});

export default router;
