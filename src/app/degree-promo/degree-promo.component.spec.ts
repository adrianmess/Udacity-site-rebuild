import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreePromoComponent } from './degree-promo.component';

describe('DegreePromoComponent', () => {
  let component: DegreePromoComponent;
  let fixture: ComponentFixture<DegreePromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreePromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
