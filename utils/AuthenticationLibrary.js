import Router from 'next/router';
import Cookies from 'universal-cookie';
import { value3, value4, value5 } from './AppSetting';
import { createCookie, getCookie, removeAllCookies, isCookieExist, setCookie, setCookieForRequest, removeAllCookiesLogOut } from "./CookieHandler";

const authCookieName = value3;
const tokenCookieName = value4;
const basicTokenCookieName = value5;

const cookies = new Cookies();
export const setAuthProps = (data) => {
    const authProps = {
        cookieName: authCookieName,
        cookieValue: data,
        expirationTime: data.sessionTimeout
    }
    createCookie(authProps);
    setTokenProps(data.token, tokenCookieName);
    //setTokenProps(data.basicToken, basicTokenCookieName);
}

export const getAuthProps = () => {

    return getCookie(authCookieName);
}

export const isAuthorized = () => {
    return isCookieExist(authCookieName);
}

export const setTokenProps = (data, tokenName) => {
    const tokenProps = {
        cookieName: tokenName,
        cookieValue: data
    }
    setCookie(tokenProps);
}
export const setTokenPropsForRequest = (data, tokenName) => {
    const tokenProps = {
        cookieName: tokenName,
        cookieValue: data
    }
    return setCookieForRequest(tokenProps);
}

export const getTokenProps = (tokenCookie = tokenCookieName) => {
    return getCookie(tokenCookie);
}

export const signOut = () => {
    // removeAllCookies();
    if (removeAllCookiesLogOut()) {
        const cookieValue = cookies.get(authCookieName, { doNotParse: false });
        if (cookieValue) {

        } else {
            Router.push("/");
        }

    }
}