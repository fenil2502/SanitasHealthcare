import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/RootReducer";
import { persistStore, persistReducer } from "redux-persist";
const storage = require('redux-persist/lib/storage').default;

const persistConfig = {
    key: 'root',
    storage
};

export const initStore = (initialState = {}) => {
    let store;
    const isClient = typeof window !== 'undefined';
    if (isClient) {
        store = createStore(
            persistReducer(persistConfig, reducer),
            initialState,
            applyMiddleware(thunk)
        )
        store.__PERSISTOR = persistStore(store);
    }
    else {
        store = createStore(
            reducer,
            initialState,
            applyMiddleware(thunk)
        );
    }
    return store;
}