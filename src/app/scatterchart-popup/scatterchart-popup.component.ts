import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-scatterchart-popup',
  templateUrl: './scatterchart-popup.component.html',
  styleUrls: ['./scatterchart-popup.component.css']
})
export class ScatterchartPopupComponent {

  scatterChartOptions: ChartOptions = {
    responsive: true,
  }

  scatterChartData: ChartDataSets[] = [
    {
      data: [
      { x: 14.2, y: 215 },
        { x: 16.4, y: 325 },
        { x: 11.9, y: 185 },
        { x: 15.2, y: 332 },
        { x: 18.5, y: 406 },
        { x: 22.1, y: 522 },
        { x: 19.4, y: 412 },
        { x: 25.1, y: 614 },
        { x: 23.4, y: 544 },
        { x: 18.1, y: 421 },
      ],
      label: 'Altitude and Longitude',
      pointRadius: 5,
    }
  ];
  scatterChartType: ChartType = 'scatter';
  
  confirm() {
    this.activeModal.close('Cross click');
  }
  constructor(public activeModal: NgbActiveModal) { }

}
