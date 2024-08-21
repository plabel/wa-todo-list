import List from '@mui/material/List';
import { TodoItem } from './TodoItem';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <IconButton
        onClick={() => addTodoItem(<TodoItem></TodoItem>)}
      >
        <AddIcon />
      </IconButton>
      <List>
        <TodoItem></TodoItem>
      </List>
    </>
  )
}

export default App
