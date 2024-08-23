import { AlertColor } from "@mui/material";

export type Task = {
    title: string;
    description: string;
    id?: number;
}
export enum TasksReducerActionTypes {
    Added = 'added',
    Changed = 'changed',
    Deleted = 'deleted',
    Emptied = 'emptied',
}
export type TasksReducerAction = {
    type: TasksReducerActionTypes
    task?: Task
    index?: number
}
export type TaskReducerDraft = Task[]
export type TodoItemProps = {
    index: number;
    task: Task;
    restClient: RestClient;
    dispatch: React.Dispatch<TasksReducerAction>;
}
export type SnackbarAlertProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    msg: string;
    severity: AlertColor;
}
export type RestClient = {
    create: () => Promise<Task | undefined>;
    update: (task: Task, id?: number) => Promise<unknown>;
    getMany: () => Promise<Task[] | undefined>;
    delete: (id?: number) => Promise<void>;
}
export interface JsonRes {
    data?: unknown;
    errors?: unknown[];
};
export interface CreateRes extends JsonRes {
    data?: Task;
}
export interface GetManyRes extends JsonRes {
    data?: Task[];
}