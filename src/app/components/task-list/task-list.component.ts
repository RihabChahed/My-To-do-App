import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop'; // ✅ ajoute cette ligne
import { task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, DragDropModule], // ✅ ajoute DragDropModule ici
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Output() taskDeleted = new EventEmitter<task>();
  @Input() tasks: task[] = [];


  deleteTask(taskToDelete: task) {
    this.taskDeleted.emit(taskToDelete);
  }
}
