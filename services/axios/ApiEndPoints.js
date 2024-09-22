import { IsProdMode } from "../../utils/AppSetting";

// export const APIURL = (IsProdMode) ? process.env.REACT_APP_PreProdApiURL : process.env.REACT_APP_DevApiURL;

export const GetResourceById = "Resource/GetResourceById?id={0}";

export const APIURL = "http://localhost:5099/api/";
// export const APIURL = "https://api.sgtech-test.infixsofttech.com/api/";
//export const APIURL = "https://sgtech-api-test.flyingcapetech.com/api/";


export const GetAllArticles = "WebResource/GetAllArticles";
export const GetResourceListByTypeId = "WebResource/GetResourceListByTypeId?id={0}";
export const GetSideMenuItemsForResourceWeb = "WebResource/GetSideMenuItemsForResourceWeb";

export const getImage = "Common/GetImage";
export const GetGif = "Common/GetGif";

export const getPageDetailById = "PagesManagement/GetPageDetailByIds?MainMenuId={0}&SubMenuId={1}&PageNameId={2}";
// export const GetPageDetailByIds = "PagesManagement/GetPageDetailByIds?MainMenuId={0}&SubMenuId={1}&PageNameId={2}";


//Resource URLs use for common


// Corporate Member Services
export const GetAllMembershipType = "AuthorityLimit/GetAllMembershipType";
export const GetAllMembershipRevenue = "AuthorityLimit/GetAllMembershipRevenue";
export const AddCorporateMember = "CorporateMember/AddCorporateMembers";
export const GetEmployementSize = "CorporateMember/GetAllCompanyEmploymentSize";
export const GetAllCompanyType = "CorporateMember/GetAllCompanyType";
export const GetCorporateDashboardDetails = "CorporateMember/GetCorporateDashboardDetails?id={0}";
export const GetCorporateOrganisationRoleById = "CorporateMember/GetCorporateOrganisationRoleById?id={0}";
export const GetAllCorporateOrganisationRole = "CorporateMember/GetAllCorporateOrganisationRole?id={0}";
export const GetAllChapterCommitteeRoles = "CorporateMember/GetAllChapterCommitteeRoles?id={0}";
export const AddEditCorporateOrganisationRole = "CorporateMember/AddEditCorporateOrganisationRole";
export const DeleteCorporateOrganisationRole = "CorporateMember/DeleteCorporateOrganisationRole";
export const GetEmployeeInfomationForCorporateMemberAdmin = "MembershipCorporate/GetEmployeeInfomationForCorporateMemberAdmin?id={0}&nameSearch={1}";
export const GetEmployeeInformationById = "MembershipCorporate/GetEmployeeInformationById?id={0}";
export const AddEditEmployeeInformation = "MembershipCorporate/AddEditEmployeeInformation";
export const GetAllDropdownsForCorporateMember = "MembershipCorporate/GetAllDropdownsForCorporateMember";
export const DeleteCommittees = "CommitteeWorkGroup/DeleteCommittees"

// Committee WorkGroup Services
export const GetAllChapters = "CommitteeWorkGroup/GetAllChapters";

// Individual Member Services
export const GetAllOrganisationName = "IndividualMember/GetAllOrganisationName";
export const IndividualMemberSignUp = "IndividualMember/IndividualMemberSignUp";
export const LoginToCorporateMemberForIndividualMember = "IndividualMember/LoginToCorporateMemberForIndividualMember";

//Corporate Profile
export const GetAllCorporateProfileDetails = "WebMembershipCorporate/GetAllCorporateProfileDetails?id={0}";
export const GetAllDropdownsForCorporateProfile = "WebMembershipCorporate/GetAllDropdownsForCorporateProfile";
export const AddEditCorporateOrganisationInformation = "MembershipCorporate/AddEditOrganisationBasicInformation";
export const UpdateOrganisationBusinessProfile = "WebMembershipCorporate/AddEditOrganisationBusinessProfile";
export const AddEditCommunication = "WebMembershipCorporate/AddEditCommunication";
export const AddEditSGTechInterest = "MembershipCorporate/AddEditSGTechIntrest";
export const getDomainByCorporateMemberId = "IndividualMember/getDomainByCorporateMemberId";

