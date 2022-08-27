import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title:string = "courses".toUpperCase();
  courses;  // variable for courses service

  constructor(service: CoursesService) { //instansiating CoursesService class and Injecting all its dependencies to Course component
    this.courses = service.getCourses()
  }

  ngOnInit(): void {
  }

}
