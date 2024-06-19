export function isArray(input) {
    return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]'
    );
}

export function isDate(input) {
    return (
        input instanceof Date ||
        Object.prototype.toString.call(input) === '[object Date]'
    );
}

export function isFunction(input) {
    return (
        (typeof Function !== 'undefined' && input instanceof Function) ||
        Object.prototype.toString.call(input) === '[object Function]'
    );
}

export function isNumber(input) {
    return (
        typeof input === 'number' ||
        Object.prototype.toString.call(input) === '[object Number]'
    );
}

export function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
        input != null &&
        Object.prototype.toString.call(input) === '[object Object]'
    );
}

export function isString(input) {
    return typeof input === 'string' ||
        input instanceof String;
}

export function isUndefined(input) {
    return input === void 0;
}
