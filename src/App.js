const express = require('express');
const cors = require('cors');
const logger = require('./utils/Logger');
const grapqlRouter = require('./graphql');

const app = express();
const port = process.env.PORT || 3000;

const runApp = () => {
  try {
    app.use(cors());
    app.use('/api/graphql', grapqlRouter);
    app.listen(port, () => {
      logger.info(`Server started on port ${port}`);
    });
  } catch (error) {
    logger.error('Server failed to start', error);
  }
};

module.exports = runApp;
