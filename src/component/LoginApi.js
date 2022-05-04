import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {login} from '../redux/action/loginApi';

const LoginApi = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handelLogin = async () => {
    const userData = {
      email: email,
      password: password,
    };
    const userRes = await login(userData);
    if (userRes) {
      navigation.navigate('Otp');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Api</Text>
      <Text style={styles.heading}>email</Text>
      <TextInput
        value={email}
        placeholder={'Enter email'}
        onChangeText={em => setEmail(em)}
        style={styles.textInput}
      />
      <Text style={styles.heading}>password</Text>
      <TextInput
        value={password}
        placeholder={'Enter email'}
        onChangeText={em => setPassword(em)}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.btnWrapper} onPress={() => handelLogin()}>
        <Text style={styles.white}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  title: {
    textAlign: 'center',
  },
  heading: {
    marginTop: 10,
  },
  textInput: {
    borderWidth: 0.3,
    padding: 15,
    borderRadius: 10,
    margin: 5,
  },
  btnWrapper: {
    backgroundColor: '#E33653',
    height: 45,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  white: {
    color: 'white',
  },
});

export default LoginApi;
