const dotenv = require('dotenv');

dotenv.config();

const DEFAULT_PORT = 3001;

const env = process.env.NODE_ENV;
const { DB } = process.env;
const frontenHost = process.env.FRONTEND_HOST;
const frontendResetPasswordUrl = process.env.FRONTEND_RESET_PASSWORD_URL;

const smtpHost = process.env.SMTP_HOST;
const smtpService = process.env.SMTP_SERVICE;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

const isDev = env === 'development';

const whiteListOriginsStr = process.env.WHITE_LIST_ORIGINS || '';
const whiteListOrigins = whiteListOriginsStr ? whiteListOriginsStr.split(',') : [];

module.exports = {
  DB,
  env,
  isDev,
  port: process.env.PORT || DEFAULT_PORT,
  frontenHost,
  frontendResetPasswordUrl,
  smtpHost,
  smtpService,
  smtpPort,
  smtpUser,
  smtpPassword,
  whiteListOrigins,
};
