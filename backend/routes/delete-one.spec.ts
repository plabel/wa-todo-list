import { Response } from "express"
import { deleteOne } from "./tasks"
import { prisma } from '../prisma';
import { DeleteOneUnitTestCase, testCases } from './fixtures/delete-one.fx'
jest.mock('../prisma', () => ({
    prisma: {
        task: {
            delete: jest.fn(),
        }
    }
}))
jest.mock('../utils/logger', () => ({
    logger: {
        warn: () => null,
    }
}))

describe('deleteOne', () => {
    it.each(testCases)(
        `$description`,
        ({ req, _next, sendCalledWith, prismaCallSuccess }: DeleteOneUnitTestCase) => {
            if (prismaCallSuccess) {
                (prisma.task.delete as jest.Mock).mockImplementationOnce(async () => ({}))
            } else {
                (prisma.task.delete as jest.Mock).mockImplementationOnce(async () => {
                    throw new Error()
                })
            }
            const res: Response = {
                status: () => res,
                send: (arg: unknown) => {
                    expect(arg).toEqual(sendCalledWith)
                },
            } as unknown as Response;
            deleteOne(req, res, _next)
        }
    )
})