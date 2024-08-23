import { Task, TasksReducerAction, TasksReducerActionTypes } from "../types";
import { defaultTask } from "../const";

export function addTodoItem(dispatch: React.Dispatch<TasksReducerAction>, task: Task = defaultTask) {
    dispatch({
        type: TasksReducerActionTypes.Added,
        task,
    })
}