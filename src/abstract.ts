abstract class Vehicle {
    abstract wheels: number;

    start(): void {
        console.log("BLARRDDDTT");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}
class MtrCycle extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let mtcycle = new MtrCycle();
console.log(mtcycle.wheels);
mtcycle.start();