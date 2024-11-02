import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { SidebarComponent } from 'src/shared/sidebar/sidebar.component';
import { DirectionfinanciereComponent } from './components/directionfinanciere/directionfinanciere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NiveauComponent } from './components/niveau/niveau.component';
import { NivupdateComponent } from './components/nivupdate/nivupdate.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { CreatetudiantComponent } from './components/createtudiant/createtudiant.component';
import { AffichetudeComponent } from './components/affichetude/affichetude.component';
import { EtupdateComponent } from './components/etupdate/etupdate.component';
import { StatComponent } from './components/stat/stat.component';
import { ClaComponent } from './components/cla/cla.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DirectionfinanciereComponent,
    NiveauComponent,
    NivupdateComponent,
    CreatetudiantComponent,
    AffichetudeComponent,
    EtupdateComponent,
    StatComponent,
    ClaComponent
    
    ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
