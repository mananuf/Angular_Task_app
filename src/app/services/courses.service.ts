import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getCourses(){
    return ['Mathematics', 'English', 'Physics', 'Chemistry', 'Technical Draw.', 'Biology']
  }
}
