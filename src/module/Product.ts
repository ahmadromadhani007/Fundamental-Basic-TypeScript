import Lenovo from "./Lenovo";
import MacBook from "./MacBook";

let lenovo = new Lenovo("Legion", true, true);
console.log(lenovo);

let macbook = new MacBook(2001, false, false);
console.log(macbook);
macbook.a();
macbook.b();