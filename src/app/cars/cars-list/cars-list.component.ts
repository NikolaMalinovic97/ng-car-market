import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/car.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [
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
            3.0,
            150000,
            'https://s5.pik.ba/galerija/2019-02/01/01/slika-996492-5c543e3fb867f-default.jpg',
            'Big bold car',
            15000,
            new User('Meho', 'asadsda@test.com', 'adagfggas', '066294201')),
    new Car('VolksWagen',
            2012,
            'diesel',
            150,
            3.0,
            150000,
            'https://s5.pik.ba/galerija/2019-02/01/01/slika-996492-5c543e3fb867f-default.jpg',
            'Big bold car',
            15000,
            new User('Meho', 'asadsda@test.com', 'adagfggas', '066294201')),
            new Car('Golf 2',
            1982,
            'diesel',
            20,
            1.2,
            380000,
            'https://upload.wikimedia.org/wikipedia/commons/e/e8/VW_Golf_II_front_20080206.jpg',
            'Brz, jak, pouzdan',
            300,
            new User('Aljosa221', 'asda@test.com', '1234567', '066559234')),
    new Car('VolksWagen',
            2012,
            'diesel',
            150,
            3.0,
            150000,
            'https://s5.pik.ba/galerija/2019-02/01/01/slika-996492-5c543e3fb867f-default.jpg',
            'Big bold car',
            15000,
            new User('Meho', 'asadsda@test.com', 'adagfggas', '066294201')),
    new Car('VolksWagen',
            2012,
            'diesel',
            150,
            3.0,
            150000,
            'https://s5.pik.ba/galerija/2019-02/01/01/slika-996492-5c543e3fb867f-default.jpg',
            'Big bold car',
            15000,
            new User('Meho', 'asadsda@test.com', 'adagfggas', '066294201'))
  ];

  constructor() { }

  ngOnInit() {
  }

}
