import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortHeaderComponent } from './frontend/port-header/port-header.component';
import { PortProfileComponent } from './frontend/port-profile/port-profile.component';
import { PortProfileDescriptionComponent } from './frontend/port-profile-description/port-profile-description.component';
import { PortRusumeComponent } from './frontend/port-rusume/port-rusume.component';
import { PortWorksComponent } from './frontend/port-works/port-works.component';

@NgModule({
  declarations: [
    AppComponent,
    PortHeaderComponent,
    PortProfileComponent,
    PortProfileDescriptionComponent,
    PortRusumeComponent,
    PortWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
