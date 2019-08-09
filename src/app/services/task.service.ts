import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = [];

  constructor() { }

  public get taskList(): string[] {
    return this.tasks;
  }

  public addTask(task: string): void {
    this.tasks.push(task);
  }
}
