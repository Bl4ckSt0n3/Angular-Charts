import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterchartPopupComponent } from './scatterchart-popup.component';

describe('ScatterchartPopupComponent', () => {
  let component: ScatterchartPopupComponent;
  let fixture: ComponentFixture<ScatterchartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterchartPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterchartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
