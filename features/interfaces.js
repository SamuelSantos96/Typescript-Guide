// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string;
// }
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: " + this.name;
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
var drink = {
    color: 'brown',
    carbonet: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
