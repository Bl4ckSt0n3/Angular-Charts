import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barchart-popup',
  templateUrl: './barchart-popup.component.html',
  styleUrls: ['./barchart-popup.component.css']
})
export class BarchartPopupComponent {


  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = ['2016', '2017', '2018', '2019', '2020', '2021'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Income' },
    { data:[26, 14, 40, 45, 29, 14], label: 'Expense'}
  ];


  confirm() {
    this.activeModal.close('Cross click');
  }

  constructor(public activeModal: NgbActiveModal) { }

}
