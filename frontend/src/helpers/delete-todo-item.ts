import { TasksReducerAction, TasksReducerActionTypes } from "../types";

export function deleteTodoItem(dispatch: React.Dispatch<TasksReducerAction>, index: number) {
    dispatch({
        type: TasksReducerActionTypes.Deleted,
        index,
    })
}