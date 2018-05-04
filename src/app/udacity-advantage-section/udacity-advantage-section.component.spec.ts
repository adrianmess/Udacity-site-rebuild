import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdacityAdvantageSectionComponent } from './udacity-advantage-section.component';

describe('UdacityAdvantageSectionComponent', () => {
  let component: UdacityAdvantageSectionComponent;
  let fixture: ComponentFixture<UdacityAdvantageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdacityAdvantageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdacityAdvantageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
