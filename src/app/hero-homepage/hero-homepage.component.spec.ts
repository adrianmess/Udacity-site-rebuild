import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHomepageComponent } from './hero-homepage.component';

describe('HeroHomepageComponent', () => {
  let component: HeroHomepageComponent;
  let fixture: ComponentFixture<HeroHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
