import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuotesComponent } from './student-quotes.component';

describe('StudentQuotesComponent', () => {
  let component: StudentQuotesComponent;
  let fixture: ComponentFixture<StudentQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
