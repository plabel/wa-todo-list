import { AlertColor } from '@mui/material';
import { Task } from './types'

export const defaultTask: Task = {
    title: '',
    description: '',
};
export const defaultSeverity: AlertColor = 'info';
export const errorSeverity: AlertColor = 'error';
export const serverUrl: string = 'http://localhost:3000';
export enum AlertMsgs {
    TaskSaved = "Task Saved!",
    TaskDeleted = "Task Deleted!",
    Error = "Something went wrong, please try again later.",
}