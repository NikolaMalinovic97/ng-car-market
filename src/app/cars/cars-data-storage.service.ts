import { Injectable } from '@angular/core';
import { Car } from '../shared/car.model';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class CarsDataStorageService {
  private carsData = [
    new Car('Golf 2',
            1982,
            'diesel',
            20,
            1.2,
            380000,
            'https://upload.wikimedia.org/wikipedia/commons/e/e8/VW_Golf_II_front_20080206.jpg',
            'Brz, jak, pouzdan.',
            300,
            new User('Aljosa221', 'asda@test.com', '1234567', '066559234')),
    new Car('VolksWagen',
            2012,
            'diesel',
            150,
            2.0,
            120000,
            'https://s5.pik.ba/galerija/2019-02/01/01/slika-996492-5c543e3fb867f-default.jpg',
            'Big bold car',
            12000,
            new User('Meho', 'asadsda@test.com', 'adagfggas', '066294201')),
    new Car('Peugeot 407',
            2006,
            'diesel',
            120,
            1.9,
            220000,
            'https://pictures.topspeed.com/IMG/jpg/200612/2006-peugeot-407-40.jpg',
            'Nice car',
            5000,
            new User('Meho', 'asadsda@test.com', 'adagfggas', '066294201'))
  ];

  constructor() { }

  getCarsData() {
    return this.carsData.slice();
  }

  getCarData(id: number) {
    return this.carsData[id];
  }
}
