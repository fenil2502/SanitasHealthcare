import Router from "next/router";
import { IsQueryParamsEncryption, SGTechWebUrl } from "../utils/AppSetting";

import { encryptAES, decryptAES, decryptionAPI } from "../utils/Encryption";
//application routes
export const Routes = {
  home: {
    rawPath: "/home/Home",
    urlPath: "/",
    isQueryParams: true,
    isEncryptParams: false,
  },

  portfolio: {
    rawPath: "/portfolio/Portfolio",
    urlPath: "/portfolio",
    isQueryParams: true,
    isEncryptParams: false,
  },

  contact: {
    rawPath: "/contact/Contact",
    urlPath: "/contact",
    isQueryParams: true,
    isEncryptParams: false,
  },

  about: {
    rawPath: "/about/About",
    urlPath: "/about",
    isQueryParams: true,
    isEncryptParams: false,
  },

  orthopedicsupplements: {
    rawPath: "/orthopedicSupplements/OrthopedicSupplements",
    urlPath: "/orthopedicSupplements",
    isQueryParams: true,
    isEncryptParams: false,
  },

  appetizersupplements: {
    rawPath: "/appetizerSupplements/AppetizerSupplements",
    urlPath: "/appetizerSupplements",
    isQueryParams: true,
    isEncryptParams: false,
  },

  gastrointestinalsupplements: {
    rawPath: "/gastroIntestinalSupplements/GastroIntestinalSupplements",
    urlPath: "/gastroIntestinalSupplements",
    isQueryParams: true,
    isEncryptParams: false,
  },

  gynecinfertilitysupplements: {
    rawPath: "/gynecInfertilitySupplements/GynecInfertilitySupplements",
    urlPath: "/gynecInfertilitySupplements",
    isQueryParams: true,
    isEncryptParams: false,
  },

  immunitysupplements: {
    rawPath: "/immunitySupplements/ImmunitySupplements",
    urlPath: "/immunitySupplements",
    isQueryParams: true,
    isEncryptParams: false,
  },

  liversupplement: {
    rawPath: "/liverSupplement/LiverSupplement",
    urlPath: "/liverSupplement",
    isQueryParams: true,
    isEncryptParams: false,
  },

  pediatricsupplements: {
    rawPath: "/pediatricSupplements/PediatricSupplements",
    urlPath: "/pediatricSupplements",
    isQueryParams: true,
    isEncryptParams: false,
  },

  proteinsupplement: {
    rawPath: "/proteinSupplement/ProteinSupplement",
    urlPath: "/proteinSupplement",
    isQueryParams: true,
    isEncryptParams: false,
  },

  skinhairsupplements: {
    rawPath: "/skinHairSupplements/SkinHairSupplements",
    urlPath: "/skinHairSupplements",
    isQueryParams: true,
    isEncryptParams: false,
  },

  utisupplements: {
    rawPath: "/utiSupplements/UtiSupplements",
    urlPath: "/utiSupplements",
    isQueryParams: true,
    isEncryptParams: false,
  },

  weightloss: {
    rawPath: "/weightLoss/WeightLoss",
    urlPath: "/weightLoss",
    isQueryParams: true,
    isEncryptParams: false,
  },
};

//Common navigation method
export const Navigate = (routePath, params = []) => {
  if (routePath) {
    if (params.length > 0) {
      let queryParams = "";
      if (IsQueryParamsEncryption && routePath.isEncryptParams) {
        params.forEach((element) => {
          queryParams = queryParams + "/" + encryptAES(element, 0);
        });
      } else {
        params.forEach((element) => {
          (queryParams = queryParams + "/" + element), 0;
        });
      }
      Router.push(routePath.rawPath, routePath.urlPath + queryParams);
    } else {
      Router.push(routePath.rawPath, routePath.urlPath);
    }
  } else {
    //TODO: Redirect to page not found
  }
};

//Common navigation method :https://namespaceit.com/blog/how-to-use-routerpush-with-state-in-nextjs
export const NavigateWithData = (routePath, data, params = []) => {
  if (routePath) {
    if (params.length > 0) {
      let queryParams = "";
      if (IsQueryParamsEncryption && routePath.isEncryptParams) {
        params.forEach((element) => {
          queryParams = queryParams + "/" + encryptAES(element, 0);
        });
      } else {
        params.forEach((element) => {
          (queryParams = queryParams + "/" + element), 0;
        });
      }
      if (data) {
        // let q="";
        // q=encryptionData(data);
        // Router.push({
        //   pathname: routePath.urlPath,
        //   query: q
        // });
        // let str = JSON.stringify(data);
        // data = encryptAES(str, 0);

        if (data) {
          Object.keys(data).forEach((key) => {
            data[key] = encryptAES(data[key], false);
          });
        }
        Router.push({
          pathname: routePath.urlPath + queryParams,
          query: data,
        });
      } else {
        Router.push(routePath.rawPath, routePath.urlPath + queryParams);
      }
    } else {
      if (data) {
        // let q="";
        // q=encryptionData(data);
        // Router.push({
        //   pathname: routePath.urlPath,
        //   query: q
        // });
        Router.push({
          pathname: routePath.urlPath,
          query: data,
        });
      } else {
        Router.push(routePath.rawPath, routePath.urlPath);
      }
    }
  } else {
    //TODO: Redirect to page not found
  }
};

//Common navigation method
export const NavigateBack = () => {
  Router.back();
};

export const GetRouteParams = (
  isEncryptedParams = false,
  isAPIEncrypted = false
) => {
  if (isEncryptedParams && IsQueryParamsEncryption) {
    let params = { ...Router.query };

    if (params) {
      if (!params.isRenewal && isAPIEncrypted === true) {
        Object.keys(params).forEach((key) => {
          let req = {
            isEnType: true,
            responseData: atob(params[key]),
            responseType: 1,
          };
          params[key] = decryptionAPI(req);
        });
      } else {
        Object.keys(params).forEach((key) => {
          params[key] = decryptAES(params[key], false);
        });
      }
    }
    return params;
  } else {
    return Router.query;
  }
};

export const NavigateToSGTechSite = (routePath, params = []) => {
  if (routePath) {
    if (params.length > 0) {
      let queryParams = "";
      if (IsQueryParamsEncryption && routePath.isEncryptParams) {
        params.forEach((element) => {
          queryParams = queryParams + "/" + encryptAES(element, 0);
        });
      } else {
        params.forEach((element) => {
          (queryParams = queryParams + "/" + element), 0;
        });
      }
      window.location.href = SGTechWebUrl + routePath.urlPath + queryParams;
      //Router.push(routePath.rawPath, routePath.urlPath + queryParams);
    } else {
      window.location.href = SGTechWebUrl + routePath.urlPath;
      //Router.push(routePath.rawPath, routePath.urlPath);
    }
  } else {
    //TODO: Redirect to page not found
  }
};
