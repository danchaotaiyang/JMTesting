export const hasClass = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
};

export const addClass = (el, className) => {
    if (hasClass(el, className)) {
        return;
    }
    let curClassName = el.className.split(' ');
    curClassName.push(className);
    el.className = curClassName.join(' ');
};
