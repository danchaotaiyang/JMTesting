export const difference = (a, b) => this.filter(i => b.indexOf(i) < 0);
export const cloneDeep = source => JSON.parse(JSON.stringify(source));
export const isEmpty = source => source === '' || source === null || source === undefined || JSON.stringify(source) === '{}' || JSON.stringify(source) === '[]';

export const getStorage = () => {
    // 获取storage数据
    let storage = {}, stores = ['userInfo', 'paperType', 'hasAnswer', 'lastAnswer', 'curOrder', 'remaining', 'isAssignment', 'hasReport'];
    stores.forEach(store => storage[store] = localStorage.getItem(store));
    storage.lastAnswer = storage.lastAnswer || 1;
    storage.curOrder = storage.curOrder || 1;
    return storage;
};
