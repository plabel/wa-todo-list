import { TaskReducerDraft, TasksReducerAction } from "../types";

export function tasksReducer(draft: TaskReducerDraft, action: TasksReducerAction) {
    switch (action.type) {
        case 'added': {
            if (action.task !== undefined) {
                draft.push(action.task);
            }
            break;
        }
        case 'changed': {
            if (action.task !== undefined && action.index !== undefined) {
                draft[action.index] = action.task;
            }
            break;
        }
        case 'deleted': {
            return draft.filter((_, index) => index !== action.index);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}