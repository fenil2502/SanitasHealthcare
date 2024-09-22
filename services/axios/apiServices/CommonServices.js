import { axiosGet, axiosPostWithoutEncryption } from '../AxiosRequests';
import { uploadPDF } from '../ApiEndPoints';

export default class CommonServices {
    async uploadPDF(request) {
        let formData = new FormData();
        formData.append("file", request.file);
        formData.append("filename", request.filename);

        return axiosPostWithoutEncryption(uploadPDF, formData, true);
    }
}