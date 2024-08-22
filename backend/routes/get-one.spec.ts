import { Response } from "express"
import { getOne } from "./tasks"
import { prisma } from '../prisma';
import { GetOneUnitTestCase, testCases } from './fixtures/get-one.fx'
jest.mock('../prisma', () => ({
    prisma: {
        task: {
            findUnique: jest.fn(),
        }
    }
}))
jest.mock('../utils/logger', () => ({
    logger: {
        warn: () => null,
    }
}))

describe('getOne', () => {
    it.each(testCases)(
        `$description`,
        ({ req, _next, sendCalledWith, prismaCallSuccess }: GetOneUnitTestCase) => {
            if (prismaCallSuccess) {
                (prisma.task.findUnique as jest.Mock).mockImplementationOnce(async () => ({}))
            } else {
                (prisma.task.findUnique as jest.Mock).mockImplementationOnce(async () => {
                    throw new Error()
                })
            }
            const res: Response = {
                status: () => res,
                send: (arg: unknown) => {
                    expect(arg).toEqual(sendCalledWith)
                },
            } as unknown as Response;
            getOne(req, res, _next)
        }
    )
})