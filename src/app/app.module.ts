// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

// services
import { TasksService } from './services/task/tasks.service';
import { CoursesService } from './services/courses.service';

@NgModule({
  //  register components
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    CoursesComponent,
    FooterComponent,
    TasksComponent,
    TaskItemComponent
  ],
  // register imported modules
  imports: [  
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  // register services
  providers: [
    CoursesService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
