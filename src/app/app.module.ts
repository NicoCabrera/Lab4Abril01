import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRRGJF94udhweXQXiH1f33ipl0w5d6hXc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
