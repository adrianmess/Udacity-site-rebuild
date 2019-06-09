import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormButtonModalComponent } from './edit-form-button-modal.component';

describe('EditFormButtonModalComponent', () => {
  let component: EditFormButtonModalComponent;
  let fixture: ComponentFixture<EditFormButtonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormButtonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormButtonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
