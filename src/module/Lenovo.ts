import Laptop from "./BaseLaptop";

class Lenovo<T> extends Laptop<T> {
    constructor(type: T, numeric: boolean, touchButton: boolean) {
        super("Lenovo", type, numeric, touchButton);
    }
}

export default Lenovo;