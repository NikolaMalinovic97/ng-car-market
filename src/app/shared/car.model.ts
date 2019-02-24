import { User } from './user.model';

export class Car {
    public title: string;
    public year: number;
    public fuel: string;
    public horsepower: number;
    public engineSize: number;
    public distance: number;
    public imagePath: string;
    public description: string;
    public price: number;
    public owner: User;

    constructor(title: string, year: number, fuel: string, horsepower: number,
                engineSize: number, distance: number, imagePath: string,
                description: string, price: number, owner: User) {
                    this.title = title;
                    this.year = year;
                    this.fuel = fuel;
                    this.horsepower = horsepower;
                    this.engineSize = engineSize;
                    this.distance = distance;
                    this.imagePath = imagePath;
                    this.description = description;
                    this.price = price;
                    this.owner = owner;
    }
}
