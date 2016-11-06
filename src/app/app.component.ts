import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dogs = [
    {rows: 2, fileName:"broken-back", name: "Mal", human: "Jeremy", age: 5},
    {rows: 1, fileName:"coldplay", name: "Molly", human: "David", age: 5},
    { rows: 1, fileName:"flying-lotus", name: "Sophie", human: "Alex", age: 8},
    {rows: 2, fileName:"jar-of-flies", name: "Taz", human: "Joey", age: '11 weeks'},
    { rows: 1, fileName:"joy-division", name: "Kobe", human: "Igor", age: 5},
    {rows: 2, fileName:"julien-dore", name: "Porter", human: "Kara", age: 3},
    { rows: 1, fileName:"nirvana", name: "Stephen", human: "Stephen", age: 8},
    {rows: 1, fileName:"pink-floyd", name: "Cinny", human: "Jules", age: 3},
    { rows: 1, fileName:"beast-night", name: "Hermes", human: "Kara", age: 3},
  ];

  constructor() {}

}
