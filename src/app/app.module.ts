import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WikiHomeComponent } from './wiki-home/wiki-home.component';
import { SearchbarComponent } from './wiki-home/searchbar/searchbar.component';
import { TableComponent } from './wiki-home/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WikiHomeComponent,
    SearchbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
