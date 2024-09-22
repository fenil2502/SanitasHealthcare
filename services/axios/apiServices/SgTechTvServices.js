import { getAuthProps, isAuthorized } from "../../../utils/AuthenticationLibrary";
import { GetSGTechTVListForWeb, GetRecommendedSGTechTV, GetFeaturedSGTechTV, GetLatestSGTechTV, GetSGTechTVDetailById, GetSGTechTVListForHome, GetSideMenuItemsForSGTechTvWeb, GenerateToken } from "../ApiEndPoints";
import {  axiosGetAuthorize, axiosPostAuthorize } from "../AxiosRequests";

export default class SgTechTvServices {

    async getSGTechTVListForWeb(request) {
        return axiosGetAuthorize(GetSGTechTVListForWeb, request);
    }
    async getFeaturedSGTechTV(request) {
        return axiosPostAuthorize(GetFeaturedSGTechTV, request);
    }
    async getRecommendedSGTechTV(request) {
        return axiosPostAuthorize(GetRecommendedSGTechTV, request);
    }
    async getLatestSGTechTV(request) {
        return axiosPostAuthorize(GetLatestSGTechTV, request);
    }
    async getSGTechTVDetailById(request) {
        return axiosGetAuthorize(GetSGTechTVDetailById, request);

    }

    async getSGTechTVListForHome(request) {
        return axiosGetAuthorize(GetSGTechTVListForHome, request);
    }

    async getSideMenuItemsForSGTechTvWeb(request) {
        return axiosGetAuthorize(GetSideMenuItemsForSGTechTvWeb, request);
    }
    // async getBoardOfGovEXCOMemberList(request) {
    //     return axiosGetAuthorize(GetBoardOfGovEXCOMemberList, request);
    // }
    //     async individualMemberLogin(request) {
    //         return axiosPostAuthorize(IndividualMemberLogin, request);
    //     }

}