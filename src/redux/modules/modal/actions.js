import { createAction } from "redux-actions";
import { constants } from "./constants";

export const closeModal = createAction(constants.CLOSE_MODAL);
export const openModal = createAction(constants.OPEN_MODAL);
export const setViewType = createAction(constants.SET_VIEW_TYPE);
export const submitRequest = createAction(constants.SUBMIT_REQUEST);

