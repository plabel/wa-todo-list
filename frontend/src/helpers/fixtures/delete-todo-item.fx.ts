import { TasksReducerAction } from "../../types";

export type DeleteTodoItemUnitTestCase = {
    dispatch: React.Dispatch<TasksReducerAction>,
    description: string,
    index: number,
    didRun: boolean,
    didThrow: boolean,
}

export const testCases: DeleteTodoItemUnitTestCase[] = [
    {
        dispatch: () => null,
        description: `
          Given a valid dispatch function
          Then it runs
            And does not throw
        `,
        didRun: true,
        index: 0,
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
        didThrow: true,
    },
]