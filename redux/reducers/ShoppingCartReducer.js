import { SHOPPINGCART_PRODUCTS, CURRENT_SHOPPINGCART_PRODUCTS } from "../constants/ShoppingCartConstants";

const initState = {
    cartProductDetails: {
        cartTotal: 0,
        cartProducts: []
    },
    cartProducts: {
        products: [],
        total: 0
    }
};

const ShoppingCartReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOPPINGCART_PRODUCTS:
            return {
                ...state,
                cartProductDetails: Object.assign({}, action.value)
            }
        case CURRENT_SHOPPINGCART_PRODUCTS:
            return {
                ...state,
                cartProducts: Object.assign({}, action.value)
            }
    }
    return state;
};

export default ShoppingCartReducer;