class Part {
    constructor(floor, screen, camera, carList) {
        this.floor = floor;
        this.screen = screen;
        this.camera = camera;
        this.carList = carList;
    }


}

class Floor {
    constructor(spaceList) {
        this.emptySpace = 0;
        this.spaceList = spaceList;
    }

    showEmptyNum() {
        this.spaceList.forEach((item) => {
            if(item.status) {
                this.emptySpace ++;
            } else {
                this.emptySpace --;
            }
        });
        return this.emptySpace;
    }
}

class Space {
    constructor() {
        this.status = true;
    }
    in() {
        this.states = false;
    }
    out() {
        this.status = true;
    }
}

class Screen {
    showMsg(cat, enterTime) {
        // return 
    }
}

class Camera {
    

    recoginize() {

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


let spaceList = [];
for (let i=0;i<3;i++) {
    spaceList[i] = [];
    for(let j=0;j<10;j++) {
        spaceList[i].push(new Space());
    }
    
}


const floor1 = new Floor(spaceList[0]);
const floor2 = new Floor(spaceList[1]);
const floor3 = new Floor(spaceList[2]);
const camera = new Camera();
const car1 = new Car('鲁A759MV');
console.log(floor1.showEmptyNum());

