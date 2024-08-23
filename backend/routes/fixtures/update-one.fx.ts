import { NextFunction, Request } from 'express';

export type UpdateOneUnitTestCase = {
    req: Request;
    _next: NextFunction;
    description: string;
    prismaCallSuccess: boolean;
    sendCalledWith: unknown;
}

export const testCases: UpdateOneUnitTestCase[] = [
    {
        req: {
            params: {
                id: '1',
            },
            body: {
                title: '',
                description: '',
            },
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
            params: {
                id: '1',
            },
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
] as unknown as UpdateOneUnitTestCase[];