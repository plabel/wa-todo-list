import ListItem from '@mui/material/ListItem';
import { IconButton, ListItemText, Stack, TextField } from '@mui/material';
import { TodoItemProps } from './types';
import { editTodoItem } from './helpers/edit-todo-item';
import DoneIcon from '@mui/icons-material/Done';
import { deleteTodoItem } from './helpers/delete-todo-item';

export function TodoItem({ titleValue, descriptionValue, index, dispatch }: TodoItemProps) {
    return (<>
        <ListItem>
            <IconButton onClick={() => deleteTodoItem(dispatch, index)}>
                <DoneIcon />
            </IconButton>
            <ListItemText sx={{ marginLeft: 1 }} primary={
                <Stack>
                    <TextField
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            editTodoItem(dispatch, index, event.target.value, descriptionValue);
                        }}
                        value={titleValue}
                        label="Title"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            editTodoItem(dispatch, index, titleValue, event.target.value);
                        }}
                        multiline
                        value={descriptionValue}
                        fullWidth
                        label="Description"
                        variant="standard"
                    />
                </Stack>
            } />

        </ListItem>
    </>)
}