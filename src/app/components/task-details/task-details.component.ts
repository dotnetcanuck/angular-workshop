import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../../data/task.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor() { }

  @Input() task: ITask;

  ngOnInit() {
  }

}
