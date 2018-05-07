import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicPartnerListComponent } from './strategic-partner-list.component';

describe('StrategicPartnerListComponent', () => {
  let component: StrategicPartnerListComponent;
  let fixture: ComponentFixture<StrategicPartnerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicPartnerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicPartnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
