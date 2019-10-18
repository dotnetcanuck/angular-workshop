import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'Angular 101 Demo';

  taskCount: number = null;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.taskList$.subscribe(
      next => this.taskCount = next.length,
      error => this.taskCount = null
    );
  }

}
