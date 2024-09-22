import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import ShoppingCartReducer from "./ShoppingCartReducer";

const rootReducer = combineReducers({
    SearchReducer: SearchReducer,
    ShoppingCartReducer: ShoppingCartReducer
});

export default rootReducer;