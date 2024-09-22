import Cookies from 'universal-cookie';
import { encryptionData, decryptionData, encryptAES, decryptAES } from "./Encryption";
import { IsCookieEncryption } from "./AppSetting";

const cookies = new Cookies();
export const createCookie = (props) => {
    let cookieValue = props.cookieValue;
    let cookieName = props.cookieName;

    // check if encryption is required for the cookie.
    if (IsCookieEncryption) {
        // cookieValue = encryptionData(cookieValue, 1);
        let str = JSON.stringify(cookieValue);
        cookieValue = encryptAES(str, 1);
    }
    cookies.set(cookieName, cookieValue,
        {
            maxAge: props.expirationTime * 60,
            path: '/'
        });
};

export const setCookie = (props) => {
    let cookieValue = props.cookieValue;
    let cookieName = props.cookieName;

    if (IsCookieEncryption) {
        // cookieValue = encryptionData(cookieValue, 1);
        let str = JSON.stringify(cookieValue);
        cookieValue = encryptAES(str, 1);
    }
    cookies.set(cookieName, cookieValue, { path: '/' });
}
export const setCookieForRequest = (props) => {
    let cookieValue = props.cookieValue;
    let cookieName = props.cookieName;

    if (IsCookieEncryption) {
        // cookieValue = encryptionData(cookieValue, 1);
        let str = JSON.stringify(cookieValue);
        cookieValue = encryptAES(str, 1);
    }
    cookies.set(cookieName, cookieValue, { path: '/' });
    const isCookieExistOrNot = cookies.get(cookieName, { doNotParse: false });
    if (isCookieExistOrNot) {
        return true
    }else{
        return false
    }
}
export function getCookie(cookieName, doNotParse = false) {
    if (IsCookieEncryption) {
        const cookieValue = cookies.get(cookieName, { doNotParse: doNotParse })
        if (cookieValue) {
            let decObj = decryptAES(cookieValue, true);
            if (decObj !== 'error 1' && decObj !== 'error 2' && decObj !== 'error 3')
                return JSON.parse(decObj);
            else
                return decObj;
        }
    }
    else {
        return false;
    }
}

export const getAllCookies = (doNotParse = false) => {
    const cookieValue = cookies.getAll({ doNotParse: doNotParse });
    if (IsCookieEncryption) {
        let decObj = decryptAES(cookieValue, true);
        if (decObj !== 'error 1' && decObj !== 'error 2' && decObj !== 'error 3')
            return JSON.parse(decObj);
        else
            return decObj;
    }
    return cookieValue;
};

export const removeCookie = (cookieName, options = {}) => {
    cookies.remove(cookieName, options);
};


export const removeAllCookies = (doNotParse = false) => {
    Object.keys(cookies.cookies).forEach(element => {
        cookies.remove(element, {});
    });
};

export const isCookieExist = (cookieName) => {
    const cookieDetail = getCookie(cookieName);
    if (cookieDetail) {
        return true;
    }
    else {
        return false;
    }
}

export const isTokenExist = (cookieName = "Token") => {
    let cookieStatus = isCookieExist(cookieName);
    if (cookieStatus) {
        const cookieDetail = getCookie(cookieName);
        let date = new Date();
        let currentDate = new Date().getTime();
        let expire = new Date(cookieDetail.expires).getTime();
        if (cookieDetail && cookieDetail.token && expire > currentDate) {
            return true;
        } else
            return false;
    }
    else {
        return false;
    }

}

export const removeAllCookiesLogOut = (doNotParse = false) => {
    Object.keys(cookies.cookies).forEach(element => {
        cookies.remove(element, { path: '/' });
    });
    return true;
};