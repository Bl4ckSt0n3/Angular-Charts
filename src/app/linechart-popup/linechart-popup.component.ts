import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-linechart-popup',
  templateUrl: './linechart-popup.component.html',
  styleUrls: ['./linechart-popup.component.css']
})
export class LinechartPopupComponent {


  lineChartOptions: ChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      borderWidth: 2,
    },
    {
      // yellow transparent 
      backgroundColor: 'rgba(255,255,0, .2)',
      borderColor: 'rgba(255, 255, 0, 1)',
      borderWidth: 2,
    }
  ];

  lineChartLegend = true;

  lineChartType: ChartType = 'line';

  lineChartPlugins = [];

  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  chartClicked(e: any): void { }
  chartHovered(e: any): void { }

  confirm() {
    this.activeModal.close('Cross click');
  }
  constructor(public activeModal: NgbActiveModal) { }

  

}
