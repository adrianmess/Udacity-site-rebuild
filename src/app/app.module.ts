import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentQuotesComponent } from './student-quotes/student-quotes.component';
import { FeaturedCardsComponent } from './featured-cards/featured-cards.component';
import { HeroHomepageComponent } from './hero-homepage/hero-homepage.component';
import { StrategicPartnerComponent } from './strategic-partner/strategic-partner.component';
import { NanoDegreeListComponent } from './nano-degree-list/nano-degree-list.component';
import { SeeAllOfferingsComponent } from './see-all-offerings/see-all-offerings.component';
import { MarketingImagineYourFutureComponent } from './marketing-imagine-your-future/marketing-imagine-your-future.component';
import { UdacityAdvantageSectionComponent } from './udacity-advantage-section/udacity-advantage-section.component';
import { FullCatalogOfferingsCardComponent } from './full-catalog-offerings-card/full-catalog-offerings-card.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentQuotesComponent,
    FeaturedCardsComponent,
    HeroHomepageComponent,
    StrategicPartnerComponent,
    NanoDegreeListComponent,
    SeeAllOfferingsComponent,
    MarketingImagineYourFutureComponent,
    UdacityAdvantageSectionComponent,
    FullCatalogOfferingsCardComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
