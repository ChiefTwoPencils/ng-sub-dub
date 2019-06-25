import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FancyTextComponent } from './fancy-text/fancy-text.component';
import { FancyCheckbox } from './fancy-checkbox/fancy-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyTextComponent,
    FancyCheckbox
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
