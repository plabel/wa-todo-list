import { TasksReducerAction, TasksReducerActionTypes } from "../types";

export function addTodoItem(dispatch: React.Dispatch<TasksReducerAction>) {
    dispatch({
        type: TasksReducerActionTypes.Added,
        task: {
            title: '',
            description: '',
        }
    })
}