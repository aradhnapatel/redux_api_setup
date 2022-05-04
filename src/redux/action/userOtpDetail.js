import {Alert} from 'react-native';
import {
  USER_OTP_DETAIL_ERROR,
  USER_OTP_DETAIL_REQUEST,
  USER_OTP_DETAIL_SUCCESS,
} from '../../utils/key';
import {apiInstance} from '../../axios_httpClient/index';

export const userOtpDetail = otpVerifying => async dispatch => {
  try {
    dispatch({type: USER_OTP_DETAIL_REQUEST});
    const {data} = await apiInstance.post('/auth/verify', otpVerifying);
    dispatch({
      type: USER_OTP_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: USER_OTP_DETAIL_ERROR,
      payload: e.response.data.message,
    });
    Alert.alert(e.response.data.message);
  }
};
