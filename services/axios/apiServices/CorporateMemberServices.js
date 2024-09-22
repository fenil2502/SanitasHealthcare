import { AddCorporateMember, GetAllCompanyType, AddEditCorporateOrganisationRole, DeleteCorporateOrganisationRole, GetAllChapters, GetAllMembershipRevenue, GetEmployementSize, GetAllMembershipType, GetCorporateDashboardDetails, GetCorporateOrganisationRoleById, GetAllCorporateOrganisationRole, GetAllChapterCommitteeRoles, GetEmployeeInfomationForCorporateMemberAdmin, GetAllDropdownsForCorporateMember, GetEmployeeInformationById, AddEditEmployeeInformation, GetAllDropdownsForCorporateProfile, GetAllCorporateProfileDetails, AddEditCommunication, AddEditCorporateOrganisationInformation, UpdateOrganisationBusinessProfile, AddEditSGTechInterest, StoreBase64Image, AddImagePathForMembers, GetCorporateMemberDirectoryList, AddEditCorporateChapter, GetCorporateChapter, GetChapterListByCorporateId, DeleteCommittees, DeleteChapters, GetCorporateMembershipSubscriptionById, AddEditCorporateMembershipSubscription, JoinChapterById, GetChapterInformationById, GetOrganisationBasicInformationById, AddEditOrganisationBasicInformation, AddEditOrganisationProfile, GetOrganisationProfileById, GetChapterCommitteeRoles, AddEditOrganisationBussinessDetails, GetOrganisationBussinessDetailsById, SaveAllCorporateDetails, GetCommunitySpotlightList, AddMembershipContactEnquiry, RenewCorporateMember, GetCorporateFinancialInfo, GetCreditNoteInfoForCorporateMember, GetCorporateFinanceReceiptInvoice, ChangePasswordForMember, GetChapterSwitchCountInformationById
,
// Go global 
ChangePasswordForGoGlobalMember,
 } from "../ApiEndPoints";
import { axiosGetFileAuthorizeblob, axiosPostAuthorize, axiosPostWithoutEncryption, axiosGetMultiParams, axiosGetAuthorize } from "../AxiosRequests";

export default class CorporateMemberServices {

    async getAllMembershipType(request) {
        return axiosGetAuthorize(GetAllMembershipType, request);
    }
    async getAllMembershipRevenue(request) {
        return axiosGetAuthorize(GetAllMembershipRevenue, request);
    }
    async registerCorporateMember(request) {
        return axiosPostAuthorize(AddCorporateMember, request);
    }
    async getAllChapters() {
        return axiosGetAuthorize(GetAllChapters);
    }
    async getCorporateDashboardDetails(request) {
        return axiosGetAuthorize(GetCorporateDashboardDetails, request);
    }
    async getCorporateOrganisationRoleById(request) {
        return axiosGetAuthorize(GetCorporateOrganisationRoleById, request);
    }
    async getAllCorporateOrganisationRole(request) {
        return axiosGetAuthorize(GetAllCorporateOrganisationRole, request);
    }
    async getAllChapterCommitteeRoles(request) {
        return axiosGetAuthorize(GetAllChapterCommitteeRoles, request);
    }
    async getEmployementsize() {
        return axiosGetAuthorize(GetEmployementSize);
    }
    async getCompanyType() {
        return axiosGetAuthorize(GetAllCompanyType);
    }
    async addEditCorporateOrganisationRole(request) {
        return axiosPostAuthorize(AddEditCorporateOrganisationRole, request);
    }
    async deleteCorporateOrganisationRole(request) {
        return axiosPostAuthorize(DeleteCorporateOrganisationRole, request);
    }
    //For Employee Information
    async getEmployeeList(request) {
        return axiosGetMultiParams(GetEmployeeInfomationForCorporateMemberAdmin, request);
    }

    async getEmployeeInfoById(request) {
        return axiosGetAuthorize(GetEmployeeInformationById, request);
    }
    async addEditEmployeeInformation(request) {
        return axiosPostAuthorize(AddEditEmployeeInformation, request);
    }

    getAllDropdownForCorporateDashboard() {
        return axiosGetAuthorize(GetAllDropdownsForCorporateMember);
    }

    getAllDropdownsForCorporateProfile() {
        return axiosGetAuthorize(GetAllDropdownsForCorporateProfile);
    }
    async getAllCorporateProfileDetails(request) {
        return axiosGetAuthorize(GetAllCorporateProfileDetails, request);
    }
    async updateComminication(request) {
        return axiosPostAuthorize(AddEditCommunication, request);
    }
    async addEditCorporateOrganisationInformation(request) {
        return axiosPostAuthorize(AddEditCorporateOrganisationInformation, request);
    }
    async updateOrganisationBusinessProfile(request) {
        return axiosPostAuthorize(UpdateOrganisationBusinessProfile, request);
    }
    async updateSGTechIntrest(request) {
        return axiosPostAuthorize(AddEditSGTechInterest, request);
    }

