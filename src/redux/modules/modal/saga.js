import { takeLatest, put, call } from "redux-saga/effects";
import { config } from "../../../utils/apiConfig";
import { request, requestSuccess } from "../../../utils/fetch";
import { constants } from "./constants";

function* openModal({ payload }) {
  yield put({
    type: requestSuccess(constants.OPEN_MODAL),
    payload: { ...payload, status: true, type: payload ? payload.type : '' }
  });
}

function* closeModal() {
  yield put({
    type: requestSuccess(constants.CLOSE_MODAL),
    payload: false
  });
}

function* setViewType({ payload }) {
  yield put({
    type: requestSuccess(constants.SET_VIEW_TYPE),
    payload
  });
}


function* submitRequest(action) {
  yield call(
    request({
      type: constants.SUBMIT_REQUEST,
      baseURL: config.API_END_POINT,
      method: "POST",
      url: `support`,
      data: action.payload.data,
      success: action.payload.onSuccess,
      fail: action.payload.onFail
    }),
    action
  );
}

export default function* rootSaga() {
  yield takeLatest(constants.OPEN_MODAL, openModal);
  yield takeLatest(constants.CLOSE_MODAL, closeModal);
  yield takeLatest(constants.SET_VIEW_TYPE, setViewType);
  yield takeLatest(constants.SUBMIT_REQUEST, submitRequest);
}
