import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../data/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>([]);
  public taskList$ = this.tasks.asObservable();

  private selectedTask: BehaviorSubject<ITask> = new BehaviorSubject<ITask>(null);
  public selectedTask$ = this.selectedTask.asObservable();

  constructor() { }

  public updateTaskList(value: ITask[]): void {
    this.tasks.next(value);
  }

  public updateSelectedTask(value: ITask): void {
    this.selectedTask.next(value);
  }

}
