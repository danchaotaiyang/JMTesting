export const difference = (a, b) => this.filter(i => b.indexOf(i) < 0);
export const cloneDeep = source => JSON.parse(JSON.stringify(source));
export const isEmpty = source => source === '' || source === null || source === undefined || JSON.stringify(source) === '{}' || JSON.stringify(source) === '[]';

export const getStorage = () => {
    let storage = {}, stores = ['userInfo', 'paperType', 'hasAnswer', 'currentOrder', 'remaining', 'isAssignment', 'hasReport'];
    stores.forEach(store => storage[store] = localStorage.getItem(store));
    storage.currentOrder = storage.currentOrder || 1;
    return storage;
};

export const setStorage = (storage) => {
    Object.keys(storage).forEach(i => {
        localStorage.setItem(i, storage[i]);
    });
};
