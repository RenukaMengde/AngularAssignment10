import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechcompComponent } from './techcomp/techcomp.component';
import { BookcompComponent } from './bookcomp/bookcomp.component';
import { WildCompComponent } from './wild-comp/wild-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TechcompComponent,
    BookcompComponent,
    WildCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
