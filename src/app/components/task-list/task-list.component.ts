import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { deleteTask, loadTasks, editTask } from '../../store/actions/task.actions';
import { selectTasks } from '../../store/selectors/task.selectors';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  editMode: { [id: number]: boolean } = {};
  editedTask: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectTasks);
  }

  ngOnInit() {
    this.store.dispatch(loadTasks());
  }

  deleteTask(taskId: number) {
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      this.store.dispatch(deleteTask({ taskId }));
    }
  }

  editTask(task: Task) {
    this.editMode[task.id] = true;
    this.editedTask = { ...task };
  }

  saveTask(taskId: number) {
    this.store.dispatch(editTask({ task: this.editedTask }));
    this.editMode[taskId] = false;
  }

  cancelEdit(taskId: number) {
    this.editMode[taskId] = false;
  }
}
