import List from '@mui/material/List';
import { TodoItem } from './TodoItem';
import { AppBar, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useImmerReducer } from 'use-immer';
import { tasksReducer } from './helpers/tasks-reducer';
import { addTodoItem } from './helpers/add-todo-item';
import { Task, TaskReducerDraft, TasksReducerAction } from './types';

function App() {
  const [tasks, dispatch] = useImmerReducer<TaskReducerDraft, TasksReducerAction>(tasksReducer, []);


  return (
    <Paper sx={{ height: 1, overflowY: 'auto' }}>
      <AppBar color='transparent' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => addTodoItem(dispatch)}
          >
            <AddIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do List
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        {
          tasks.map(
            (task: Task, index: number) =>
              <TodoItem
                titleValue={task.title}
                descriptionValue={task.description}
                index={index}
                key={index}
                dispatch={dispatch}
              ></TodoItem>
          )
        }
      </List>
    </Paper>
  )
}

export default App
