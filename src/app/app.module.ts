import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SaasLandingComponent } from './components/pages/saas-landing/saas-landing.component';
import { SaasBannerComponent } from './components/pages/saas-landing/saas-banner/saas-banner.component';
import { SaasFeaturesComponent } from './components/pages/saas-landing/saas-features/saas-features.component';
import { SaasPartnerComponent } from './components/pages/saas-landing/saas-partner/saas-partner.component';
import { SaasContactComponent } from './components/pages/saas-landing/saas-contact/saas-contact.component';
import { SaasAppDownloadComponent } from './components/pages/saas-landing/saas-app-download/saas-app-download.component';
import { SaasFeedbackComponent } from './components/pages/saas-landing/saas-feedback/saas-feedback.component';
import { SaasNewsletterComponent } from './components/pages/saas-landing/saas-newsletter/saas-newsletter.component';
import { SaasPricingComponent } from './components/pages/saas-landing/saas-pricing/saas-pricing.component';
import { SaasOurStoryComponent } from './components/pages/saas-landing/saas-our-story/saas-our-story.component';
import { SaasDiscoverComponent } from './components/pages/saas-landing/saas-discover/saas-discover.component';
import { SaasAboutComponent } from './components/pages/saas-landing/saas-about/saas-about.component';
import { SaasFunfactsComponent } from './components/pages/saas-landing/saas-funfacts/saas-funfacts.component';
import { SassFaqComponent } from './components/pages/saas-landing/sass-faq/sass-faq.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreloaderComponent,
    FooterComponent,
    SaasLandingComponent,
    SaasBannerComponent,
    SaasFeaturesComponent,
    SaasPartnerComponent,
    SaasContactComponent,
    SaasAppDownloadComponent,
    SaasFeedbackComponent,
    SaasNewsletterComponent,
    SaasPricingComponent,
    SaasOurStoryComponent,
    SaasDiscoverComponent,
    SaasAboutComponent,
    SaasFunfactsComponent,
    SassFaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
