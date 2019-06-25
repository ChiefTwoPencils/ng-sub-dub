import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FancyTextComponent } from './fancy-text/fancy-text.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
