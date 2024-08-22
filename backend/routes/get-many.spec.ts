import { Response } from "express"
import { getMany } from "./tasks"
import { prisma } from '../prisma';
import { GetManyUnitTestCase, testCases } from './fixtures/get-many.fx'
jest.mock('../prisma', () => ({
    prisma: {
        task: {
            findMany: jest.fn(),
        }
    }
}))
jest.mock('../utils/logger', () => ({
    logger: {
        warn: () => null,
    }
}))

describe('getMany', () => {
    it.each(testCases)(
        `$description`,
        ({ req, _next, sendCalledWith, prismaCallSuccess }: GetManyUnitTestCase) => {
            if (prismaCallSuccess) {
                (prisma.task.findMany as jest.Mock).mockImplementationOnce(async () => ({}))
            } else {
                (prisma.task.findMany as jest.Mock).mockImplementationOnce(async () => {
                    throw new Error()
                })
            }
            const res: Response = {
                status: () => res,
                send: (arg: unknown) => {
                    expect(arg).toEqual(sendCalledWith)
                },
            } as unknown as Response;
            getMany(req, res, _next)
        }
    )
})