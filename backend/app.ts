import express, { Express } from 'express';
import logger from 'morgan';
import indexRouter from './routes/tasks';

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/tasks/', indexRouter);

const port: string = process.env.PORT || '3000';

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

