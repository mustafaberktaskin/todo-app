import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { taskReducer } from './app/store/reducers/task.reducer';
import { TaskEffects } from './app/store/effects/task.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ tasks: taskReducer }),
    provideEffects([TaskEffects])
  ]
}).catch(err => console.error(err));
