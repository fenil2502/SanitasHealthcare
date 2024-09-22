import { GetBannersByLocations } from "../ApiEndPoints";
import { axiosGetAuthorize } from "../AxiosRequests";


export default class BusinessOpportunitiesServices {
    async getBannersByLocations(request) {
        return axiosGetAuthorize(GetBannersByLocations, request);
    }
}