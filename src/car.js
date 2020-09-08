class Car {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class SpecialCar extends Car {
    constructor(id, name) {
        super(id, name);
        this.money = 2;
    }
}

class FastCat extends Car {
    constructor(id, name) {
        super(id, name);
        this.money = 1;
    }
}

class Trip {
    constructor(car) {
        this.car = car;
    }

    start() {
        console.log(`车牌号是：${this.car.id}`);
        console.log(`车名称是：${this.car.name}`);
    }

    end(distance) {
        console.log(`本次行程价格是：${this.car.money*distance}`);
    }

}

const didi1 = new SpecialCar('鲁A759MV', '北京现代');
const trip1 = new Trip(didi1);
trip1.start();
trip1.end(5);