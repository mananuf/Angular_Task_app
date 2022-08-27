import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/tasks/TaskInterface';
import { TasksService } from 'src/app/services/task/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: TaskInterface[] = []; // getting tasks from TASKs
  
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks));
    
  }
  deleteTask(task: TaskInterface){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

}
