import ListItem from '@mui/material/ListItem';
import { Stack, TextField } from '@mui/material';

export function TodoItem() {
    return (<>
        <ListItem>
            <Stack>
                <TextField label="Title" variant="standard" />
                <TextField fullWidth label="Description" variant="standard" />
            </Stack>
        </ListItem>
    </>)
}