import express from 'express';

const app = express();

app.get('/', (_, res: express.Response) => res.json({ message: 'Hello World' }));

export default app;
