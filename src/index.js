// import './car';
import './singleModel';
import {obj} from './myCall';
import './promise';
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    getName() {
        return this.name;
    }
    getSex() {
        return this.sex;
    }
}

class Hero extends Person {
    constructor(name, sex, skill) {
        super(name, sex);
        this.skill = skill;
    }
    getSkill() {
        return this.skill;
    }
}

const hero1 = new Hero('琦玉','男','认真拳');
// console.log('英雄：' + hero1.getName());
// console.log('性别：' + hero1.getSex());
// console.log('技能：' + hero1.getSkill());

class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        for (let i=0; i< dom.length; i++) {
            this[i] = dom[i];
        }
        this.selector = selector;
        this.length = dom ? dom.length : 0;
    }
}

window.$ = function(selector) {
    return new jQuery(selector);
}

const $h1 = $('h1');
// console.log($h1)
obj.getNum();
obj.getNumLater();