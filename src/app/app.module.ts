import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentQuotesComponent } from './student-quotes/student-quotes.component';
import { HeroHomepageComponent } from './hero-homepage/hero-homepage.component';
import { StrategicPartnerComponent } from './strategic-partner/strategic-partner.component';
import { NanoDegreeListComponent } from './nano-degree-list/nano-degree-list.component';
import { SeeAllOfferingsComponent } from './see-all-offerings/see-all-offerings.component';
import { MarketingImagineYourFutureComponent } from './marketing-imagine-your-future/marketing-imagine-your-future.component';
import { UdacityAdvantageSectionComponent } from './udacity-advantage-section/udacity-advantage-section.component';
import { FullCatalogOfferingsCardComponent } from './full-catalog-offerings-card/full-catalog-offerings-card.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { DegreePromoComponent } from './degree-promo/degree-promo.component';
import { FeaturedCardsListComponent } from './featured-cards-list/featured-cards-list.component';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { HomeComponent } from './home/home.component';
import { StrategicPartnerListComponent } from './strategic-partner-list/strategic-partner-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NanodegreeCardComponent } from './nanodegree-card/nanodegree-card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { MarketingSeperatorComponent } from './marketing-seperator/marketing-seperator.component';
import { MarketingCardComponent } from './marketing-card/marketing-card.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FooterSocialComponent } from './footer-social/footer-social.component';
import { NavCountriesComponent } from './nav-countries/nav-countries.component';
import { AdminComponent } from './admin/admin.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    StudentQuotesComponent,
    HeroHomepageComponent,
    StrategicPartnerComponent,
    NanoDegreeListComponent,
    SeeAllOfferingsComponent,
    MarketingImagineYourFutureComponent,
    UdacityAdvantageSectionComponent,
    FullCatalogOfferingsCardComponent,
    ContactSectionComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    DegreePromoComponent,
    FeaturedCardsListComponent,
    FeaturedCardComponent,
    HomeComponent,
    StrategicPartnerListComponent,
    CarouselComponent,
    NanodegreeCardComponent,
    WelcomeComponent,
    MarketingSeperatorComponent,
    MarketingCardComponent,
    FooterNavComponent,
    FooterSocialComponent,
    NavCountriesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
