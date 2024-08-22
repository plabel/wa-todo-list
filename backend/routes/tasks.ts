import { NextFunction, Request, Response, Router } from 'express';
import { prisma } from '../prisma';
import { Task } from '@prisma/client';
import { logger } from '../utils/logger';
const router = Router();

export function getMany(_req: Request, res: Response, _next: NextFunction) {
  prisma.task.findMany()
    .then((tasks: Task[]) => res.send({
      data: tasks,
      meta: {
        count: tasks.length
      }
    })).catch((error) => {
      logger.warn(error)
      res.status(500).send({ errors: [error] })
    })
}

export function getOne(req: Request, res: Response, _next: NextFunction) {
  prisma.task.findUnique({
    where: {
      id: Number(req.params.id),
    }
  })
    .then((task: Task | null) => res.send({
      data: task,
    })).catch((error) => {
      logger.warn(error)
      res.status(500).send({ errors: [error] })
    })
}
export function deleteOne(req: Request, res: Response, _next: NextFunction) {
  prisma.task.delete({
    where: {
      id: Number(req.params.id),
    }
  })
    .then(({ id }: Task) => res.send({
      data: {
        id,
      },
    })).catch((error) => {
      logger.warn(error)
      res.status(500).send({ errors: [error] })
    })
}

export function createOne(req: Request, res: Response, _next: NextFunction) {
  prisma.task.create({
    data: {
      title: req.body.title,
      description: req.body.description,
    }
  }).then((task: Task) => {
    res.send({ data: task });
  }).catch((error) => {
    logger.warn(error)
    res.status(500).send({ errors: [error] })
  })
}

router.get('/', getMany);

router.get('/:id', getOne);

router.delete('/:id', deleteOne);

router.post('/create', createOne);

export default router;
