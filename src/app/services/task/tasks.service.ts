import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';  // to observe request from api
import { TASKS } from 'src/app/tasks/task';
import { TaskInterface } from 'src/app/tasks/TaskInterface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private task_api_url = "http://localhost:3000/tasks"  // api url to api

  constructor(private http:HttpClient) { }

  getTask(): Observable<TaskInterface[]>{ // observe the Task
    // const tasks = of(TASKS); // get task
    // return tasks; // return task
    return this.http.get<TaskInterface[]>(this.task_api_url);
  }

  deleteTask(task: TaskInterface): Observable<TaskInterface[]>{
    const url = `${this.task_api_url}/${task.id}`;  // get exact content id
    return this.http.delete<TaskInterface[]>(url);
  }
}
