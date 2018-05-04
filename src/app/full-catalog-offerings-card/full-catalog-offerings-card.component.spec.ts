import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCatalogOfferingsCardComponent } from './full-catalog-offerings-card.component';

describe('FullCatalogOfferingsCardComponent', () => {
  let component: FullCatalogOfferingsCardComponent;
  let fixture: ComponentFixture<FullCatalogOfferingsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCatalogOfferingsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCatalogOfferingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
