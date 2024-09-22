import { AddEventBookingBatchJobRecordsAfterPaymentRequest, AddMembershipBatchJobRecordsAfterPayment } from "../ApiEndPoints";
import {  axiosPost } from "../AxiosRequests";

export default class BatchJobServices {
    async addMembershipBatchJobRecordsAfterPayment(request){
        return axiosPost(AddMembershipBatchJobRecordsAfterPayment,request);
      }
    async addEventBookingBatchJobRecordsAfterPaymentRequest(request){
        return axiosPost(AddEventBookingBatchJobRecordsAfterPaymentRequest,request);
      }
}
