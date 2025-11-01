import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { task } from './models/task.model';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TaskFormComponent, TaskListComponent, DragDropModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: task[] = [];

  addTask(name: string) {
    this.tasks.push({ name, status: 'todo' });
  }

  getTasksByStatus(status: string): task[] {
    return this.tasks.filter(t => t.status === status);
  }

  updateTaskStatus(index: number) {
    const task = this.tasks[index];
    if (task.status === 'todo') task.status = 'in-progress';
    else if (task.status === 'in-progress') task.status = 'done';
  }

  onDrop(event: CdkDragDrop<task[]>, newStatus: 'todo' | 'in-progress' | 'done') {
    if (event.previousContainer === event.container) {
      // Same column - just reorder
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Different column - transfer and update status
      const movedTask = event.previousContainer.data[event.previousIndex];

      // Update the status in the main tasks array
      const taskIndex = this.tasks.findIndex(t => t.name === movedTask.name && t.status === movedTask.status);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].status = newStatus;
      }

      // Transfer between arrays
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  deleteTask(taskToDelete: task) {
    this.tasks = this.tasks.filter(t => t !== taskToDelete);
  }
}