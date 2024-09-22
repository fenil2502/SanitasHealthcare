import {
  AddMembershipPaymentData,
  CalculatePaymentFromTenure,
  GetBasePriceInfoForPayment,
  GetCompanyInformationForPayment,
  DownloadInvoice,
  GeneratePaymentInvoice,
  UpdatePaymentHistoryForMembershipPayment,
  GetMembershipReconciliationDetailsById,
  AddMembershipPaymentConfirmationDetails,
  SendReconciliationPaymentLinkToCorporate,
  BuyChapterForCorporateMember,
  UpdatePaymentHistoryForAdditionalChapter,
  SendReconciliationPaymentLinkForBuyChapter,
  GetMembershipPurchaseChapterReconciliationDetailsById,
  GetAllDropdownForMembershipPayment,
} from "../ApiEndPoints";
import {
  axiosGetAuthorize,
  axiosGetFileAuthorizeblob,
  axiosPostAuthorize,
} from "../AxiosRequests";

export default class MembershipPaymentServices {
  async getCompanyInformationForPayment(request) {
    return axiosGetAuthorize(GetCompanyInformationForPayment, request);
  }
  async getBasePriceInfoForPayment(request) {
    return axiosGetAuthorize(GetBasePriceInfoForPayment, request);
  }
  async getcalculatedPaymentPrice(request) {
    return axiosPostAuthorize(CalculatePaymentFromTenure, request);
  }
  async addMembershipPaymentData(request) {
    return axiosPostAuthorize(AddMembershipPaymentData, request);
  }
  async downloadInvoice(request) {
    //return axiosGetAuthorize(DownloadInvoice, request);
    return axiosGetFileAuthorizeblob(DownloadInvoice, request);
  }
  async generatePaymentInvoice(request) {
    return axiosPostAuthorize(GeneratePaymentInvoice, request);
  }

  async updatePaymentHistoryForMembershipPayment(request) {
    return axiosGetAuthorize(UpdatePaymentHistoryForMembershipPayment, request);
  }
  async getMembershipReconciliationDetailsById(request) {
    return axiosGetAuthorize(GetMembershipReconciliationDetailsById, request);
  }
  async addMembershipPaymentConfirmationDetails(request) {
    return axiosPostAuthorize(AddMembershipPaymentConfirmationDetails, request);
  }
  async sendReconciliationPaymentLinkToCorporate(request) {
    return axiosPostAuthorize(SendReconciliationPaymentLinkToCorporate, request);
  }
  async buyChapterForCorporateMember(request) {
    return axiosPostAuthorize(BuyChapterForCorporateMember, request);
  }
  async updatePaymentHistoryForAdditionalChapter(request) {
    return axiosGetAuthorize(UpdatePaymentHistoryForAdditionalChapter, request);
  }
  async sendReconciliationPaymentLinkForBuyChapter(request) {
    return axiosPostAuthorize(SendReconciliationPaymentLinkForBuyChapter, request);
  }
  async getMembershipPurchaseChapterReconciliationDetailsById(request) {
    return axiosGetAuthorize(GetMembershipPurchaseChapterReconciliationDetailsById, request);
  }
  async getAllDropdownForMembershipPayment(request) {
    return axiosGetAuthorize(GetAllDropdownForMembershipPayment, request);
  }

}
