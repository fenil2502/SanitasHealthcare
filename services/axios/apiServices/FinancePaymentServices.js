import { GetFinanceAdhokInvoiceDetail, AddAdhocPaymentData, UpdatePaymentHistoryForFinanceAdhoc, SendReconciliationPaymentLinkForAdHocInvoice, AddExternalInvoicePaymentConfirmationDetails, ApplyVoucherCodeForMembershipPayment, ApplyVoucherCodeForBooking, ApplyVoucherCodeForAdditionalChapter, ApplyVoucherCodeForFormBooking, GetEventDetailsByEventId, AddEditBookingDetailsForEventApproval, GetGSTRate } from "../ApiEndPoints";
import { axiosGetAuthorize, axiosPostAuthorize } from "../AxiosRequests";

export default class FinancePaymentServices {
  async getFinanceAdhocInvoiceDetail(request) {
    return axiosGetAuthorize(GetFinanceAdhokInvoiceDetail, request);
  }
  async addAdhocPaymentData(request) {
    return axiosPostAuthorize(AddAdhocPaymentData, request);
  }
  async updatePaymentHistoryForFinanceAdhoc(request) {
    return axiosGetAuthorize(UpdatePaymentHistoryForFinanceAdhoc, request);
  }
  async sendReconciliationPaymentLinkForAdHocInvoice(request) {
    return axiosPostAuthorize(SendReconciliationPaymentLinkForAdHocInvoice, request);
  }
  async addExternalInvoicePaymentConfirmationDetails(request) {
    return axiosPostAuthorize(AddExternalInvoicePaymentConfirmationDetails, request);
  }
  async applyVoucherCodeForMembershipPayment(request) {
    return axiosPostAuthorize(ApplyVoucherCodeForMembershipPayment, request);
  }
  async applyVoucherCodeForBooking(request) {
    return axiosPostAuthorize(ApplyVoucherCodeForBooking, request);
  }
  async applyVoucherCodeForAdditionalChapter(request) {
    return axiosPostAuthorize(ApplyVoucherCodeForAdditionalChapter, request);
  }
  async applyVoucherCodeForFormBooking(request) {
    return axiosPostAuthorize(ApplyVoucherCodeForFormBooking, request);
  }
  async getEventDetailsByEventId(request) {
    return axiosGetAuthorize(GetEventDetailsByEventId, request);
  }
  async addEditBookingDetailsForEventApproval(request) {
    return axiosPostAuthorize(AddEditBookingDetailsForEventApproval, request);
  }

  async getGSTRate(request) {
    return axiosGetAuthorize(GetGSTRate, request);
  }
}
