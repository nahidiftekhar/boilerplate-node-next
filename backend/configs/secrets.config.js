const secretConfig = {
  SALT_ROUNDS: 10,
  JWT_SECRET: "randomstring",
  REFRESH_TOKEN_SECRET: "randomstring",
  SESSION_COOKIE_SECRET: "randomstring",
  SESSION_COOKIE_NAME: "NIE_Cookie",
  ACCESS_TOKEN_EXPIRY: 43200000,
  REFRESH_TOKEN_EXPIRY: 864000000,
  ACCESS_TOKEN: "accesstoken",
  REFRESH_TOKEN: "refreshtoken"
};
module.exports = { secretConfig };
