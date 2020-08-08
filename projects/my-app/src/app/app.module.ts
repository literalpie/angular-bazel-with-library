import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyLibModule} from '@literalpie/my-lib';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { OAuthModule } from "angular-oauth2-oidc";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MyLibModule,
    OAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