export const GetCorporateMemberDirectoryList = "WebMembershipCorporate/GetCorporateMemberDirectoryList";
//export const AddEditCorporateChapter = "MembershipCorporate/AddEditCorporateChapter";
export const AddEditCorporateChapter = "MembershipCorporate/AddEditChapterInformation";
export const GetCorporateChapter = "MembershipCorporate/GetCorporateChapter?id={0}";

export const AddMembershipContactEnquiry = "WebMembershipCorporate/AddMembershipContactEnquiry";
export const RenewCorporateMember = "WebMembershipCorporate/RenewCorporateMember";
export const GetCorporateFinancialInfo = "MembershipCorporate/GetCorporateFinancialInfo?id={0}";
export const GetCorporateFinanceReceiptInvoice = "MembershipCorporate/GetCorporateFinanceReceiptInvoice?id={0}&id2={1}&id3={2}";
export const GetCreditNoteInfoForCorporateMember = "Finance/GetCreditNoteInfoForCorporateMember?id={0}&id2={1}";

export const GetCommunitySpotlightList = "WebMembershipCorporate/GetCommunitySpotlightList";

//New APIs for segment wise changes
export const AddEditCorporateMembershipSubscription = "MembershipCorporate/AddEditCorporateMembershipSubscription";
export const JoinChapterById = "MembershipCorporate/JoinChapterById";
export const DeleteChapters = "CommitteeWorkGroup/DeleteChapters"
export const GetChapterInformationById = "MembershipCorporate/GetChapterInformationById?id={0}";
export const GetChapterSwitchCountInformationById = "MembershipCorporate/GetChapterSwitchCountInformationById?id={0}";
export const GetOrganisationBasicInformationById = "MembershipCorporate/GetOrganisationBasicInformationById?id={0}";
export const AddEditOrganisationBasicInformation = "MembershipCorporate/AddEditOrganisationBasicInformation";
export const AddEditOrganisationProfile = "MembershipCorporate/AddEditOrganisationProfile";
export const GetOrganisationProfileById = "MembershipCorporate/GetOrganisationProfileById?id={0}";
//New APIs for segment wise changes



// Individual Dashboard
export const GetIndividualDashboardDetails = "IndividualMember/GetIndividualDashboardDetails?id={0}";
export const GetIndividualContributionList = "IndividualMember/GetIndividualContributionList?id={0}";
export const GetChapterListByCorporateId = "IndividualMember/GetChapterListForIndividualDashboard?id={0}";
export const AddEditIndividualContribution = "IndividualMember/AddEditIndividualContribution";
export const GetAllDropdownsForIndividualMember = "IndividualMember/GetAllDropdownsForIndividualMember";
//Individual Profile
export const GetAllIndividualProfileDetails = "IndividualMember/GetAllIndividualProfileDetails?id={0}";
export const AddEditIndividualCommitteeProfile = "IndividualMember/AddEditIndividualCommitteeProfile";
export const UpdateIndividualProfileBasicInformation = "IndividualMember/UpdateIndividualProfileBasicInformation";
export const AddEditSGTechInterestProfile = "IndividualMember/AddEditSGTechInterestProfile";
export const AddEditCommunicationProfile = "IndividualMember/AddEditCommunicationProfile";
export const GetAllDropdownsIndividualProfile = "IndividualMember/GetAllDropdownsIndividualProfile";
export const AddEditIndividualCommittee = "IndividualMember/AddEditIndividualCommittee";
export const GetIndividualCommittee = "IndividualMember/GetIndividualCommittee?id={0}";

export const StoreBase64Image = "Common/StoreBase64Image";
export const AddImagePathForMembers = "Common/AddImagePathForMembers";

