import { NextFunction, Request } from 'express';

export type GetManyUnitTestCase = {
    req: Request;
    _next: NextFunction;
    description: string;
    prismaCallSuccess: boolean;
    sendCalledWith: unknown;
}

export const testCases: GetManyUnitTestCase[] = [
    {
        req: {},
        _next: () => null,
        description: `
          Given the prisma call succeeds
          Then it calls send with the right arguments
        `,
        prismaCallSuccess: true,
        sendCalledWith: { data: {}, meta: { count: undefined } }
    },
    {
        req: {},
        _next: () => null,
        description: `
          Given the prisma call fails
          Then it calls send with the right arguments
        `,
        prismaCallSuccess: false,
        sendCalledWith: { errors: [new Error()] }
    },
] as unknown as GetManyUnitTestCase[];