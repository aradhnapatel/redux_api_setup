import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {userOtpDetail} from '../redux/action/userOtpDetail';

const OtpVerify = () => {
  const [otp, setOtp] = useState();
  const route = useRoute();
  const dispatch = useDispatch();

  const handelVerifyOtp = verify => dispatch(userOtpDetail(verify));

  const {useEmail, phone} = route.params;

  const handelOtyVerify = () => {
    const otpDetail = {
      email: useEmail,
      otp: otp,
    };
    handelVerifyOtp(otpDetail);
    if (otpDetail) {
      Alert.alert('success');
    } else {
      Alert.alert('error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter OTP sent to +91{phone} or {useEmail}{' '}
      </Text>

      <TextInput
        value={otp}
        onChangeText={val => setOtp(val)}
        placeholder={'Enter your otp'}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={() => handelOtyVerify()}>
        <Text>submit</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.resendOtp}>Resend Otp ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    borderBottomWidth: 0.3,
    paddingBottom: 10,
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
  },
  resendOtp: {
    textAlign: 'center',
    marginVertical: 30,
  },
});

export default OtpVerify;
