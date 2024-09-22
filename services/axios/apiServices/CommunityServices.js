import { GetBannersByLocations } from "../ApiEndPoints";
import { axiosGetAuthorize } from "../AxiosRequests";


export default class CommunityServices {
    async getBannersByLocations(request) {
        return axiosGetAuthorize(GetBannersByLocations, request);
    }
}
