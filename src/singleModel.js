class SingleModel {
    init() {
        console.log('~~~~~初始化');
    }
}

SingleModel.getInstance = (() => {
    let instance;
    return () => {
        if(!instance) {
            instance = new SingleModel;
        }
        return instance;
    }
})();



