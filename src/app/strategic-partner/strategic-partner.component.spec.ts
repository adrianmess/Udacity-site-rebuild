import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicPartnerComponent } from './strategic-partner.component';

describe('StrategicPartnerComponent', () => {
  let component: StrategicPartnerComponent;
  let fixture: ComponentFixture<StrategicPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
