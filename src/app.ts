import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import httpStatus from 'http-status';
import errorHandlerMiddleware from './middlewares/error-middleware';
import { messageRouter } from './routers';

const app = express();

app.use(json()); // body-parser
// app.use(cors())

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!");
});
app.use('/messages', messageRouter);
app.use(errorHandlerMiddleware);

export default app;
