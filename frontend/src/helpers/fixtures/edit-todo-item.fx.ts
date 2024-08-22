import { TasksReducerAction } from "../../types";

export type EditTodoItemUnitTestCase = {
    dispatch: React.Dispatch<TasksReducerAction>,
    description: string,
    index: number,
    didRun: boolean,
    title: string,
    descriptionArg: string,
    didThrow: boolean,
}

export const testCases: EditTodoItemUnitTestCase[] = [
    {
        dispatch: () => null,
        description: `
          Given a valid dispatch function
          Then it runs
            And does not throw
        `,
        didRun: true,
        index: 0,
        title: 'string',
        descriptionArg: 'string',
        didThrow: false,
    },
    {
        dispatch: () => {
            throw new Error()
        },
        description: `
          Given a throwing dispatch function
          Then it runs
            And does throw
        `,
        didRun: true,
        index: 0,
        title: 'string',
        descriptionArg: 'string',
        didThrow: true,
    },
]