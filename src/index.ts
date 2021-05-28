require('dotenv').config();
const db = require('../db/models');

import express from 'express';

const app = express();
app.use(express.json());

const models = db.sequelize.models;

app.get('/', async (req, res) => {
  try {
    await db.sequelize.authenticate();
    console.log(`Connection established at ${process.env.PORT}`);
  } catch (err) {
    console.log('oops:', err);
  }
});

app.get('/proteins', async (req, res) => {
  try {
    const proteins = await models.Protein.findAll();
    res.send(proteins);
  } catch (err) {
    console.log(err);
  }
});

app.get('/proteins/:id', async (req, res) => {
  try {
    const protein = await models.Protein.findByPk(req.params.id);
    res.send(protein);
  } catch (err) {
    console.log(err);
  }
});

app.post('/proteins', async (req, res) => {
  try {
    const protein = await models.Protein.create({
      name: req.body.name,
    });
    return res.send(protein);
  } catch (err) {
    console.log(err);
  }
});

app.get('/grapes', async (req, res) => {
  try {
    const grapes = await models.Grape.findAll();
    res.send(grapes);
  } catch (err) {
    console.log(err);
  }
});

app.get('/grapes/:id', async (req, res) => {
  try {
    const grape = await models.Grape.findByPk(req.params.id);
    return res.send(grape);
  } catch (err) {
    console.log(err);
  }
});

app.post('/grapes', async (req, res) => {
  try {
    const grape = await models.Grape.create({
      name: req.body.name,
    });
    return res.send(grape);
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Oi I'm listening at http://localhost:${process.env.PORT}`);
});
