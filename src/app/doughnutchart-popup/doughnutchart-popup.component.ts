import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnutchart-popup',
  templateUrl: './doughnutchart-popup.component.html',
  styleUrls: ['./doughnutchart-popup.component.css']
})
export class DoughnutchartPopupComponent {


  // DOUGHNUT CHART

  doughnutChartLabels: Label[] = ['Audi', 'Mercedes-Benz', 'BMW'];
  doughnutChartData: MultiDataSet = [
    [45, 55, 50]
  ];

  doughnutChartType: ChartType = 'doughnut';

  confirm() {
    this.activeModal.close('Cross click');
  }
  constructor(public activeModal: NgbActiveModal) { }


}
