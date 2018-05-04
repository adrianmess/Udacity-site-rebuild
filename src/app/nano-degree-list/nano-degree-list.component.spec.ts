import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoDegreeListComponent } from './nano-degree-list.component';

describe('NanoDegreeListComponent', () => {
  let component: NanoDegreeListComponent;
  let fixture: ComponentFixture<NanoDegreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoDegreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoDegreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
