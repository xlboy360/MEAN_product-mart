const app = require("./config/express");
const config = require("./config/config");

app.listen(config.port, () => {
  console.log(`Server starten on port ${config.port} (${config.env})`);
});
