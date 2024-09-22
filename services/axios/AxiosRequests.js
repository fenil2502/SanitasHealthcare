/**
 * This file contain the all the Common API type of requests
 * 
 */

import { encryptionAPI } from '../../utils/Encryption';
import { APIURL } from './ApiEndPoints';
import { axiosInstance, axiosInstanceWithoutEnrypt } from '../../utils/AxiosInterceptor';
import { BasicAuthKey, IsEncryption } from '../../utils/AppSetting'
import { isAuthorized, getTokenProps, getAuthProps } from "../../utils/AuthenticationLibrary";
import { isTokenExist } from "../../utils/CookieHandler";
import { GenerateToken } from "../../services/axios/ApiEndPoints";
import axios from 'axios';

// common post request with encryption
export function axiosPost(url, request) {
    var data = { data: (IsEncryption) ? encryptionAPI(request, 1) : request };
    return axiosInstance.post(APIURL + url, data);
}

//** POST Authorize */
export function axiosPostAuthorize(url, request, isFormData) {
    var data = { data: (IsEncryption) ? encryptionAPI(request, 1) : request };

    if (isFormData) {
        let headers = {
            // Authorization: `Bearer ${tokenProp.token}`,
            'content-type': 'multipart/form-data',
        };
        return axiosInstance.post(APIURL + url, request, { headers });
    } else {

        return axiosInstance.post(APIURL + url, data);
    }
}

export function axiosGetAuthorize(url, param) {

    return axiosInstance.get(APIURL + url.replace("{0}", (IsEncryption) ? encryptionAPI(param, 0) : param));

    // let tokenProp = getTokenProps();
    // if (tokenProp) {
    //     let headers = { Authorization: `Bearer ${tokenProp.token}` };
    //     return axiosInstance.get(APIURL + url.replace("{0}", (IsEncryption) ? encryptionAPI(param, 0) : param), { headers });
    // } else {
    //     window.location.href = "/";
    //     return false;
    // }
}


// export function axiosGetAuthorize(url, param) {

//     debugger
//     if (isAuthorized()) {
//         let tokenProp = getAuthProps();
//         if (getAuthProps()) {
//             let headers = { Authorization: `Bearer ${tokenProp.token}` };
//             return axiosInstance.get(APIURL + url.replace("{0}", (IsEncryption) ? encryptionAPI(param, 0) : param), { headers });
//         } else {
//             let headers = { Authorization: BasicAuthKey, LocalToken: tokenProp.token };
//             // var abc = axiosInstance.get(APIURL + GenerateToken, { headers });
//             // axios({
//             //     url: APIURL + GenerateToken,
//             //     method: 'get',
//             //     headers: headers
//             //  })
//             //  .then(response => {
//             //     debugger;
//             //     console.log('AxiosResponse', response)
//             //  }) 
//             //  .catch(err => {
//             //     debugger;
//             //     console.log('AxiosResponse', err);
//             //  });

//             // axios.get(APIURL + GenerateToken)
//             //     .then(response => console.log('AxiosResponse2', response));

//             // fetch(APIURL + GenerateToken)
//             // .then(res => res.json())
//             // .then(
//             //   (result) => {
//             //     console.log('AxiosResponsess', result);
//             //   },
//             //   // Note: it's important to handle errors here
//             //   // instead of a catch() block so that we don't swallow
//             //   // exceptions from actual bugs in components.
//             //   (error) => {
//             //     console.log('AxiosResponseee', error);
//             //   }
//             // )

//             CustomAxiosInterceptor.get(APIURL + GenerateToken)
//                 .then(response => console.log("res 1: ", response))
//                 .catch(error => console.log("res 2: ", response));

//         }
//         // let headers = { Authorization: `Bearer ${tokenProp.token}` };

//     }
//     else {
//         window.location.href = "/";
//         return false;
//     }
// }
// ######################################################################################
// export function axiosGetAuthorize(url, param) {
//     let loginUser = getAuthProps();
//     if (loginUser) {
//         if (isTokenExist()) {
//             let headers = { Authorization: `Bearer ${loginUser.token.token}` };
//             return axiosInstance.get(APIURL + url.replace("{0}", (IsEncryption) ? encryptionAPI(param, 0) : param), { headers });
//         } else {
//             window.location.href = "/";
//             return false;
//         }
//     }
//     else {
//         window.location.href = "/";
//         return false;
//     }
// }

// common get request with encryption and one parameter
export function axiosGet(url, param) {
    return axiosInstance.get(APIURL + url.replace("{0}", (IsEncryption) ? encryptionAPI(param, 0) : param));
}

// common get request with encryption and multiple parameter
export function axiosGetMultiParams(url, params) {
    console.log("url : ", url, "param : ", params);
    params.forEach((value, key) => {
        url = url.replace("{" + key + "}", (IsEncryption) ? encryptionAPI(value, 0) : value);
    });
    return axiosInstance.get(APIURL + url);
}


// common post request with encryption
export function axiosPostWithoutEncryption(url, request, isFormData) {
    if (isFormData) {
        let headers = {
            // Authorization: `Bearer ${loginUser.token.token}`,
            'content-type': 'multipart/form-data',
        };

        return axiosInstance.post(APIURL + url, request, { headers });

    }
    return axiosInstance.post(APIURL + url, request);
}

export function axiosPostFileAuthorizeblob(url, request, isFormData) {
    var data = { data: (IsEncryption) ? encryptionAPI(request, 1) : request };
    // let tokenProp = getTokenProps();
    // let abc = 'Bearer ' + tokenProp.data;
    let headers = { Authorization: "" };

    return axiosInstanceWithoutEnrypt.post(APIURL + url, data, { headers, responseType: 'blob' });

}

export function axiosGetFileAuthorizeblob(url, params) {
    params.forEach((value, key) => {
        url = url.replace("{" + key + "}", (IsEncryption) ? encryptionAPI(value, 0) : value)
    });
    let headers = { Authorization: "" };
    return axiosInstanceWithoutEnrypt.get(APIURL + url, { headers, responseType: 'blob' });
}

