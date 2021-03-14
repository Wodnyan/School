import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbButtonsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
