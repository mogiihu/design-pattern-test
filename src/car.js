class Car {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    showMsg() {
        return `车牌号：${this.id}，名称：${this.name}`
    }
}

class SpecialCar extends Car {
    constructor(id, name) {
        super(id, name);
        this.money = 2;
    }

    showMoney(distance) {
        return `本次行程打车金额为${this.money * distance}`;
    }
}

class FastCat extends Car {
    constructor(id, name) {
        super(id, name);
        this.money = 1;
    }

    showMoney(distance) {
        return `本次行程打车金额为${this.money * distance}`;
    }
}

const didi1 = new SpecialCar('鲁A759MV', '北京现代');
console.log(didi1.showMsg());
console.log(didi1.showMoney(5));
