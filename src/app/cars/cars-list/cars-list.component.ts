import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/car.model';
import { User } from 'src/app/shared/user.model';
import { CarsDataStorageService } from '../cars-data-storage.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars: Car[];

  constructor(private carsDataStorage: CarsDataStorageService) { }

  ngOnInit() {
        this.cars = this.carsDataStorage.getCarsData();
  }

}
