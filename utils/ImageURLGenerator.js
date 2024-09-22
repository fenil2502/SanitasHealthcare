import { APIURL, RenderImageUsingImageType } from "../services/axios/ApiEndPoints";

export const ImageTypes = {
    SearchResult: 1,
    ProductDetails: 2,
    ShoppingCart: 3
}

export const ImageURLGenerator = (type, image) => {
    let url = APIURL + RenderImageUsingImageType;
    if (type && image) {
        url = url.replace("{0}", type);
        url = url.replace("{1}", image);
    }
    return url;
}
