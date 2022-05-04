import {Alert} from 'react-native';
import {apiInstance} from '../../axios_httpClient/index';
import {setToken} from '../../axios_httpClient/ClientHelper';

export const login = async userData => {
  try {
    const {data} = await apiInstance.post('/auth/login', userData);
    setToken(data?.verifyOtpToken);
    console.log('====================TOKEN', data?.verifyOtpToken);
    console.log('=============== =====================');
    return true;
  } catch (e) {
    Alert.alert(e.response.data?.message);
    return false;
  }
};