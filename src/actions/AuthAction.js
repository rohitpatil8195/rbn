import { makeAPICall } from '../common';
import config from '../config';
////urlMediaLogin triggerMediaAuthLogin
export const TRIGGER_REGISTER = "TRIGGER_REGISTER";
export const TRIGGER_REGISTER_SUCCESS = "TRIGGER_REGISTER_SUCCESS";
export const TRIGGER_REGISTER_FAILED = "TRIGGER_REGISTER_FAILED";
export const TRIGGER_LOGIN = "TRIGGER_LOGIN";
export const TRIGGER_LOGIN_SUCCESS = "TRIGGER_LOGIN_SUCCESS";
export const TRIGGER_LOGIN_FAILED = "TRIGGER_LOGIN_FAILED";
export const TRIGGER_MEDIA_LOGIN = "TRIGGER_MEDIA_LOGIN";
export const TRIGGER_MEDIA_LOGIN_SUCCESS = "TRIGGER_MEDIA_LOGIN_SUCCESS";
export const TRIGGER_MEDIA_LOGIN_FAILED = "TRIGGER_MEDIA_LOGIN_FAILED";
export const TRIGGER_LOGOUT = "TRIGGER_LOGOUT";
export const TRIGGER_FORGOT = "TRIGGER_FORGOT";
export const TRIGGER_FORGOT_SUCCESS = "TRIGGER_FORGOT_SUCCESS";
export const TRIGGER_FORGOT_FAILED = "TRIGGER_FORGOT_FAILED";
export const TRIGGER_COUNTRY = "TRIGGER_COUNTRY";
export const TRIGGER_COUNTRY_SUCCESS = "TRIGGER_COUNTRY_SUCCESS";
export const TRIGGER_COUNTRY_FAILED = "TRIGGER_COUNTRY_FAILED";
export const TRIGGER_CITY = "TRIGGER_CITY";
export const TRIGGER_CITY_SUCCESS = "TRIGGER_CITY_SUCCESS";
export const TRIGGER_CITY_FAILED = "TRIGGER_CITY_FAILED";
export const TRIGGER_CATEGORY = "TRIGGER_CATEGORY";
export const TRIGGER_CATEGORY_SUCCESS = "TRIGGER_CATEGORY_SUCCESS";
export const TRIGGER_CATEGORY_FAILED = "TRIGGER_CATEGORY_FAILED";
export const TRIGGER_PRODUCT = "TRIGGER_PRODUCT";
export const TRIGGER_PRODUCT_SUCCESS = "TRIGGER_PRODUCT_SUCCESS";
export const TRIGGER_PRODUCT_FAILED = "TRIGGER_PRODUCT_FAILED";
export const TRIGGER_UNIT = "TRIGGER_UNIT";
export const TRIGGER_UNIT_SUCCESS = "TRIGGER_UNIT_SUCCESS";
export const TRIGGER_UNIT_FAILED = "TRIGGER_UNIT_FAILED";
export const TRIGGER_SEARCH = "TRIGGER_SEARCH";
export const TRIGGER_SEARCH_SUCCESS = "TRIGGER_SEARCH_SUCCESS";
export const TRIGGER_SEARCH_FAILED = "TRIGGER_SEARCH_FAILED";
export const TRIGGER_PROFILE = "TRIGGER_PROFILE";
export const TRIGGER_PROFILE_SUCCESS = "TRIGGER_PROFILE_SUCCESS";
export const TRIGGER_PROFILE_FAILED = "TRIGGER_PROFILE_FAILED";
export const TRIGGER_CUSTOM = "TRIGGER_CUSTOM";
export const TRIGGER_CUSTOM_SUCCESS = "TRIGGER_CUSTOM_SUCCESS";
export const TRIGGER_CUSTOM_FAILED = "TRIGGER_CUSTOM_FAILED";
export const TRIGGER_FORM1 = 'TRIGGER_FORM1';
export const TRIGGER_FORM2 = 'TRIGGER_FORM2';
export const TRIGGER_FORM3 = 'TRIGGER_FORM3';


