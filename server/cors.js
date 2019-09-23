// eslint-disable-next-line no-undef
const config = require('./config');

const productionOptions = {
  origin(origin, callback) {
    if (config.whiteListOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const developmentOptions = {
  origin(origin, callback) {
    callback(null, true);
  },
};

module.exports = config.isDev ? developmentOptions : productionOptions;
