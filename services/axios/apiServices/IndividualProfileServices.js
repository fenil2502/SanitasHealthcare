import { AddEditCommunicationProfile, AddEditIndividualCommitteeProfile, AddEditSGTechInterestProfile, GetAllDropdownsIndividualProfile, AddEditIndividualCommittee, GetIndividualCommittee, GetAllIndividualProfileDetail, UpdateIndividualProfileBasicInformation, DeleteCommittees, GetCorporateMembershipSubscriptionById, GetChapterInformationById, AddEditIndividualBasicInformation, StoreBase64Image, GetAllIndividualProfileDetails, AddEditEmploymentInformation, GetIndividualContributionList, AddEditIndividualContribution } from "../ApiEndPoints";
import { axiosGetAuthorize, axiosPostAuthorize, axiosPostWithoutEncryption } from "../AxiosRequests";

export default class IndividualProfileServices {

    async getAllIndividualProfileDetail(request) {
        return axiosGetAuthorize(GetAllIndividualProfileDetails, request);
    }

    async updateIndividualProfileBasicInformation(request) {

        return axiosPostAuthorize(UpdateIndividualProfileBasicInformation, request)
    }

    async addEditSGTechInterestProfile(request) {
        return axiosPostAuthorize(AddEditSGTechInterestProfile, request)
    }

    async addEditCommunicationProfile(request) {
        return axiosPostAuthorize(AddEditCommunicationProfile, request)
    }

    async addEditIndividualCommitteeProfile(request) {
        return axiosPostAuthorize(AddEditIndividualCommitteeProfile, request)
    }

    async getAllDropdownsIndividualProfile() {
        return axiosGetAuthorize(GetAllDropdownsIndividualProfile);
    }
    async joinCommittee(request) {
        return axiosPostAuthorize(AddEditIndividualCommittee, request)
    }
    async getJoinedCommittee(request) {
        return axiosGetAuthorize(GetIndividualCommittee, request)
    }
    async deleteCommittees(request) {
        return axiosPostAuthorize(DeleteCommittees, request);
    }

    // new 01/08/2022

    async getCorporateMembershipSubscriptionById(request) {
        return axiosGetAuthorize(GetCorporateMembershipSubscriptionById, request)
    }
    async getChapterInformationById(request) {
        return axiosGetAuthorize(GetChapterInformationById, request)
    }
    async getIndividualCommittee(request) {
        return axiosGetAuthorize(GetIndividualCommittee, request);
    }
    async addEditIndividualProfile(request) {
        return axiosPostAuthorize(AddEditIndividualBasicInformation, request);
    }
    async getIndividualProfileDetails(request) {
        return axiosGetAuthorize(GetAllIndividualProfileDetail, request);
    }
    async storeBase64Image(request) {
        return axiosPostWithoutEncryption(StoreBase64Image, request, false);
    }
    async addEditEmploymentInformation(request) {
        return axiosPostAuthorize(AddEditEmploymentInformation, request);
    }
    async getIndividualContributionList(request) {
        return axiosGetAuthorize(GetIndividualContributionList, request);
    }
    async addEditIndividualContribution(request) {
        return axiosPostAuthorize(AddEditIndividualContribution, request);
    }
}