import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks';

  getTasks(): Observable<Task[]> {
    const tasks = localStorage.getItem(this.localStorageKey);
    return of(tasks ? JSON.parse(tasks) : []);
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
}