export const CorporateMemberLogin = "WebMembershipCorporate/CorporateMemberLogin";
export const IndividualMemberLogin = "IndividualMember/IndividualMemberLogin";
//export const ForgotPassword = "WebMembershipCorporate/ForgotPassword";
//export const ResetPassword = "WebMembershipCorporate/ResetPasswordForWeb";

//Membership Payment
export const GetCompanyInformationForPayment = "MembershipPayment/GetCompanyInformationForPayment?id={0}";
export const GetBasePriceInfoForPayment = "MembershipPayment/GetBasePriceInfoForPayment?id={0}";
export const CalculatePaymentFromTenure = "MembershipPayment/CalculatePaymentFromTenure";
export const AddMembershipPaymentData = "MembershipPayment/AddMembershipPaymentData";
export const DownloadInvoice = "MembershipPayment/DownloadInvoice?id={0}";
export const GeneratePaymentInvoice = "MembershipPayment/GeneratePaymentInvoice";
export const UpdatePaymentHistoryForMembershipPayment = "MembershipPayment/UpdatePaymentHistoryForMembershipPayment?id={0}";
export const GetMembershipReconciliationDetailsById = "WebMembershipCorporate/GetMembershipReconciliationDetailsById?id={0}";
export const AddMembershipPaymentConfirmationDetails = "WebMembershipCorporate/AddMembershipPaymentConfirmationDetails";
export const SendReconciliationPaymentLinkToCorporate = "MembershipPayment/SendReconciliationPaymentLinkToCorporate";
export const BuyChapterForCorporateMember = "MembershipPayment/BuyChapterForCorporateMember";
export const UpdatePaymentHistoryForAdditionalChapter = "MembershipPayment/UpdatePaymentHistoryForAdditionalChapter?id={0}";
export const SendReconciliationPaymentLinkForBuyChapter = "MembershipPayment/SendReconciliationPaymentLinkForBuyChapter";
export const GetMembershipPurchaseChapterReconciliationDetailsById = "WebMembershipCorporate/GetMembershipPurchaseChapterReconciliationDetailsById?id={0}";
export const GetAllDropdownForMembershipPayment = "MembershipPayment/GetAllDropdownForMembershipPayment";

//ContactUs
//export const SendInquiryToAdmin = "WebContactUs/SendInquiryToAdmin";
//export const GetCompanyInfoForContactUs = "WebContactUs/GetCompanyInfoForContactUs";




// new 01/08/2022 & 02/08/2022

export const GetCorporateMembershipSubscriptionById = "MembershipCorporate/GetCorporateMembershipSubscriptionById?id={0}";
export const AddEditIndividualBasicInformation = "IndividualMember/AddEditIndividualBasicInformation";
export const AddEditEmploymentInformation = "IndividualMember/AddEditEmploymentInformation";

// for Corporate

export const GetChapterCommitteeRoles = "CorporateMember/GetChapterCommitteeRoles?id={0}";
export const AddEditOrganisationBussinessDetails = "MembershipCorporate/AddEditOrganisationBussinessDetails";
export const GetOrganisationBussinessDetailsById = "MembershipCorporate/GetOrganisationBussinessDetailsById?id={0}";
export const SaveAllCorporateDetails = "WebMembershipCorporate/SaveAllCorporateDetails";



// AboutUs 
export const GetChapterExcosList = "CommitteeWorkGroup/GetChapterExcosList?id={0}";
export const GetSelectEXCOMemberList = "CommitteeWorkGroup/GetSelectEXCOMemberList?id={0}";
export const GetBoardOfGovEXCOMemberList = "CommitteeWorkGroup/GetBoardOfGovEXCOMemberList?id={0}";
export const GetAllIndividualProfileDetail = "IndividualMember/GetAllIndividualProfileDetail?id={0}";
export const GetPartialPageComponentsByPageName = "PagesManagement/GetPartialPageComponentsByPageName?name={0}";

