import { GetEventDietaryList, GetEventBreakoutSessionsProgramme, GetBookingConfirmationDetailsByBookingId, GetEntryPricingDetailByEventId, GetEntryAddOnDetailByEventId, GetEntryDetailForBookingByEntryId, GetMemberDetailForBookingByMemberId, CheckIfMemberExistsForBooking, GetEventQuestionDetailForBooking, GetCorporateMemberDetailForBookingByMemberId, AddEditIndividualBookingDetails, AddFormSubmittedAnswer, GetEventGuestDetailForBooking, UpdatePaymentHistory, GetEntryDetailForFormBookingByEntryId, GetLessonTimeSlotDetailsById, AddEditCorporateBookingDetails, GetTimeSlotDetailsByTimeSlotId, SendGuestInvitationEmail, CheckIfBookingExistsById, GetUpcomingBookingHistoryByMemberId, GetPastBookingHistoryByMemberId, GetAllDropDownForEntryManagement, CancelBooking, AddPaymentConfirmationDetails, StoreBase64Image, uploadPDF, SendEmailOnSuccessfulPaymentForForm, GetAllDropdownsForIndividualBooking, SendReconciliationPaymentLinkForEventBooking, LoginToCorporateMemberForIndividualMember } from "../ApiEndPoints";
import { axiosGetAuthorize, axiosGetMultiParams, axiosPostAuthorize, axiosPostWithoutEncryption } from "../AxiosRequests";

export default class IndividualBookingServices {

    async getEventDietaryList(request) {
        return axiosGetAuthorize(GetEventDietaryList, request);
    }
    async getEventBreakoutSessionsProgramme(request) {
        return axiosPostAuthorize(GetEventBreakoutSessionsProgramme, request);
    }
    async getBookingConfirmationDetailsByBookingId(request) {
        return axiosGetAuthorize(GetBookingConfirmationDetailsByBookingId, request);
    }

    async getEntryPricingDetailByEventId(request) {
        return axiosPostAuthorize(GetEntryPricingDetailByEventId, request);
    }
    async getEntryAddOnDetailByEventId(request) {
        return axiosPostAuthorize(GetEntryAddOnDetailByEventId, request);
    }
    async getEntryDetailForBookingByEntryId(request) {
        return axiosPostAuthorize(GetEntryDetailForBookingByEntryId, request);
    }
    async getMemberDetailForBookingByMemberId(request) {
        return axiosGetAuthorize(GetMemberDetailForBookingByMemberId, request);
    }
    async checkIfMemberExistsForBooking(request) {
        return axiosGetAuthorize(CheckIfMemberExistsForBooking, request);
    }
    async getEventQuestionDetailForBooking(request) {
        return axiosGetAuthorize(GetEventQuestionDetailForBooking, request);
    }
    async getCorporateMemberDetailForBookingByMemberId(request) {
        return axiosGetAuthorize(GetCorporateMemberDetailForBookingByMemberId, request);
    }
    async addEditIndividualBookingDetails(request) {
        return axiosPostAuthorize(AddEditIndividualBookingDetails, request);
    }
    async addFormSubmittedAnswer(request) {
        return axiosPostAuthorize(AddFormSubmittedAnswer, request);
    }
    async getEventGuestDetailForBooking(request) {
        return axiosGetAuthorize(GetEventGuestDetailForBooking, request);
    }
    async updatePaymentHistory(request) {
        return axiosGetMultiParams(UpdatePaymentHistory, request);
    }
    async getEntryDetailForFormBookingByEntryId(request) {
        return axiosGetAuthorize(GetEntryDetailForFormBookingByEntryId, request);
    }
    async getLessonTimeSlotDetailsById(request) {
        return axiosGetAuthorize(GetLessonTimeSlotDetailsById, request);
    }
    async getTimeSlotDetailsByTimeSlotId(request) {
        return axiosGetAuthorize(GetTimeSlotDetailsByTimeSlotId, request);
    }

    async addEditCorporateBookingDetails(request) {
        return axiosPostAuthorize(AddEditCorporateBookingDetails, request);
    }
    async getTimeSlotDetailsByTimeSlotId(request) {
        return axiosGetAuthorize(GetTimeSlotDetailsByTimeSlotId, request);
    }
    async sendGuestInvitationEmail(request) {
        return axiosPostAuthorize(SendGuestInvitationEmail, request);
    }
    async checkIfBookingExistsById(request) {
        return axiosPostAuthorize(CheckIfBookingExistsById, request);
    }
    async getPastBookingHistoryByMemberId(request) {
        return axiosPostAuthorize(GetPastBookingHistoryByMemberId, request);
    }
    async getUpcomingBookingHistoryByMemberId(request) {
        return axiosPostAuthorize(GetUpcomingBookingHistoryByMemberId, request);
    }
    async getAllDropDownForEntryManagement(request) {
        return axiosGetAuthorize(GetAllDropDownForEntryManagement, request);
    }
    async cancelBooking(request) {
        return axiosPostAuthorize(CancelBooking, request);
    }
    async addPaymentConfirmationDetails(request) {
        return axiosPostAuthorize(AddPaymentConfirmationDetails, request);
    }
    async getAllDropdownsForIndividualBooking(request) {
        return axiosGetAuthorize(GetAllDropdownsForIndividualBooking, request);
    }
    async storeBase64Image(request) {
        return axiosPostWithoutEncryption(StoreBase64Image, request, false);
    }
    async uploadPDF(request) {
        let formData = new FormData();
        formData.append("file", request.file);
        formData.append("filename", request.filename);
        formData.append("storagePath", request.storagePath);

        return axiosPostWithoutEncryption(uploadPDF, formData, true);
    }

    async sendEmailOnSuccessfulPaymentForForm(request) {
        return axiosPostAuthorize(SendEmailOnSuccessfulPaymentForForm, request);
    }

    async sendReconciliationPaymentLinkForEventBooking(request) {
        return axiosPostAuthorize(SendReconciliationPaymentLinkForEventBooking, request);
    }
    async loginToCorporateMemberForIndividualMember(request) {
        return axiosPostAuthorize(LoginToCorporateMemberForIndividualMember, request);
    }
}