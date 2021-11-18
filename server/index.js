const app = require("./config/express");
const config = require("./config/config");

//Initialize mongo
require("./config/mongoose");

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port} (${config.env})`);
});
