function getData(value: any) {
    return value;
}

console.log(getData('Ahmad Romadhani').length);
console.log(getData(123).length);

//Generic
function myData<T>(value: T) {
    return value
}

console.log(getData('Ahmad Romadhani').length);
console.log(getData(123));