import {Alert} from 'react-native';
import {apiInstance} from '../../axios_httpClient/index';
import {setToken} from '../../axios_httpClient/ClientHelper';

export const createUser = async userData => {
  try {
    const {data} = await apiInstance.post('/auth/register', userData);
    setToken(data?.data?.token);
    console.log('TOKEN', data?.data?.token);
    console.log(data?.data?.token);
    return true;
  } catch (e) {
    Alert.alert(e.response.data.message);
    return false;
  }
};
