import ListItem from '@mui/material/ListItem';
import { IconButton, ListItemText, Stack, TextField } from '@mui/material';
import { TodoItemProps } from './types';
import { editTodoItem } from './helpers/edit-todo-item';
import DoneIcon from '@mui/icons-material/Done';
import { deleteTodoItem } from './helpers/delete-todo-item';

export function TodoItem({ index, dispatch, task, restClient }: TodoItemProps) {
    const { title, description, id } = task;
    return (
        <ListItem>
            <IconButton className='doneBtn' onClick={
                async () => {
                    await restClient.delete(id)
                    deleteTodoItem(dispatch, index)
                }
            }>
                <DoneIcon />
            </IconButton>
            <ListItemText sx={{ marginLeft: 1 }} primary={
                <Stack>
                    <TextField
                        onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
                            editTodoItem(dispatch, index, event.target.value, description, id);
                        }}
                        onBlur={async () => {
                            await restClient.update(task, id)
                        }}
                        value={title}
                        label="Title"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
                            editTodoItem(dispatch, index, title, event.target.value, id);
                        }}
                        onBlur={async () => {
                            await restClient.update(task, id)
                        }}
                        multiline
                        value={description}
                        fullWidth
                        label="Description"
                        variant="standard"
                    />
                </Stack>
            } />
        </ListItem>
    )
}