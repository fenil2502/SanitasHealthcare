import { GetCompanyInfoForContactUs, SendInquiryToAdmin } from "../ApiEndPoints";
import {  axiosGetAuthorize,  axiosPostAuthorize } from "../AxiosRequests";


export default class ContactUsServices {

    async sendInquiryToAdmin(request) {
        return axiosPostAuthorize(SendInquiryToAdmin, request);
    }

    // async getCompanyInfoForContactUs(request) {
    //     return axiosGetAuthorize(GetCompanyInfoForContactUs, request);
    // }
}
