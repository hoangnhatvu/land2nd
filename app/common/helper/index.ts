import React from 'react';

export function isObject(obj: any) {
    return obj !== undefined && obj !== null && obj.constructor === Object;
}

export function isArray(obj: any) {
    return obj !== undefined && obj !== null && obj.constructor === Array;
}

export const IsEmptyArray = (arr: any) => isArray(arr) && arr.length === 0;

export function isBoolean(obj: any) {
    return obj !== undefined && obj !== null && obj.constructor === Boolean;
}

export function isNumber(obj: any) {
    return (
        obj !== undefined &&
        obj !== null &&
        !Number.isNaN(obj) &&
        obj.constructor === Number
    );
}

export function isString(obj: any) {
    return obj !== undefined && obj !== null && obj.constructor === String;
}

export const IsEmptyString = (str: string) => {
    if (isString(str)) {
        return str.length === 0;
    }
    return true;
};

export const _isVietnamesePhoneNumber = (inputtxt: any) => {
    if (inputtxt.length > 10) {
        return false;
    }
    const phoneVnRegex = /(03|07|08|09|01|3|7|8|9|1[2|6|8|9])+([0-9]{8})\b/;
    if (inputtxt.match(phoneVnRegex)) {
        return true;
    } else {
        return false;
    }
};

/**
 * ignore the first mount
 * @param {*} fn callback
 * @param {*} deps dependencies
 */
export function useDidUpdateEffect(fn: any, deps: any) {
    const isMountingRef = React.useRef(false);
    React.useEffect(() => {
        isMountingRef.current = true;
    }, []);
    React.useEffect(() => {
        if (!isMountingRef.current) {
            return fn();
        } else {
            isMountingRef.current = false;
        }
    }, deps);
}
