import { AddGoGlobalContactOrganisationEnquiryDetails, GetAllDropDownsForGoGlobalMembers, GetContactedRequestDetailsForGoGlobalMemberById, GetCorporateMemberDetailsForGoGlobalDashboardByCorporateId, GetGoGlobalMemberDetailsForDashboardById, GetGoGlobalPartnerDirectoryList, SendInquiryToAdminForGoGlobal, SignUpForGoGlobalMembers, UpdateGoGlobalCompanyProfileVisitor, UpdateGoGlobalMemberDetailsFromDashboard, GetDropdownDataByName, GetSeekingPartnershipByMemberId } from "../ApiEndPoints";
import { axiosGet, axiosGetMultiParams, axiosPost } from "../AxiosRequests";


export default class GoGlobalMembersServices {

    async signUpForGoGlobalMembers(request) {
        return axiosPost(SignUpForGoGlobalMembers, request);
    }
    async getAllDropDownsForGoGlobalMembers() {
        return axiosGet(GetAllDropDownsForGoGlobalMembers);
    }
    async getGoGlobalPartnerDirectoryList(request) {
        return axiosPost(GetGoGlobalPartnerDirectoryList, request);
    }
    async addGoGlobalContactOrganisationEnquiryDetails(request) {
        return axiosPost(AddGoGlobalContactOrganisationEnquiryDetails, request);
    }
    async sendInquiryToAdminForGoGlobal(request) {
        return axiosPost(SendInquiryToAdminForGoGlobal, request);
    }
    async updateGoGlobalCompanyProfileVisitor(request) {
        return axiosGet(UpdateGoGlobalCompanyProfileVisitor, request);
    }
    async getGoGlobalMemberDetailsForDashboardById(request) {
        return axiosGet(GetGoGlobalMemberDetailsForDashboardById, request);
    }
    async updateGoGlobalMemberDetailsFromDashboard(request) {
        return axiosPost(UpdateGoGlobalMemberDetailsFromDashboard, request);
    }
    async getCorporateMemberDetailsForGoGlobalDashboardByCorporateId(request) {
        return axiosGet(GetCorporateMemberDetailsForGoGlobalDashboardByCorporateId, request);
    }
    async getContactedRequestDetailsForGoGlobalMemberById(request) {
        return axiosGetMultiParams(GetContactedRequestDetailsForGoGlobalMemberById, request);
    }
    async getDropdownDataByName(request) {
        return axiosPost(GetDropdownDataByName, request);
    }

    async getSeekingPartnershipByMemberId(request) {
        return axiosGet(GetSeekingPartnershipByMemberId, request);
    }


}
