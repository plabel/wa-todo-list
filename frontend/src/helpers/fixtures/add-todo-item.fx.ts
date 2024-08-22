import { TasksReducerAction } from "../../types";

export type AddTodoItemUnitTestCase = {
    dispatch: React.Dispatch<TasksReducerAction>,
    description: string,
    didRun: boolean,
    didThrow: boolean,
}

export const testCases: AddTodoItemUnitTestCase[] = [
    {
        dispatch: () => null,
        description: `
          Given a valid dispatch function
          Then it runs
            And does not throw
        `,
        didRun: true,
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
        didThrow: true,
    },
]