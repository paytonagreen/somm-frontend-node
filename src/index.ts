require('dotenv').config();
const db = require('../db/models');

import express from 'express';

import proteinsRouter from './routers/proteinsRouter';
import grapesRouter from './routers/grapesRouter';
import winesRouter from './routers/winesRouter';
import countriesRouter from './routers/countriesRouter';

const app = express();
app.use(express.json());

export const models = db.sequelize.models;

app.use('/proteins', proteinsRouter);
app.use('/grapes', grapesRouter);
app.use('/wines', winesRouter);
app.use('/countries', countriesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Oi I'm listening at http://localhost:${process.env.PORT}`);
});
