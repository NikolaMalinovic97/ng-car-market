import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarsDataStorageService } from './cars/cars-data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarsDataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
