import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet} from 'ng2-charts';
import { PiechartPopupComponent } from '../piechart-popup/piechart-popup.component';
import { BarchartPopupComponent } from '../barchart-popup/barchart-popup.component';
import { DoughnutchartPopupComponent } from '../doughnutchart-popup/doughnutchart-popup.component';
import { ScatterchartPopupComponent } from '../scatterchart-popup/scatterchart-popup.component';
import { LinechartPopupComponent } from '../linechart-popup/linechart-popup.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(
    private modalService: NgbModal,
    ) { 
   }
  
   openPieChartModal() {
      this.modalService.open(PiechartPopupComponent, { size: 'xl' });
   }
   openBarChartModal() {
     this.modalService.open(BarchartPopupComponent, {size: 'xl'});
   }
   openDoughnutChartModal() {
     this.modalService.open(DoughnutchartPopupComponent, { size: 'xl' });
   }
   openScatterChartModal() {
     this.modalService.open(ScatterchartPopupComponent, { size: 'xl' });
   }
   openLineChartModal() {
     this.modalService.open(LinechartPopupComponent, { size: 'xl' });
   }
}
