import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCountriesComponent } from './nav-countries.component';

describe('NavCountriesComponent', () => {
  let component: NavCountriesComponent;
  let fixture: ComponentFixture<NavCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
