import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorageKey = 'tasks';

  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.localStorageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
}
