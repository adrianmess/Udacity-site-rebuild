import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSeperatorComponent } from './marketing-seperator.component';

describe('MarketingSeperatorComponent', () => {
  let component: MarketingSeperatorComponent;
  let fixture: ComponentFixture<MarketingSeperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingSeperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
