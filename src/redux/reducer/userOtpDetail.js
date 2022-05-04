import {
  USER_OTP_DETAIL_ERROR,
  USER_OTP_DETAIL_REQUEST,
  USER_OTP_DETAIL_SUCCESS,
} from '../../utils/key';

const initialState = {fetching: false, userDetail: [], error: {}};

export const userOtpDetail = (state = initialState, action) => {
  switch (action.type) {
    case USER_OTP_DETAIL_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case USER_OTP_DETAIL_SUCCESS:
      return {
        ...state,
        userDetail: action.payload,
        fetching: false,
      };
    case USER_OTP_DETAIL_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
