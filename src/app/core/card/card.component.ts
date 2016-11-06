import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'core-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('path') path:string;
  @Input('content') content:string;
  @Input('description') description:string;

  @Output("getEventClick") getEventClick=new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {
  }

  sendClickEvent(){
    this.getEventClick.emit(true);
  }
}
