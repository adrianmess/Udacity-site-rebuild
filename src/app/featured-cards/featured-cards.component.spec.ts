import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCardsComponent } from './featured-cards.component';

describe('FeaturedCardsComponent', () => {
  let component: FeaturedCardsComponent;
  let fixture: ComponentFixture<FeaturedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
