import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ImageManipulationComponent } from '/Users/anthony/Desktop/Manifest/experiment1/src/app/image-manipulation/image-manipulation.component';

@NgModule({
  declarations: [
    AppComponent
    , ServerComponent
    ,ImageManipulationComponent
  
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule {


 }
