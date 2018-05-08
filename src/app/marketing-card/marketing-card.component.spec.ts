import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCardComponent } from './marketing-card.component';

describe('MarketingCardComponent', () => {
  let component: MarketingCardComponent;
  let fixture: ComponentFixture<MarketingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
