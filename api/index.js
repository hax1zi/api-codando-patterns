// Vercel serverless wrapper for the Express app
// Using a direct handler so we don't require serverless-http at runtime.
const { createServer } = require('../dist/server');
const app = createServer();

module.exports = (req, res) => {
  // Express apps are callable: app(req, res)
  return app(req, res);
};
