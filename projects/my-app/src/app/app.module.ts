import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyLibModule} from '@literalpie/my-lib';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
