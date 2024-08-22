import { Response } from "express"
import { createOne } from "./tasks"
import { prisma } from '../prisma';
import { CreateOneUnitTestCase, testCases } from './fixtures/create-one.fx'
jest.mock('../prisma', () => ({
    prisma: {
        task: {
            create: jest.fn(),
        }
    }
}))
jest.mock('../utils/logger', () => ({
    logger: {
        warn: () => null,
    }
}))

describe('createOne', () => {
    it.each(testCases)(
        `$description`,
        ({ req, _next, sendCalledWith, prismaCallSuccess }: CreateOneUnitTestCase) => {
            if (prismaCallSuccess) {
                (prisma.task.create as jest.Mock).mockImplementationOnce(async () => ({}))
            } else {
                (prisma.task.create as jest.Mock).mockImplementationOnce(async () => {
                    throw new Error()
                })
            }
            const res: Response = {
                status: () => res,
                send: (arg: unknown) => {
                    expect(arg).toEqual(sendCalledWith)
                },
            } as unknown as Response;
            createOne(req, res, _next)
        }
    )
})