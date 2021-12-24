import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartPopupComponent } from './linechart-popup.component';

describe('LinechartPopupComponent', () => {
  let component: LinechartPopupComponent;
  let fixture: ComponentFixture<LinechartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinechartPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
