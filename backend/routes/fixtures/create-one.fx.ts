import { NextFunction, Request } from 'express';

export type CreateOneUnitTestCase = {
    req: Request;
    _next: NextFunction;
    description: string;
    prismaCallSuccess: boolean;
    sendCalledWith: unknown;
}

export const testCases: CreateOneUnitTestCase[] = [
    {
        req: {
            body: {
                title: '',
                description: '',
            }
        },
        _next: () => null,
        description: `
          Given the prisma call succeeds
          Then it calls send with the right arguments
        `,
        prismaCallSuccess: true,
        sendCalledWith: { data: {} }
    },
    {
        req: {
            body: {
                title: '',
                description: '',
            }
        },
        _next: () => null,
        description: `
          Given the prisma call fails
          Then it calls send with the right arguments
        `,
        prismaCallSuccess: false,
        sendCalledWith: { errors: [new Error()] }
    },
] as unknown as CreateOneUnitTestCase[];