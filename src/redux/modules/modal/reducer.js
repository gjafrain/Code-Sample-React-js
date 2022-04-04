import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestFail, requestPending, requestSuccess } from "../../../utils/fetch";

export default handleActions(
  {
    [requestSuccess(constants.OPEN_MODAL)]: (
      state,
      action
    ) => ({
      ...state,
      openModal: true,
      viewType: action.payload.type || 'SignIn',
      callBack: action.payload.callBack,
      data: action.payload.data
    }),
    [requestSuccess(constants.CLOSE_MODAL)]: (
      state
    ) => ({
      ...state,
      openModal: false,
      viewType: 'SignIn'
    }),
    [requestSuccess(constants.SET_VIEW_TYPE)]: (
      state,
      action
    ) => ({
      ...state,
      viewType: action.payload
    }),
    [requestSuccess(constants.SUBMIT_REQUEST)]: (
      state
    ) => ({
      ...state,
      submitRequestPending: false,
      submitRequestFailure: false,
      submitRequestSuccess: true,
    }),
    [requestPending(constants.SUBMIT_REQUEST)]: (
      state
    ) => ({
      ...state,
      submitRequestPending: true,
      submitRequestFailure: false,
      submitRequestSuccess: false,
    }),
    [requestFail(constants.SUBMIT_REQUEST)]: (
      state
    ) => ({
      ...state,
      submitRequestPending: false,
      submitRequestFailure: true,
      submitRequestSuccess: false,
    })
  },
  initialState()
);
