import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdacityAdvantageSellingPointsComponent } from './udacity-advantage-selling-points.component';

describe('UdacityAdvantageSellingPointsComponent', () => {
  let component: UdacityAdvantageSellingPointsComponent;
  let fixture: ComponentFixture<UdacityAdvantageSellingPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdacityAdvantageSellingPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdacityAdvantageSellingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
