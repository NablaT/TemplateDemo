import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  albums = [
    {rows: 2, fileName:"broken-back", name: "Mal", artist: "Jeremy", date: 5},
    {rows: 1, fileName:"coldplay", name: "Molly", artist: "David", date: 5},
    { rows: 1, fileName:"flying-lotus", name: "Sophie", artist: "Alex", date: 8},
    {rows: 2, fileName:"jar-of-flies", name: "Taz", artist: "Joey", date: '11 weeks'},
    { rows: 1, fileName:"joy-division", name: "Kobe", artist: "Igor", date: 5},
    {rows: 2, fileName:"julien-dore", name: "Porter", artist: "Kara", date: 3},
    { rows: 1, fileName:"nirvana", name: "Stephen", artist: "Stephen", date: 8},
    {rows: 1, fileName:"pink-floyd", name: "Cinny", artist: "Jules", date: 3},
    { rows: 1, fileName:"beast-night", name: "Hermes", artist: "Kara", date: 3},
  ];

  @ViewChild('sidenav') sidenav: MdSidenav;
  private selectedAlbum;

  constructor() {
    this.selectedAlbum={rows: 0,
      fileName:"", name: "", artist: "", date: 0};
  }

  showInformation(album){
    console.log("yes");
    this.selectedAlbum=album;
    this.sidenav.open();
  }

  hideInformation(){
    this.sidenav.close();
  }
}
