import { Task, TaskReducerDraft, TasksReducerAction, TasksReducerActionTypes } from "../../types";

export type TasksReducerUnitTestCase = {
    draft: TaskReducerDraft,
    finalDraft: TaskReducerDraft,
    action: TasksReducerAction,
    description: string,
    didThrow: boolean,
}

const task: Task = {
    title: 'a',
    description: 'b'
}

const taskB: Task = {
    title: 'c',
    description: 'd'
}

export const testCases: TasksReducerUnitTestCase[] = [
    {
        description: `
          Given action.type == Added
          Then it adds a task
        `,
        draft: [],
        finalDraft: [task],
        action: {
            type: TasksReducerActionTypes.Added,
            task,
        },
        didThrow: false,
    },
    {
        description: `
          Given action.type == Changed
          Then it changes a task 
        `,
        draft: [task],
        finalDraft: [taskB],
        action: {
            type: TasksReducerActionTypes.Changed,
            task: taskB,
            index: 0
        },
        didThrow: false,
    },
    {
        description: `
          Given action.type == Deleted
          Then it deletes a task 
        `,
        draft: [task],
        finalDraft: [],
        action: {
            type: TasksReducerActionTypes.Deleted,
            index: 0
        },
        didThrow: false,
    },
    {
        description: `
          Given action.type == ''
          Then it throws
        `,
        draft: [task],
        finalDraft: [],
        action: {
            type: '' as TasksReducerActionTypes,
        },
        didThrow: true,
    },
]