export const difference = (a, b) => a.filter(i => b.indexOf(i) < 0);

export const cloneDeep = source => JSON.parse(JSON.stringify(source));

export const isEmpty = source => source === '' || source === null || source === undefined || JSON.stringify(source) === '{}' || JSON.stringify(source) === '[]';

export const getStorage = (store) => {
    let storage = {};
    for (let i in store) {
        storage[store[i]] = localStorage.getItem(store[i]);
    }
    return storage;
};

export const setStorage = (storage) => {
    Object.keys(storage).forEach(i => {
        localStorage.setItem(i, storage[i]);
    });
};
