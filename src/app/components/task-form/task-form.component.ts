import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from '../../store/actions/task.actions';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = { id: Date.now(), title: '', description: '', completed: false };

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(addTask({ task: this.task }));
    this.task = { id: Date.now(), title: '', description: '', completed: false };
  }
}
