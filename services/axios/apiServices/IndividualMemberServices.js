import { AddEditIndividualContribution, GetAllDropdownsForIndividualMember, IndividualMemberSignUp, GetAllOrganisationName, GetChapterListByCorporateId, GetIndividualContributionList, GetIndividualDashboardDetails, StoreBase64Image, AddImagePathForMembers, GetIndividualCommittee } from "../ApiEndPoints";
import { axiosGetAuthorize,   axiosPostWithoutEncryption, axiosPostAuthorize } from "../AxiosRequests";

export default class IndividualMemberServices {

    async getDashboardDetails(request) {
        return axiosGetAuthorize(GetIndividualDashboardDetails, request);
    }
    async getAllOrganisationName(request) {
        return axiosGetAuthorize(GetAllOrganisationName, request);

    }
    async registerIndividualMember(request) {
        return axiosPostAuthorize(IndividualMemberSignUp, request);
    }
    async getIndividualContribution(request) {
        return axiosGetAuthorize(GetIndividualContributionList, request);
    }
    async getChapterList(request) {
        return axiosGetAuthorize(GetChapterListByCorporateId, request);
    }
    async addEditIndividualContribution(request) {
        return axiosPostAuthorize(AddEditIndividualContribution, request);
    }

    async storeBase64Image(request) {
        return axiosPostWithoutEncryption(StoreBase64Image, request, false);
    }
    async getAllDropdownForIndividualMember() {
        return axiosGetAuthorize(GetAllDropdownsForIndividualMember);
    }
    async saveImageToDatabase(request) {
        return axiosPostAuthorize(AddImagePathForMembers, request);
    }
    async getJoinedCommittee(request){
        return axiosGetAuthorize(GetIndividualCommittee,request)
    }


}