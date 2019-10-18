import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription, Observable } from 'rxjs';
import { ITask } from '../../data/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  taskList: ITask[];
  newTask: string;

  taskSub: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log('TaskListComponent => ngOnInit()');

    this.taskSub = this.taskService.taskList$.subscribe(
      (next) => {
        console.log('next = value emitted', next);
        this.taskList = next;
      },
      (error) => {
        console.error('Something went wrong!', error);
      }
    );
  }

  ngOnDestroy() {
    console.log('TaskListComponent => ngOnDestroy()');
    this.taskSub.unsubscribe();
  }

  public get tasklistLabel(): string {
    return 'Add a task:';
  }

  public get selectedTask$(): Observable<ITask> {
    return this.taskService.selectedTask$;
  }

  public onTaskSubmitted(): void {
    const task: ITask = {
      name: this.newTask,
      date: new Date()
    };
    this.taskList.push(task);
    this.taskService.updateTaskList(this.taskList);
    this.newTask = null;
  }

  public onTaskDoubleClicked(task: ITask): void {
    this.taskService.updateSelectedTask(task);
  }

  public reorderList(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
}
