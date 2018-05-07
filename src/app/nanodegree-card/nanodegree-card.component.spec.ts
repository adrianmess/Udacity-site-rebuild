import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanodegreeCardComponent } from './nanodegree-card.component';

describe('NanodegreeCardComponent', () => {
  let component: NanodegreeCardComponent;
  let fixture: ComponentFixture<NanodegreeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanodegreeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanodegreeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
