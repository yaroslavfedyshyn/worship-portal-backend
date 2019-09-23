const mongoose = require('mongoose');

const { DB } = require('./config');

mongoose.connect(
  DB,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
  },
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, `connection error: ${console}`));
db.once('open', () => console.log('DB is connected!'));
