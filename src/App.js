const express = require('express');
const cors = require('cors');
const logger = require('./utils/Logger');

const app = express();
const port = process.env.PORT || 3000;

const runApp = () => {
  try {
    app.use(cors());
    app.get('/api/v1', (req, res) => res.send({ hello: 'Some response' }));
    app.listen(port, () => {
      logger.info(`Server started on port ${port}`);
    });
  } catch (error) {
    logger.error('Server failed to start', error);
  }
};

module.exports = runApp;
