import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PiechartPopupComponent } from './piechart-popup/piechart-popup.component';
import { BarchartPopupComponent } from './barchart-popup/barchart-popup.component';
import { DoughnutchartPopupComponent } from './doughnutchart-popup/doughnutchart-popup.component';
import { ScatterchartPopupComponent } from './scatterchart-popup/scatterchart-popup.component';
import { LinechartPopupComponent } from './linechart-popup/linechart-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PiechartPopupComponent,
    BarchartPopupComponent,
    DoughnutchartPopupComponent,
    ScatterchartPopupComponent,
    LinechartPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