export function triggerAuthRegister(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlRegister}`,
            dispatch,
            defaultAction: TRIGGER_REGISTER,
            successAction: TRIGGER_REGISTER_SUCCESS,
            failedAction: TRIGGER_REGISTER_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        makeAPICall(params)
      //  console.log("Auth reg: "+para)
    }
}

export function triggerAuthLogin(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlLogin}`,
            dispatch,
            defaultAction: TRIGGER_LOGIN,
            successAction: TRIGGER_LOGIN_SUCCESS,
            failedAction: TRIGGER_LOGIN_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        makeAPICall(params)
    }
}
 
export function triggerMediaAuthLogin(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlMediaLogin}`,
            dispatch,
            defaultAction: TRIGGER_MEDIA_LOGIN,
            successAction: TRIGGER_MEDIA_LOGIN_SUCCESS,
            failedAction: TRIGGER_MEDIA_LOGIN_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        makeAPICall(params)
        console.log("media param",params)
    }
}

export function triggerAuthForgot(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlForgot}`,
            dispatch,
            defaultAction: TRIGGER_FORGOT,
            successAction: TRIGGER_FORGOT_SUCCESS,
            failedAction: TRIGGER_FORGOT_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback,
        }
        makeAPICall(params)
        console.log(params)
     
    }
    
}

export function triggerLogout() {
    return {
        type: TRIGGER_LOGOUT,
    }
}

export function triggerAuthCountry(callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlCountry}`,
            dispatch,
            defaultAction: TRIGGER_COUNTRY,
            successAction: TRIGGER_COUNTRY_SUCCESS,
            failedAction: TRIGGER_COUNTRY_FAILED,
            type: "POST",
            headers: {},
            params: {},
            callback,
            errCallback
        }
        makeAPICall(params)
    }
}

export function triggerAuthCity(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlCity}`,
            dispatch,
            defaultAction: TRIGGER_CITY,
            successAction: TRIGGER_CITY_SUCCESS,
            failedAction: TRIGGER_CITY_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        //console.log(params)
        makeAPICall(params)
    }
}

export function triggerCategory(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlCategory}`,
            dispatch,
            defaultAction: TRIGGER_CATEGORY,
            successAction: TRIGGER_CATEGORY_SUCCESS,
            failedAction: TRIGGER_CATEGORY_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        makeAPICall(params)
    }
}

export function triggerProduct(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlProduct}`,
            dispatch,
            defaultAction: TRIGGER_PRODUCT,
            successAction: TRIGGER_PRODUCT_SUCCESS,
            failedAction: TRIGGER_PRODUCT_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        makeAPICall(params)
    }
}

export function triggerUnits(callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlUnit}`,
            dispatch,
            defaultAction: TRIGGER_UNIT,
            successAction: TRIGGER_UNIT_SUCCESS,
            failedAction: TRIGGER_UNIT_FAILED,
            type: "POST",
            headers: {},
            params: {},
            callback,
            errCallback
        }
        makeAPICall(params)
    }
}

export function triggerSearch(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlSearch}`,
            dispatch,
            defaultAction: TRIGGER_SEARCH,
            successAction: TRIGGER_SEARCH_SUCCESS,
            failedAction: TRIGGER_SEARCH_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        makeAPICall(params)
    }
}

export function triggerProfile(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlProfile}`,
            dispatch,
            defaultAction: TRIGGER_PROFILE,
            successAction: TRIGGER_PROFILE_SUCCESS,
            failedAction: TRIGGER_PROFILE_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        makeAPICall(params)
    }
}

export function triggerCustom(obj, callback, errCallback) {
    return dispatch => {
        const params = {
            url: `${config.apiBasePath}${config.urlCustom}`,
            dispatch,
            defaultAction: TRIGGER_CUSTOM,
            successAction: TRIGGER_CUSTOM_SUCCESS,
            failedAction: TRIGGER_CUSTOM_FAILED,
            type: "POST",
            headers: {},
            params: obj,
            callback,
            errCallback
        }
        makeAPICall(params)
        //console.log("paramss"+ JSON.stringify(params))

    }
}

export function triggerForm1() {
    return {
        type: TRIGGER_FORM1,
    }
}

export function triggerForm2() {
    return {
        type: TRIGGER_FORM2,
    }
}

export function triggerForm3() {
    return {
        type: TRIGGER_FORM3,
    }
}