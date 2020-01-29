class Sorter {
    // Making the collection public is the same as defining the collection as an attribute of Sorter
    constructor(public collection: number[] | string) {}

    sort(): void {
        // Destructuring assignment as ES6
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // Only the properties that number[] and string have in common are accessible here

                // If collection is an array of numbers (Type Guard)
                if (this.collection instanceof Array) {
                    // All the properties of number[] are accessible here

                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }

                // If collection is a string (Type Guard)
                if (typeof this.collection === 'string') {
                    // All properties of string are accessible here
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