// SGTech TV 
export const GetSGTechTVListForWeb = "WebSGTechTV/GetSGTechTVList?searchText={0}";
export const GetFeaturedSGTechTV = "WebSGTechTV/GetFeaturedSGTechTV";
export const GetRecommendedSGTechTV = "WebSGTechTV/GetRecommendedSGTechTV";
export const GetLatestSGTechTV = "WebSGTechTV/GetLatestSGTechTV";
export const GetSGTechTVDetailById = "WebSGTechTV/GetSGTechTVDetailById?id={0}";
export const GetSGTechTVListForHome = "Home/GetSGTechTVListForHome";
export const GetSideMenuItemsForSGTechTvWeb = "WebSGTechTV/GetSideMenuItemsForSGTechTvWeb";


// Banner Services

export const GetBannersByLocations = "Banners/GetBannersByLocations?bannerPosition={0}";


export const GetPageDetailByPagesDetailsId = "PagesManagement/GetPageDetailByPagesDetailsId?id={0}";
export const GetBannersByPagesDetailsId = "PagesManagement/GetBannersByPagesDetailsId?id={0}";
//export const GetAllResourceToDisplay = "WebResource/GetAllResourceToDisplay";


// Entry Management 
//export const GetAllEvents = "WebEntryManagement/GetAllEvents";
// export const GetAllDropDownForEntryManagement = "EntryManagement/GetAllDropDownForEntryManagement";
export const GetWorkshopDetailsByEventId = "WebEntryManagement/GetWorkshopDetailsByEventId?id={0}";
export const GetConferenceDetailByEventId = "WebEntryManagement/GetConferenceDetailByEventId";
export const GetConferenceDescriptionByEventId = "WebEntryManagement/GetConferenceDescriptionByEventId";
export const GetConferenceProgrammeDetail = "WebEntryManagement/GetConferenceProgrammeDetail";
export const GetSpeakersListForConferenceById = "WebEntryManagement/GetSpeakersListForConferenceById?id={0}";
export const GetPackageListByEventId = "WebEntryManagement/GetPackageListByEventId?id={0}";
export const GetEventSectionDetails = "EntryManagement/GetEventSectionDetails?id={0}";
export const GetFormDetailsByEventId = "WebEntryManagement/GetFormDetailsByEventId?id={0}";
export const AddEventVisitor = "WebEntryManagement/AddEventVisitor";
//export const GetAllFiltersForEvents = "WebEntryManagement/GetAllFiltersForEvents";
export const GetAllRelatedEvents = "WebEntryManagement/GetAllRelatedEvents?id={0}";
export const GetFormQuestionByEventId = "EntryManagement/GetFormQuestionByEventId?id={0}";
export const GetFormDetailsByRefNo = "EntryManagement/GetFormDetailsByRefNo?id={0}";
export const GetBookingQuestionAnswerByAttendeeInformationId = "Booking/GetBookingQuestionAnswerByAttendeeInformationId?id={0}";

//Individual Booking Services
export const GetEventDietaryList = "Booking/GetEventDietaryList";
export const GetEventBreakoutSessionsProgramme = "Booking/GetEventBreakoutSessionsProgramme";
export const GetBookingConfirmationDetailsByBookingId = "Booking/GetBookingConfirmationDetailsByBookingId?id={0}";
export const CancelBooking = "Booking/CancelBooking";
export const SendEmailOnSuccessfulPaymentForForm = "Booking/SendEmailOnSuccessfulPaymentForForm";


export const GetEntryPricingDetailByEventId = "Booking/GetEntryPricingDetailByEventId";
export const GetEntryAddOnDetailByEventId = "Booking/GetEntryAddOnDetailByEventId";
export const GetEntryDetailForBookingByEntryId = "Booking/GetEntryDetailForBookingByEntryId";
export const GetMemberDetailForBookingByMemberId = "Booking/GetMemberDetailForBookingByMemberId?id={0}";
export const CheckIfMemberExistsForBooking = "Booking/CheckIfMemberExistsForBooking?id={0}";
export const GetEventQuestionDetailForBooking = "Booking/GetEventQuestionDetailForBooking?id={0}";

