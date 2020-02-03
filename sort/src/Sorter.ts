interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
    // Making the collection public is the same as defining the collection as an attribute of Sorter
    constructor(public collection: Sortable) {}

    sort(): void {
        // Destructuring assignment as ES6
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
