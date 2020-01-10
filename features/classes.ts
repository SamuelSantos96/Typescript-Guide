class Vehicle {
    drive(): void {
        console.log('chugga chugga');
    }

    honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('vroom');
    }
}

// 1)
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// 2)
const car = new Car();
car.drive();
car.honk();
