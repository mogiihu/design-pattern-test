
class Floor {
    constructor(index, space) {
        this.index = index;
        this.space = space;
    }

    showEmptyNum() {
        let emptyNum = 0;
        this.space.forEach((item) => {
            if(item.status) {
                emptyNum ++;
            }
        });
        return emptyNum;
    }
}

class Space {
    constructor() {
        this.status = true;
    }
    in() {
        this.status = false;
    }
    out() {
        this.status = true;
    }
}

class Screen {
    showMsg(carInfo) {
        console.log(`车牌号：${carInfo.carId}\n停车时长：${new Date() - carInfo.inTime}`);
    }
}

class Camera {
    recoginize(car) {
        return {
            carId: car.carId,
            inTime: new Date()
        }
    }
}

class Park {
    constructor() {
        this.screen = new Screen;
        this.camera = new Camera;

        this.carList = {};
        this.floor = [];
        for(let i=0;i<3;i++) {
            let spaceList = [];
            for(let j=0;j<100;j++) {
                spaceList.push(new Space);
            }
            this.floor.push(new Floor(i, spaceList));
        }
    }
    in(car) {
        console.log(this.emptyNum());
        let info =  this.camera.recoginize(car);
        console.log(info);
        // 给该车划分车位
        for(let i=0;i<this.floor.length;i++) {
            let thisFloor = this.floor[i];
            for(let j=0;j<thisFloor.space.length;j++) {
                let thisSpace = thisFloor.space[i];
                if(thisSpace.status) {
                    info.space = thisSpace;
                    thisSpace.in();
                    break;
                }
            }
            if(!info.space) {
                break;
            }
        }
        this.carList[car.carId] = info;
        console.log(this.carList);
    }
    out(car) {
        this.screen.showMsg(this.carList[car.carId]);
    }
    emptyNum() {
        return this.floor.map((floor, index) => {
            return `第${index+1}层共有${floor.showEmptyNum()}个空车位`
        }).join('\n');
    }

}


class Car {
    constructor(carId) {
        this.carId = carId;
    }

    enter() {

    }

    leave() {

    }
}


const car1 = new Car('鲁A759MV');
const park = new Park;
park.in(car1);
setTimeout(() => {
    park.out(car1);
}, 5000);