    async storeBase64Image(request) {
        return axiosPostWithoutEncryption(StoreBase64Image, request, false);
    }
    async saveImageToDatabase(request) {
        return axiosPostAuthorize(AddImagePathForMembers, request);
    }
    async getCorporateMemberDirectoryList(request) {
        return axiosPostAuthorize(GetCorporateMemberDirectoryList, request);
    }
    async addEditChapters(request) {
        return axiosPostAuthorize(AddEditCorporateChapter, request);
    }
    async getChapters(request) {
        return axiosGetAuthorize(GetCorporateChapter, request);
    }
    async getChapterList(request) {
        return axiosGetAuthorize(GetChapterListByCorporateId, request);
    }
    async deleteCommittees(request) {
        return axiosPostAuthorize(DeleteCommittees, request);
    }
    // async deleteChapters(request) {
    //     return axiosPostAuthorize(DeleteChapters, request);
    // }
    async getCorporateMembershipSubscriptionById(request) {
        return axiosGetAuthorize(GetCorporateMembershipSubscriptionById, request)
    }
    async addEditCorporateMembershipSubscription(request) {
        return axiosPostAuthorize(AddEditCorporateMembershipSubscription, request)
    }
    async joinChapterById(request) {
        return axiosPostAuthorize(JoinChapterById, request)
    }
    async deleteChapters(request) {
        return axiosPostAuthorize(DeleteChapters, request);
    }
    async getChapterInformationById(request) {
        return axiosGetAuthorize(GetChapterInformationById, request)
    }
    async getChapterSwitchCountInformationById(request) {
        return axiosGetAuthorize(GetChapterSwitchCountInformationById, request)
    }
    async getOrganisationBasicInformationById(request) {
        return axiosGetAuthorize(GetOrganisationBasicInformationById, request)
    }
    async addEditOrganisationBasicInformation(request) {
        return axiosPostAuthorize(AddEditOrganisationBasicInformation, request)
    }
    async addEditOrganisationProfile(request) {
        return axiosPostAuthorize(AddEditOrganisationProfile, request)
    }
    async getOrganisationProfileById(request) {
        return axiosGetAuthorize(GetOrganisationProfileById, request)
    }
    async storeBase64Image(request) {
        return axiosPostWithoutEncryption(StoreBase64Image, request, false);
    }

    //Akshay 
    async addEditOrganisation(request) {
        return axiosPostAuthorize(AddEditCorporateOrganisationRole, request);
    }
    async getOrganisationRoleList(request) {
        return axiosGetAuthorize(GetAllCorporateOrganisationRole, request);
    }
    async getChapterCommitteeRoles(request) {
        return axiosGetAuthorize(GetChapterCommitteeRoles, request);
    }
    async addEditOrganisationBussinessDetails(request) {
        return axiosPostAuthorize(AddEditOrganisationBussinessDetails, request)
    }
    async getOrganisationBussinessDetailsById(request) {
        return axiosGetAuthorize(GetOrganisationBussinessDetailsById, request)
    }
    async saveAllCorporateDetails(request) {
        return axiosPostAuthorize(SaveAllCorporateDetails, request)
    }

    async getCommunitySpotlightList(request) {
        return axiosGetAuthorize(GetCommunitySpotlightList, request);
    }

    //Prasad
    async addMembershipContactEnquiry(request) {
        return axiosPostAuthorize(AddMembershipContactEnquiry, request);
    }
    async renewCorporateMember(request) {
        return axiosPostAuthorize(RenewCorporateMember, request);
    }
    async getCorporateFinancialInfo(request) {
        return axiosGetAuthorize(GetCorporateFinancialInfo, request);
    }
    async getCorporateFinanceReceiptInvoice(request) {
        return axiosGetFileAuthorizeblob(GetCorporateFinanceReceiptInvoice, request);
    }
    async getCreditNoteInfoForCorporateMember(request) {
        return axiosGetMultiParams(GetCreditNoteInfoForCorporateMember, request);
    }
    // async changePasswordForMember(request) {
    //     return axiosPostAuthorize(ChangePasswordForMember, request);
    // }

    //// [  Go Global ] ////
    async changePasswordForGoGlobalMember(request) {
        return axiosPostAuthorize(ChangePasswordForGoGlobalMember, request);
    }
}
