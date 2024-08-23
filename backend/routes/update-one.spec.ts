import { Response } from "express"
import { updateOne } from "./tasks"
import { prisma } from '../prisma';
import { UpdateOneUnitTestCase, testCases } from './fixtures/update-one.fx'
jest.mock('../prisma', () => ({
    prisma: {
        task: {
            update: jest.fn(),
        }
    }
}))
jest.mock('../utils/logger', () => ({
    logger: {
        warn: () => null,
    }
}))

describe('updateOne', () => {
    it.each(testCases)(
        `$description`,
        ({ req, _next, sendCalledWith, prismaCallSuccess }: UpdateOneUnitTestCase) => {
            if (prismaCallSuccess) {
                (prisma.task.update as jest.Mock).mockImplementationOnce(async () => ({}))
            } else {
                (prisma.task.update as jest.Mock).mockImplementationOnce(async () => {
                    throw new Error()
                })
            }
            const res: Response = {
                status: () => res,
                send: (arg: unknown) => {
                    expect(arg).toEqual(sendCalledWith)
                },
            } as unknown as Response;
            updateOne(req, res, _next)
        }
    )
})