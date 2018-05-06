import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCardsListComponent } from './featured-cards-list.component';

describe('FeaturedCardsListComponent', () => {
  let component: FeaturedCardsListComponent;
  let fixture: ComponentFixture<FeaturedCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
