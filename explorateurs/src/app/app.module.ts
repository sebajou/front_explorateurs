import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExplorateurComponent } from './explorateur/explorateur.component';

import { FormsModule } from '@angular/forms';
import { ExplorateurDetailComponent } from './explorateur-detail/explorateur-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ExplorateurComponent,
    ExplorateurDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
