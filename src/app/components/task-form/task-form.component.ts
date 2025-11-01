import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskName: string = '';
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.taskName.trim()) {
      this.taskAdded.emit(this.taskName.trim());
      this.taskName = '';
    }
  }
}
