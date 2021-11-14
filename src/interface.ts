interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Legion implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("Odik");
    }
    off(): void {
        console.log("Mateh");
    }
    
}

class MacBook implements Laptop {
    name: string;
    keyboardLight: boolean;
    
    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on(): void {
        console.log("Odik");
    }
    off(): void {
        console.log("Mateh");
    }

}

let legion = new Legion('Legion', true);
console.log(legion.on());
console.log(legion.off()); 

let mb = new MacBook('MBP', true);
console.log(legion.on());
console.log(legion.off()); 