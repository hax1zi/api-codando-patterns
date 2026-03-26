import createApp from './app';

export function createServer() {
  return createApp();
}

if (require.main === module) {
  const app = createServer();
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on ${port}`));
}

export default createServer;
