require('dotenv').config();
const db = require('../db/models')

import express from 'express';

const app = express();
app.use(express.json());

console.log(process.env.DB_URL);

app.get('/', async (req, res) => {
  try {
      await db.sequelize.authenticate();
      console.log(`Connection established at ${process.env.PORT}`)
  } catch (err) {
      console.log('oops:', err)
  }
});

app.get('/proteins', async (req, res) => {
  try {
    await db.Proteins.findAll();
  } catch (err) {
    console.log(err)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Oi I'm listening at http://localhost:${process.env.PORT}`);
});
