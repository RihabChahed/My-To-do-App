import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskFormComponent,
        TaskListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
