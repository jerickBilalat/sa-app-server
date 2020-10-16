const express = require('express');
const config = require('config');

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  if (config.util.getEnv('NODE_CONFIG_ENV') === 'development') {
    // eslint-disable-next-line no-console
    console.log(
      `App running in ${config.util.getEnv(
        'NODE_CONFIG_ENV'
      )} at port ${PORT}, testing config value ${config.get(
        'config-test-value'
      )}`
    );
  }
});
