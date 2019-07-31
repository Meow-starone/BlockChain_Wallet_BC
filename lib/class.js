export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};
/* istanbul ignore next */
export function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/* istanbul ignore next */
export function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}
let storage = localStorage;
export function addCollectList(val) {
   let currentVal = JSON.parse(storage.getItem('collectList'))||[];
   currentVal.push(val);
   storage.setItem('collectList',JSON.stringify(currentVal));
}
export function removeCollectList(val) {
   let currentVal = JSON.parse(storage.getItem('collectList'))||[];
   let index = currentVal.indexOf(val);
   currentVal.splice(index,1);
   storage.setItem('collectList',JSON.stringify(currentVal));
}
export function isCollectList(val) {
    let currentVal = JSON.parse(storage.getItem('collectList'))||[];
    return currentVal.indexOf(val)>=0?true:false;

}
export function getCollectList() {
    return JSON.parse(storage.getItem('collectList'))||[];
}