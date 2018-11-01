import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './route/app.route';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { HeadderComponent } from './components/headder/headder.component';
import { CampaignmanagementComponent } from './components/campaignmanagement/campaignmanagement.component';
import { LoginComponent } from './components/login/login.component';
import { CreatecampaignComponent } from './components/createcampaign/createcampaign.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    HeadderComponent,
    CampaignmanagementComponent,
    LoginComponent,
    CreatecampaignComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule ,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
