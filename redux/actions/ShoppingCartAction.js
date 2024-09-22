import { SHOPPINGCART_PRODUCTS, CURRENT_SHOPPINGCART_PRODUCTS } from "../constants/ShoppingCartConstants";

export const shoppingCartProducts = (cartProductDetails) => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 10);
    }).then(() => {
        dispatch({
            type: SHOPPINGCART_PRODUCTS,
            value: cartProductDetails
        });
    });
}

export const currentShoppingCartProducts = (cartProducts) => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 10);
    }).then(() => {
        dispatch({
            type: CURRENT_SHOPPINGCART_PRODUCTS,
            value: cartProducts
        });
    });
}