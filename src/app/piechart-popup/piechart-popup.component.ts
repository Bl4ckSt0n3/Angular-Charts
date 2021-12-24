import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-piechart-popup',
  templateUrl: './piechart-popup.component.html',
  styleUrls: ['./piechart-popup.component.css']
})
export class PiechartPopupComponent {


  // PIE CHART
  pieChartOptions: ChartOptions = {
    responsive: true,
  };

  pieChartLabels: Label[] = [['Dollar'], ['Euro'], ['Silver']]; 
  pieChartData: SingleDataSet = [14, 16, 250];
  pieChartType: ChartType = "pie";
  pieChartLegend = true;
  pieChartPlugins = [];

  confirm() {
    this.activeModal.close('Cross click');
  }

  constructor(public activeModal: NgbActiveModal) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }


}
