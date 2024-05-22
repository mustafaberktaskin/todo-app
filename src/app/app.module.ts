// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { taskReducer } from './store/reducers/task.reducer';
import { TaskEffects } from './store/effects/task.effects';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ tasks: taskReducer }),
    EffectsModule.forRoot([TaskEffects])
  ],
  providers: [],

})
export class AppModule { }
