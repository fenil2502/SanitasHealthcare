import {
    GetAllDropDownForEntryManagement,
    
    GetWorkshopDetailsByEventId,
    GetConferenceDetailByEventId,
    GetConferenceDescriptionByEventId,
    GetConferenceProgrammeDetail,
    GetSpeakersListForConferenceById,
    GetPackageListByEventId,
    GetEventSectionDetails,
    GetFormDetailsByEventId,
    AddEventVisitor,
    GetAllRelatedEvents,
    GetFormQuestionByEventId,
    GetFormDetailsByRefNo,
    GetBookingQuestionAnswerByAttendeeInformationId,
    
    // GoGlobal
    GetAllEvents,
    GetAllFiltersForEvents,
    GetAllFiltersForEventsGoGlobal,
    GetAllEventsForGoGlobal,
} from "../ApiEndPoints";
import { axiosGetAuthorize, axiosPostAuthorize } from "../AxiosRequests";

export default class EntryManagementServices {
    
    // async getAllDropDownForEntryManagement(request) {
    //     return axiosGetAuthorize(GetAllDropDownForEntryManagement, request);
    // }
    // async getWorkshopDetailsByEventId(request) {
    //     return axiosGetAuthorize(GetWorkshopDetailsByEventId, request);
    // }
    // async getConferenceDetailByEventId(request) {
    //     return axiosPostAuthorize(GetConferenceDetailByEventId, request);
    // }
    // async getConferenceDescriptionByEventId(request) {
    //     return axiosPostAuthorize(GetConferenceDescriptionByEventId, request);
    // }
    // async getConferenceProgrammeDetail(request) {
    //     return axiosPostAuthorize(GetConferenceProgrammeDetail, request);
    // }
    // async getSpeakersListForConferenceById(request) {
    //     return axiosGetAuthorize(GetSpeakersListForConferenceById, request);
    // }
    // async getPackageListByEventId(request) {
    //     return axiosGetAuthorize(GetPackageListByEventId, request);
    // }
    // async getEventSectionDetails(request) {
    //     return axiosGetAuthorize(GetEventSectionDetails, request);
    // }
    // async getFormDetailsByEventId(request) {
    //     return axiosGetAuthorize(GetFormDetailsByEventId, request);
    // }
    // async addEventVisitor(request) {
    //     return axiosPostAuthorize(AddEventVisitor, request);
    // }
    // async getAllFiltersForEvents(request) {
    //     return axiosGetAuthorize(GetAllFiltersForEvents, request);
    // }
    // async getAllRelatedEvents(request) {
    //     return axiosGetAuthorize(GetAllRelatedEvents, request);
    // }
    // async getFormQuestionByEventId(request) {
    //     return axiosGetAuthorize(GetFormQuestionByEventId, request);
    // }
    // async getFormDetailsByRefNo(request) {
    //     return axiosGetAuthorize(GetFormDetailsByRefNo, request);
    // }
    // async getBookingQuestionAnswerByAttendeeInformationId(request) {
    //     return axiosGetAuthorize(GetBookingQuestionAnswerByAttendeeInformationId, request);
    // }


    /// // Go Global Services
    // async getAllEvents(request) {
    //     return axiosPostAuthorize(GetAllEvents, request);
    // }

    // async getAllFiltersForEvents(request) {
    //     return axiosGetAuthorize(GetAllFiltersForEvents, request);
    // }

    async getAllFiltersForEventsGoGlobal(request) {
        return axiosGetAuthorize(GetAllFiltersForEventsGoGlobal, request);
    }

    async getAllEventsForGoGlobal(request) {
        return axiosPostAuthorize(GetAllEventsForGoGlobal, request);
    }
}