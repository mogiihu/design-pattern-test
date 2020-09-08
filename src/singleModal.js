class singleModal {
    init() {
        console.log('~~~~~~~~初始化');
    }
}

singleModal.getInstance = (() => {
    let instance;
    return () => {
        if (instance) {
            instance = new singleModal;
        }
        return instance;
    }
})();

let single1 = singleModal.getInstance();
let single2 = singleModal.getInstance();

console.log(single1 == single2)