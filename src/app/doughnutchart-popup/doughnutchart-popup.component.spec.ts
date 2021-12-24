import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutchartPopupComponent } from './doughnutchart-popup.component';

describe('DoughnutchartPopupComponent', () => {
  let component: DoughnutchartPopupComponent;
  let fixture: ComponentFixture<DoughnutchartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutchartPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutchartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
