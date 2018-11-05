import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyComponent } from './components/agency/agency.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import {HttpClientModule} from '@angular/common/http';
import { AgencydetailComponent } from './components/agency/agencydetail/agencydetail.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    AnnouncementComponent,
    AgencydetailComponent,
    NavigatorComponent,
    BottomMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
