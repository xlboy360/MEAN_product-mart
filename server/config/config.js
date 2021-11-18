require("dotenv").config();

const envVars = process.env;

module.exports = {
  port: envVars.PORT,
  env: envVars.NODE_ENV,
  mongo: {
    uri: envVars.MONGODB_UIR,
    port: envVars.MONGODB_PORT,
    isDebug: envVars.MONGOOSE_DEBUG
  }
};