export const GetCorporateMemberDetailForBookingByMemberId = "Booking/GetCorporateMemberDetailForBookingByMemberId?id={0}";
export const AddEditIndividualBookingDetails = "Booking/AddEditIndividualBookingDetails";
export const AddFormSubmittedAnswer = "Booking/AddFormSubmittedAnswer";
export const AddEditCorporateBookingDetails = "Booking/addEditCorporateBookingDetails";
export const GetEventGuestDetailForBooking = "Booking/GetEventGuestDetailForBooking?emailId={0}";
export const UpdatePaymentHistory = "Booking/UpdatePaymentHistory?referenceNo={0}&eventVisitorId={1}";

export const GetEntryDetailForFormBookingByEntryId = "Booking/GetEntryDetailForFormBookingByEntryId?eventId={0}";
export const GetLessonTimeSlotDetailsById = "EntryManagement/GetLessonTimeSlotDetailsById?id={0}";
export const GetTimeSlotDetailsByTimeSlotId = "EntryManagement/GetTimeSlotDetailsByTimeSlotId?id={0}";
export const CheckIfBookingExistsById = "Booking/CheckIfBookingExistsById";

export const SendGuestInvitationEmail = "Booking/SendGuestInvitationEmail";
export const GetPastBookingHistoryByMemberId = "Booking/GetPastBookingHistoryByMemberId";
export const GetUpcomingBookingHistoryByMemberId = "Booking/GetUpcomingBookingHistoryByMemberId";

// Common Services
export const uploadPDF = "Common/UploadPDF";
export const GetGSTRate = "Common/GetGSTRate";
export const GenerateToken = "Common/GenerateToken";
export const LoadInitialProps = "Common/LoadInitialProps";


export const GetAllDropDownForEntryManagement = "EntryManagement/GetAllDropDownForEntryManagement?id={0}";

// Finance Payment Service
export const GetFinanceAdhokInvoiceDetail = "Finance/GetFinanceAdhokInvoiceDetail?id={0}";
export const AddAdhocPaymentData = "Finance/AddAdhocPaymentData";
export const UpdatePaymentHistoryForFinanceAdhoc = "Finance/UpdatePaymentHistoryForFinanceAdhoc?id={0}";
export const AddPaymentConfirmationDetails = "Booking/AddPaymentConfirmationDetails";
export const GetAllDropdownsForIndividualBooking = "Booking/GetAllDropdownsForIndividualBooking?id={0}";
export const SendReconciliationPaymentLinkForEventBooking = "Booking/SendReconciliationPaymentLinkForEventBooking";
export const SendReconciliationPaymentLinkForAdHocInvoice = "Finance/SendReconciliationPaymentLinkForAdHocInvoice";
export const AddExternalInvoicePaymentConfirmationDetails = "Finance/AddExternalInvoicePaymentConfirmationDetails";
export const ApplyVoucherCodeForMembershipPayment = "Finance/ApplyVoucherCodeForMembershipPayment";
export const ApplyVoucherCodeForBooking = "Finance/ApplyVoucherCodeForBooking";
export const ApplyVoucherCodeForAdditionalChapter = "Finance/ApplyVoucherCodeForAdditionalChapter";
export const ChangePasswordForMember = "WebMembershipCorporate/ChangePasswordForMember";
export const ApplyVoucherCodeForFormBooking = "Finance/ApplyVoucherCodeForFormBooking";
export const GetEventDetailsByEventId = "Finance/GetEventDetailsByEventId?id={0}";
export const AddEditBookingDetailsForEventApproval = "Finance/AddEditBookingDetailsForEventApproval?id1={0}&id2={1}";

