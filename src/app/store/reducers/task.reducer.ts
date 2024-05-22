import { Action, createReducer, on } from '@ngrx/store';
import { addTask, editTask, deleteTask, loadTasksSuccess } from '../actions/task.actions';
import { Task } from '../../models/task.model';

export const initialState: Task[] = [];

const _taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task]),
  on(editTask, (state, { task }) => state.map(t => t.id === task.id ? task : t)),
  on(deleteTask, (state, { taskId }) => state.filter(t => t.id !== taskId)),
  on(loadTasksSuccess, (state, { tasks }) => [...tasks])
);

export function taskReducer(state: Task[] | undefined, action: Action) {
  return _taskReducer(state, action);
}
