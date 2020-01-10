// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string;
// }

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
};

// 1)
// Without the Interface Vehicle
// const printVehicle = (vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// };

// Without the Interface Vehicle
// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// };

// 2)
const drink = {
    color: 'brown',
    carbonet: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
