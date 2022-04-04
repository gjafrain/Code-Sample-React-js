import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
// SAGA
import modalSaga from "./modal/saga";
import authSaga from "./auth/saga";
import categorySaga from "./category/saga";
import productSaga from "./product/saga";
import cartSaga from "./cart/saga";
import addressSaga from "./address/saga";
import orderSaga from "./order/saga";
// REDUCERS
import modalReducer from "./modal/reducer";
import authReducer from "./auth/reducer";
import categoryReducer from "./category/reducer";
import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";
import addressReducer from "./address/reducer";
import orderReducer from "./order/reducer";

const appReducer = combineReducers({
    modal: modalReducer,
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    address: addressReducer,
    order: orderReducer
});

export const reducers = (state, action) => {
    if (action.type === 'LOGOUT') {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export const rootSaga = function* () {
    yield all([
        authSaga(),
        modalSaga(),
        categorySaga(),
        productSaga(),
        cartSaga(),
        addressSaga(),
        orderSaga()
    ]);
};
