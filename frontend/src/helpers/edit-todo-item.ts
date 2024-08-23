import { TasksReducerAction, TasksReducerActionTypes } from "../types";

export function editTodoItem(dispatch: React.Dispatch<TasksReducerAction>, index: number, title: string, description: string, id?: number) {
    dispatch({
        type: TasksReducerActionTypes.Changed,
        index,
        task: {
            title,
            description,
            id,
        }
    })
}