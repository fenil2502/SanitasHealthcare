// import { AddExternalInvoicePaymentConfirmationDetails, AddMembershipPaymentConfirmationDetails, AddMembershipPaymentData, APIURL, CalculatePaymentFromTenure, CorporateMemberLogin, DownloadInvoice, ForgotPassword, GeneratePaymentInvoice, GenerateToken, GetAllCompanyType, GetAllDropdownForMembershipPayment, GetAllOrganisationName, GetAllResourceToDisplay, GetBasePriceInfoForPayment, GetBookingConfirmationDetailsByBookingId, GetCommunitySpotlightList, GetCompanyInformationForPayment, GetFinanceAdhokInvoiceDetail, GetGSTRate, getImage, GetMembershipPurchaseChapterReconciliationDetailsById, GetMembershipReconciliationDetailsById, GoGlobalMemberLogin, IndividualMemberLogin, IndividualMemberSignUp, LoadInitialProps, RenewCorporateMember, SendReconciliationPaymentLinkToCorporate, UpdatePaymentHistory, UpdatePaymentHistoryForFinanceAdhoc } from '../services/axios/ApiEndPoints';
// import { BasicAuthKey, value4 } from './AppSetting';
// import { getAuthProps, getTokenProps, setTokenProps, setTokenPropsForRequest } from './AuthenticationLibrary';
// import { isTokenExist } from './CookieHandler';
// import { decryptionAPI, encryptionAPI, } from './Encryption';

// const axios = require('axios');

// export const axiosInstance = axios.create({
//     baseURL: APIURL
// })
// axiosInstance.interceptors.response.use(
//     response => successHandler(response),
//     error => errorHandler(error)
// )
// const isHandlerEnabled = (config = {}) => {
//     // return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
//     //     false : true
//     return false
// }
// const requestHandler = async (request) => {
//     if (isHandlerEnabled(request)) {
//     }
//     let oldReq = { ...oldReq };
//     if (request.url !== APIURL + GenerateToken) {
//         let oldReqTemp = request;
//         oldReqTemp = request;
//         oldReq = oldReqTemp;
//     }
//     let tokenProp = getTokenProps(value4);
//     if (tokenProp && isTokenExist(value4)) {
//         request.headers.Authorization = `Bearer ${tokenProp.token}`;
//         return request
//     } else if (request.url === APIURL + GenerateToken
//         || request.url === APIURL + GoGlobalMemberLogin
//         || request.url.includes(APIURL + getImage)
//     ) {
//         return request
//     }
//     else {
//         var cookie = await getAuthProps();
//         let sessionType;
//         let requestObj;
//         if (cookie) {
//             if (cookie.isCorporateMember === true) {
//                 sessionType = 6;
//             }
//             requestObj = {
//                 valueParam: BasicAuthKey,
//                 memberId: (cookie.isCorporateMember === true) ? cookie.corporateMemberId : cookie.individualMemberId,
//                 sessionType: sessionType
//             };
//         }
//         else {
//             sessionType = 5;
//             requestObj = {
//                 valueParam: BasicAuthKey,
//                 memberId: 0,
//                 sessionType: sessionType
//             };
//         }

//         // let request = { data: encryptionAPI(requestObj, 1) };
//         // let requestUrl = APIURL + LoadInitialProps;

//         // const response = await axios.post(requestUrl, request, {headers: {"Content-Type": "application/json", 'Authorization': BasicAuthKey}});
//         // if (response.status === 200) {
//         //     let responseObj = decryptionAPI(response.data);
//         //     if (responseObj.statusCode === 200) {
//         //         let isCookieSet = setTokenPropsForRequest(responseObj.responseItem.responseContent, value4);
//         //         if (isCookieSet) {
//         //             // let tokenProps = getTokenProps("Token");
//         //             let tokenProps = getTokenProps(value4);
//         //             oldReq.headers.Authorization = `Bearer ${tokenProps.token}`;
//         //             return oldReq;
//         //         }
//         //     }
//         // }
//         let headers = { Authorization: BasicAuthKey };
//         const value = await axiosInstance.get(APIURL + GenerateToken, { headers });
//         let isCookieSet = setTokenPropsForRequest(value.responseItem.responseContent, "Token");
//         if (isCookieSet) {
//             let tokenProps = getTokenProps();
//             oldReq.headers.Authorization = `Bearer ${tokenProps.token}`;
//             return oldReq
//         }
//     }


// }
// axiosInstance.interceptors.request.use(
//     request => requestHandler(request)
// )
// const errorHandler = (error) => {
//     if (isHandlerEnabled(error.config)) {
//         //error page
//     }
//     return Promise.reject({ ...error })
// }

// const successHandler = (response) => {
//     if (isHandlerEnabled(response.config)) {
//         response = decryptionAPI(response.data);
//     }
//     return response
// }

// export const axiosInstanceWithoutEnrypt = axios.create({
//     baseURL: APIURL
// })



// Resct Code 
import { APIURL } from '../services/axios/ApiEndPoints';
import { decryptionAPI } from './Encryption';

const axios = require('axios');
// axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({    
    baseURL: APIURL
})
axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
  )
const isHandlerEnabled = (config={}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
      false : true
  }
// await axiosInstance.get('/v2/api-endpoint', { handlerEnabled: false }) --if we want to exclude any api from using interceptor use this
const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
    }
    return request
}
axiosInstance.interceptors.request.use(
    request => requestHandler(request)
)
const errorHandler = (error) => {
        if (isHandlerEnabled(error.config)) {
            //error page
        }
    return Promise.reject({ ...error })
}

const successHandler = (response) => {
    if (isHandlerEnabled(response.config)) {
        response = decryptionAPI(response.data);
    }
    return response
}

export const axiosInstanceWithoutEnrypt = axios.create({    
    baseURL: APIURL
})
