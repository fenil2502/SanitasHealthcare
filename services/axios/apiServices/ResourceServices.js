import { 
  GetAllArticles,  
  GetBannersByLocations,
  GetPageDetailByPagesDetailsId,
  GetResourceById, 
  GetResourceListByTypeId, 
  GetSideMenuItemsForResourceWeb,
  // Go Global
  GetAllResourceToDisplay,
  GetSideMenuItemsForResourceWebGoGlobal,  
  GetAllResourceForGoGlobal,
  GetResourceListForGoGlobal,
} from "../ApiEndPoints";
import {  axiosGetAuthorize,  axiosPostAuthorize } from "../AxiosRequests";


export const GetAllResourceTopics = "Resource/GetAllResourceTopics";


export default class ResourceService {



  async getResourceById(request) {
    return axiosGetAuthorize(GetResourceById, request);
  }

  async getAllArticles(request) {
    return axiosPostAuthorize(GetAllArticles, request);
  }

  async getResourceListByTypeId(request) {
    return axiosGetAuthorize(GetResourceListByTypeId, request);
  }

  async getAllResourceTopics(request) {
    return axiosGetAuthorize(GetAllResourceTopics, request);
  }

  async getSideMenuItemsForResourceWeb(request) {
    return axiosGetAuthorize(GetSideMenuItemsForResourceWeb, request);
  }

  async getBannersByLocations(request) {
    return axiosGetAuthorize(GetBannersByLocations, request);
  }

  async getPageDetailByPagesDetailsId(request) {
    return axiosGetAuthorize(GetPageDetailByPagesDetailsId, request);
  }

  
  //// For Go Global Service ////
  async getAllResourceToDisplay(request) {
    return axiosPostAuthorize(GetAllResourceToDisplay, request);
  }
  async getSideMenuItemsForResourceWebGoGlobal(request) {
    return axiosGetAuthorize(GetSideMenuItemsForResourceWebGoGlobal, request);
  }
  async getAllResourceForGoGlobal(request) {
    return axiosPostAuthorize(GetAllResourceForGoGlobal, request);
  }
  async getResourceListForGoGlobal(request) {
    return axiosGetAuthorize(GetResourceListForGoGlobal, request);
  }

  

}
