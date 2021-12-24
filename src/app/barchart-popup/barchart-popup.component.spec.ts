import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartPopupComponent } from './barchart-popup.component';

describe('BarchartPopupComponent', () => {
  let component: BarchartPopupComponent;
  let fixture: ComponentFixture<BarchartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
