import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  taskList: string[];
  newTask: string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskList = this.taskService.taskList;
  }

  public get tasklistLabel(): string {
    return 'Add a task:';
  }

  public onTaskSubmitted(): void {
    this.taskService.addTask(this.newTask);
    this.newTask = null;
  }

  public reorderList(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
}
