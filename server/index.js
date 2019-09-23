const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const db = require('./db');
const corsOptions = require('./cors');
const config = require('./config');
const routes = require('./routes');
const isAuthorized = require('./routes/auth/isAuthorized');
const parseErrors = require('./utils/parseErrors');

const app = express();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.append('Access-Control-Allow-Credentials', 'true');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(helmet());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(parseErrors);

app.listen(config.port, () => {
  console.info(`Server ${config.env} started at port ${config.port}`);
});
