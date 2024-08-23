import { TaskReducerDraft, TasksReducerAction, TasksReducerActionTypes } from "../types";

export function tasksReducer(draft: TaskReducerDraft, action: TasksReducerAction) {
    switch (action.type) {
        case TasksReducerActionTypes.Added: {
            if (action.task !== undefined) {
                draft.push(action.task);
            }
            break;
        }
        case TasksReducerActionTypes.Changed: {
            if (action.task !== undefined && action.index !== undefined) {
                draft[action.index] = action.task;
            }
            break;
        }
        case TasksReducerActionTypes.Deleted: {
            return draft.filter((_, index) => index !== action.index);
        }
        case TasksReducerActionTypes.Emptied: {
            return draft = [];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}