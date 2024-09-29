import { axiosPost, axiosPostAuthorize } from '../AxiosRequests';
import { SendInquiryToAdmin } from '../ApiEndPoints';

export default class CommonServices {
    async sendInquiryToAdmin(request) {
        return axiosPost(SendInquiryToAdmin, request);
    }
}