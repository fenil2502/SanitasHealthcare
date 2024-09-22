import { GetChapterExcosList, GetSelectEXCOMemberList, GetBoardOfGovEXCOMemberList, GetPartialPageComponentsByPageName } from "../ApiEndPoints";
import {  axiosGetAuthorize, } from "../AxiosRequests";

export default class AboutUsServices {

    async getChapterExcosList(request) {
        return axiosGetAuthorize(GetChapterExcosList, request);
    }

    async getSelectEXCOMemberList(request) {
        return axiosGetAuthorize(GetSelectEXCOMemberList, request);
    }
    async getBoardOfGovEXCOMemberList(request) {
        return axiosGetAuthorize(GetBoardOfGovEXCOMemberList, request);
    }
    //     async individualMemberLogin(request) {
    //         return axiosPost(IndividualMemberLogin, request);
    //     }
    async getPartialPageComponentsByPageName(request) {
        return axiosGetAuthorize(GetPartialPageComponentsByPageName, request);
    }
}
