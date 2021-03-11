import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './components/slides/slides.component';
import { ReductionComponent } from './components/reduction/reduction.component';
import { ChoiceNbComponent } from './components/choice-nb/choice-nb.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error404/error404.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    ReductionComponent,
    ChoiceNbComponent,
    HomeComponent,
    RoomsComponent,
    ContactComponent,
    Error404Component,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