//Batch Job
export const AddMembershipBatchJobRecordsAfterPayment = "BatchJob/AddMembershipBatchJobRecordsAfterPayment";
export const AddEventBookingBatchJobRecordsAfterPaymentRequest = "BatchJob/AddEventBookingBatchJobRecordsAfterPaymentRequest";


/// For Go Global API End Points
export const GetAllResourceToDisplay = "WebResource/GetAllResourceToDisplay";
export const SignUpForGoGlobalMembers = "GoGlobalAccount/SignUpForGoGlobalMembers";
export const GetAllDropDownsForGoGlobalMembers = "GoGlobalAccount/GetAllDropDownsForGoGlobalMembers";
export const GetGoGlobalHomeDetails = "GoGlobal/GetGoGlobalHomeDetails";
export const GetGoGlobalMemberDetailsById = "GoGlobalAccount/GetGoGlobalMemberDetailsById?id={0}";
export const GetGoGlobalPartnerDirectoryList = "GoGlobalAccount/GetGoGlobalPartnerDirectoryList";
export const AddGoGlobalContactOrganisationEnquiryDetails = "GoGlobalAccount/AddGoGlobalContactOrganisationEnquiryDetails"
export const UpdateGoGlobalCompanyProfileVisitor = "GoGlobal/UpdateGoGlobalCompanyProfileVisitor?id={0}";
export const GetSeekingPartnershipByMemberId = "GoGlobalAccount/GetSeekingPartnershipByMemberId?id={0}";
//ContactUs
export const SendInquiryToAdmin = "WebContactUs/SendInquiryToAdmin";
export const SendInquiryToAdminForGoGlobal = "GoGlobal/SendInquiryToAdminForGoGlobal";
//export const GetCompanyInfoForContactUs = "WebContactUs/GetCompanyInfoForContactUs";

// Resources
export const GetSideMenuItemsForResourceWebGoGlobal = "GoGlobal/GetSideMenuItemsForResourceWebGoGlobal";
export const GetAllResourceForGoGlobal = "GoGlobal/GetAllResourceForGoGlobal";


// Event 
//export const GetAllEvents = "WebEntryManagement/GetAllEvents";
//export const GetAllFiltersForEvents = "WebEntryManagement/GetAllFiltersForEvents";
export const GetAllFiltersForEventsGoGlobal = "GoGlobal/GetAllFiltersForEventsGoGlobal";
export const GetAllEventsForGoGlobal = "GoGlobal/GetAllEventsForGoGlobal";

//Dashboard 
export const GetGoGlobalMemberDetailsForDashboardById = "GoGlobalAccount/GetGoGlobalMemberDetailsForDashboardById?id={0}";
export const UpdateGoGlobalMemberDetailsFromDashboard = "GoGlobalAccount/UpdateGoGlobalMemberDetailsFromDashboard";
export const GetCorporateMemberDetailsForGoGlobalDashboardByCorporateId = "GoGlobalAccount/GetCorporateMemberDetailsForGoGlobalDashboardByCorporateId?id={0}";
export const GetContactedRequestDetailsForGoGlobalMemberById = "GoGlobalAccount/GetContactedRequestDetailsForGoGlobalMemberById?id={0}&isCorporateMember={1}"

export const GoGlobalMemberLogin = "GoGlobalAccount/GoGlobalMemberLogin";
export const ChangePasswordForGoGlobalMember = "GoGlobalAccount/ChangePasswordForGoGlobalMember";
export const ForgotPasswordForGoGlobalMember = "GoGlobalAccount/ForgotPasswordForGoGlobalMember?goGlobalAccountId={0}";
export const ResetPasswordForGoGlobalMember = "GoGlobalAccount/ResetPasswordForGoGlobalMember";
export const GetResourceListForGoGlobal = "GoGlobal/GetResourceListForGoGlobal";


export const GetDropdownDataByName = "GoGlobal/GetDropdownDataByName"

