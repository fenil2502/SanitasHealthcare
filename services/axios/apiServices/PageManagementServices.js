import { GetBannersByPagesDetailsId, getPageDetailById, GetPageDetailByPagesDetailsId, GetPartialPageComponentsByPageName } from "../ApiEndPoints";
import {  axiosGetAuthorize, axiosGetMultiParams } from "../AxiosRequests";

export default class PageManagementServices {

  async getPageDetailById(request) {
    return axiosGetMultiParams(getPageDetailById, request);
  }

  async getPartialPageComponentsByPageName(request) {
    return axiosGetAuthorize(GetPartialPageComponentsByPageName, request);
  }

  async getPageDetailByPagesDetailsId(request) {
    return axiosGetAuthorize(GetPageDetailByPagesDetailsId, request);
  }

  async getBannersByPagesDetailsId(request) {
    return axiosGetAuthorize(GetBannersByPagesDetailsId, request);
  }

}