import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Task } from '../../models/task.model';

export const selectTasks = createFeatureSelector<Task[]>('tasks');
