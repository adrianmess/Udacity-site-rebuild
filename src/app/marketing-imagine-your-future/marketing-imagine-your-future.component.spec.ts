import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingImagineYourFutureComponent } from './marketing-imagine-your-future.component';

describe('MarketingImagineYourFutureComponent', () => {
  let component: MarketingImagineYourFutureComponent;
  let fixture: ComponentFixture<MarketingImagineYourFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingImagineYourFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingImagineYourFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
