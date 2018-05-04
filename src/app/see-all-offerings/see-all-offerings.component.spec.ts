import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllOfferingsComponent } from './see-all-offerings.component';

describe('SeeAllOfferingsComponent', () => {
  let component: SeeAllOfferingsComponent;
  let fixture: ComponentFixture<SeeAllOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAllOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
