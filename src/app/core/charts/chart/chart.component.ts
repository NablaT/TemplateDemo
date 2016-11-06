import {Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';
declare var Plotly:any;

@Component({
  selector: 'core-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() data:any;
  @Input() layout:any;
  @Input() chartID:string;

  private titleID:string;
  private firstRun:boolean;

  constructor() {
    this.titleID = "testID";
    this.firstRun = true;
  }

  ngOnInit() {
    this.titleID = this.chartID;
  }

  ngOnChanges() {
    if (!this.firstRun) {
      Plotly.newPlot(this.titleID, this.data, this.layout, {displayModeBar: false});
    }
  }

  ngAfterViewInit() {
    this.firstRun = false;
    Plotly.newPlot(this.titleID, this.data, this.layout, {displayModeBar: false});

  }
}
