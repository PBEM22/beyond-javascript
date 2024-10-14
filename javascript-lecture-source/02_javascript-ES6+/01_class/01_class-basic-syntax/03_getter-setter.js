// getter, setter
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // getter 함수
    get name() {
        console.log('get name 동작');
    }
    get price() {
        console.log('get price 동작');
    }
    // setter 함수
    set name(value) {
        console.log('set name 동작');
    }
    set price(value) {
        console.log('set price 동작');
    }

}