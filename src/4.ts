class Key {
    private readonly signature: number;

    constructor() {
        this.signature = Math.random();
    }

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    private readonly key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    public tenants: Array<Person>;
    door: boolean;
    protected readonly key: Key;


    public constructor(key: Key) {
        this.tenants = [];
        this.door = false;
        this.key = key;
    }

    public comeIn(person: Person): void {
        if (!this.door) {
            return;
        }

        this.tenants.push(person);
    }

    public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
    public openDoor(key: Key): boolean {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            return true;
        }

        return false;
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
