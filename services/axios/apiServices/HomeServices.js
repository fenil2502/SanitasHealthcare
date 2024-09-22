import {
    GetAllResourceToDisplay,
    GetAllEvents,
    GetGoGlobalHomeDetails,
    GetAllEventsForGoGlobal,

} from "../ApiEndPoints";
import { axiosGetAuthorize, axiosPostAuthorize } from "../AxiosRequests";

export default class HomeServices {

    async getAllResourceToDisplay(request) {
        return axiosPostAuthorize(GetAllResourceToDisplay, request);
    }
    async getAllEventsForGoGlobal(request) {
        return axiosPostAuthorize(GetAllEventsForGoGlobal, request);
    }
    async getGoGlobalHomeDetails(request) {
        return axiosGetAuthorize(GetGoGlobalHomeDetails, request);
    }

}