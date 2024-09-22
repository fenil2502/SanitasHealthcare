import { CorporateMemberLogin, ForgotPassword, IndividualMemberLogin, ResetPassword ,
    // Go Global 
    GoGlobalMemberLogin,
    ForgotPasswordForGoGlobalMember,
    ResetPasswordForGoGlobalMember,
} from "../ApiEndPoints";
import {  axiosPost, axiosPostAuthorize,axiosGetAuthorize, axiosGet } from "../AxiosRequests";

export default class AuthenticationServices {
    // async corporateMemberLogin(request) {
    //     return axiosPost(CorporateMemberLogin, request);
    // }
    // async individualMemberLogin(request) {
    //     return axiosPost(IndividualMemberLogin, request);
    // }

    // async forgotPassword(request) {
    //     return axiosPost(ForgotPassword, request);
    // }

    // async resetPassword(request) {
    //     return axiosPostAuthorize(ResetPassword, request);
    // }

    // Go Global 
    async goGlobalMemberLogin(request) {
        return axiosPost(GoGlobalMemberLogin, request);
    }

    async forgotPasswordForGoGlobalMember(request) {
        return axiosGet(ForgotPasswordForGoGlobalMember, request);
    }

    async resetPasswordForGoGlobalMember(request) {
        return axiosPostAuthorize(ResetPasswordForGoGlobalMember, request);
    }
}
