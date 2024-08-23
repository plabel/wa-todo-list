import List from '@mui/material/List';
import { TodoItem } from './TodoItem';
import { AppBar, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useImmerReducer } from 'use-immer';
import { tasksReducer } from './helpers/tasks-reducer';
import { addTodoItem } from './helpers/add-todo-item';
import { RestClient, Task, TaskReducerDraft, TasksReducerAction, TasksReducerActionTypes } from './types';
import { useRestClient } from './use-rest-client';
import { useEffect, useState } from 'react';
import { SnackbarAlert } from './SnackbarAlert'
import { useSnackbarAlert } from './use-snackbar-alert';
import { AlertMsgs, errorSeverity } from './const';

function App() {
  const { open, setOpen, msg, severity, alertFn } = useSnackbarAlert();
  const restClient: RestClient = useRestClient(alertFn);
  const [tasks, dispatch] = useImmerReducer<TaskReducerDraft, TasksReducerAction>(tasksReducer, []);
  const [tasksLoaded, setTasksLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (!tasksLoaded) {
      setTasksLoaded(true)
      restClient.getMany()
        .then((tasks: Task[] | undefined) => {
          dispatch({
            type: TasksReducerActionTypes.Emptied,
          })
          tasks?.forEach((task: Task) => addTodoItem(dispatch, task))
        })
        .catch(() => {
          alertFn(AlertMsgs.Error, errorSeverity)
        });
    }
  }, [tasksLoaded, setTasksLoaded, alertFn, dispatch, restClient]);
  useEffect(() => { }, [open])


  return (
    <Paper sx={{ height: 1, overflowY: 'auto' }}>
      <AppBar color='transparent' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={async () => {
              const createdTask: Task | undefined = await restClient.create();
              addTodoItem(dispatch, createdTask)
            }}
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
                task={task}
                index={index}
                key={index}
                dispatch={dispatch}
                restClient={restClient}
              ></TodoItem>
          )
        }
      </List>
      <SnackbarAlert
        open={open}
        setOpen={setOpen}
        msg={msg}
        severity={severity}
      >
      </SnackbarAlert>
    </Paper>
  )
}

export default App
