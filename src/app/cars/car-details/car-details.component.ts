import { Component, OnInit } from '@angular/core';
import { CarsDataStorageService } from '../cars-data-storage.service';
import { Car } from 'src/app/shared/car.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  id: number;

  constructor(private carDataStorage: CarsDataStorageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.car = this.carDataStorage.getCarData(this.id);
      }
    );
  }

}
