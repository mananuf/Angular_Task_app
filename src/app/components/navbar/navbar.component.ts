import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = 'Angular';

  toggleAddTask(){
    console.log('add Task')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
