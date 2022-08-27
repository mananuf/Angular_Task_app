import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  toggleRemoveTask(){
    console.log('remove Task')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
