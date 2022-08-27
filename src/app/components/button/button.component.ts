import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Input() background: string;
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit(); // emit an action onclick
  }
  constructor() { }

  ngOnInit(): void {
  }

}
