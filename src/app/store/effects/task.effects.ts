import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../services/local-storage.service';
import * as TaskActions from '../actions/task.actions';
import { selectTasks } from '../selectors/task.selectors';

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.loadTasks),
    mergeMap(() => of(this.localStorageService.getTasks()).pipe(
      map(tasks => TaskActions.loadTasksSuccess({ tasks })),
      catchError(() => of({ type: '[Task API] Tasks Loaded Error' }))
    ))
  ));

  saveTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.addTask, TaskActions.editTask, TaskActions.deleteTask),
    withLatestFrom(this.store.select(selectTasks)),
    tap(([action, tasks]) => {
      this.localStorageService.saveTasks(tasks);
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private store: Store,
    private localStorageService: LocalStorageService
  ) {}
}
