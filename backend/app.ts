import express, { Express } from 'express';
import morgan from 'morgan';
import indexRouter from './routes/tasks';
import { Server } from 'http';
import { logger } from './utils/logger';

const app: Express = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/tasks/', indexRouter);

const port: string = process.env.PORT || '3000';

const server: Server = app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
});

export const serverTuple: [Express, Server] = [app, server];
