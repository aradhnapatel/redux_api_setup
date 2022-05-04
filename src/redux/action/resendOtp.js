import {Alert} from 'react-native';
import {apiInstance} from '../../axios_httpClient/index';

export const resendOtp = async email => {
  try {
    const {data} = await apiInstance.post('/auth/resend', email);
    return true;
  } catch (e) {
    Alert.alert(e.response.data.message);
    return false;
  }
};
