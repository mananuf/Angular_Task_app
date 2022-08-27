import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faTasks } from '@fortawesome/free-solid-svg-icons';
import { TASKS } from 'src/app/tasks/task';
import { TaskInterface } from 'src/app/tasks/TaskInterface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:TaskInterface;
  faTimes = faTimes;  // cancel button icon
  faTasks = faTasks;  // task icon
  @Output() onDelete: EventEmitter<TaskInterface> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask(task:TaskInterface) 
    {
      this.onDelete.emit(task)
    }

}
