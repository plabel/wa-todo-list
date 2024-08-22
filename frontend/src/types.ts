export type Task = {
    title: string;
    description: string;
}
export enum TasksReducerActionTypes {
    Added = 'added',
    Changed = 'changed',
    Deleted = 'deleted',
}
export type TasksReducerAction = {
    type: TasksReducerActionTypes
    task?: Task
    index?: number
}
export type TaskReducerDraft = Task[]
export type TodoItemProps = {
    titleValue: string;
    descriptionValue: string;
    index: number;
    dispatch: React.Dispatch<TasksReducerAction>;
}