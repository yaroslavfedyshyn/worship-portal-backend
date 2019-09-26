const GENERATE_SESSION_TOKEN_LENGTH = 60;
const GENERATE_RESET_PASSWORD_TOKEN_LENGTH = 30;
const ENCRYPT_SALT_ROUNDS = 10;
const WELCOME_EMAIL_CONTENT = 'We heard that our company just hired you to be a part of our growing team. Congratulations and in behalf of our members and supervisors, we would like to welcome you. We are all happy and excited for the upbringing of our company.';

module.exports = {
  GENERATE_SESSION_TOKEN_LENGTH,
  GENERATE_RESET_PASSWORD_TOKEN_LENGTH,
  ENCRYPT_SALT_ROUNDS,
  WELCOME_EMAIL_CONTENT
};
