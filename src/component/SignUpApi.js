import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from '../redux/action/createUser';
import {getCity} from '../redux/action/getCity';
import {getCountry} from '../redux/action/getCountry';

const SignUpApi = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState('aradhana');
  const [lastName, setLastName] = useState('dobariya');
  const [add1, setAdd1] = useState('shivnagar-so');
  const [add2, setAdd2] = useState('section-1,surat');
  const [country, setCountry] = useState('india');
  const [state, setState] = useState('603f11a478a43713f0fed115');
  const [city, setCity] = useState('603f11fa78a43713f0fed11e');
  const [pinCode, setPinCode] = useState('395002');
  const [email, setEmail] = useState('aradhnapatelsss@gmail.com');
  const [password, setPassword] = useState('123456789');
  const [phone, setPhone] = useState('9898989898');
  const [dateOfBirth, setDateOfBirth] = useState('12/02/1989');
  const [gender, setGender] = useState('female');
  const [stateModal, setStateModal] = useState(false);
  const [cityModal, setCityModal] = useState(false);
  const [showState, setShowState] = useState('');
  const [showCity, setShowCity] = useState('');
  const sex = ['male', 'female', 'other'];

  const getCountryState = () => dispatch(getCountry());
  const getUserCity = id => dispatch(getCity(id));

  const countryState = useSelector(state => state?.getCountry?.country);
  const cityState = useSelector(state => state?.getCity?.city);
  const cityFetching = useSelector(state => state?.getCity?.fetching);

  useEffect(() => {
    getCountryState();
  }, []);

  const handelSigup = async () => {
    const userData = {
      firstname: name,
      lastname: lastName,
      addressline1: add1,
      addressline2: add2,
      city: city,
      state: state,
      country: '603f117978a43713f0fed114',
      zipcode: pinCode,
      email: email,
      phone: phone,
      dateofbirth: dateOfBirth,
      gender: gender,
      password: password,
    };

    console.log('================== userData ==================');
    console.log(userData);
    console.log('====================================');
    const userRes = await createUser(userData);
    console.log('================== userRes ==================');
    console.log(userRes);
    console.log('====================================');

    if (userRes) {
      navigation.navigate('Otp', {useEmail: email, phone: pinCode});
    } else {
      Alert.alert('error');
    }
  };

  const handelState = item => {
    console.log('=================state item._id===================');
    console.log(item._id);
    console.log('====================================');
    setShowState(item?.state);
    setState(item._id);
    getUserCity(item._id);
    setStateModal(false);
  };

  const handelCity = item => {
    console.log('==================city item?._id==================');
    console.log(item?._id);
    console.log('====================================');
    setShowCity(item?.city);
    setCity(item?._id);
    setCityModal(false);
  };

  const handelGender = item => {
    setGender(item);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.bottom}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.firstRow}>
          <View>
            <Text>name</Text>
            <TextInput
              value={name}
              placeholder="Name"
              onChangeText={nm => setName(nm)}
              style={styles.textInput}
            />
          </View>
          <View>
            <Text>last name</Text>
            <TextInput
              value={lastName}
              placeholder="LastName"
              onChangeText={nm => setLastName(nm)}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.firstRow}>
          <View>
            <Text>country</Text>
            <TouchableOpacity style={styles.textInput}>
              <Text>{country}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>state</Text>
            <TouchableOpacity
              style={styles.textInput}
              onPress={() => setStateModal(true)}>
              <Text>{showState}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.firstRow}>
          <View>
            <Text>city</Text>
            <TouchableOpacity
              style={styles.textInput}
              onPress={() => setCityModal(true)}>
              <Text>{showCity}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>pincode</Text>
            <TextInput
              value={pinCode}
              placeholder="pincode"
              onChangeText={nm => setPinCode(nm)}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.firstRow}>
          <View>
            <Text>date of birth</Text>
            <TextInput
              value={dateOfBirth}
              placeholder="dateofbirth"
              onChangeText={nm => setDateOfBirth(nm)}
              style={styles.textInput}
            />
          </View>
          <View>
            <Text>ph-no</Text>
            <TextInput
              value={phone}
              placeholder="phone"
              onChangeText={nm => setPhone(nm)}
              style={styles.textInput}
            />
          </View>
        </View>

        <View>
          <Text>email</Text>
          <TextInput
            value={email}
            placeholder="email"
            onChangeText={nm => setEmail(nm)}
            style={styles.textInputFull}
          />
        </View>

        <View>
          <Text>password</Text>
          <TextInput
            value={password}
            placeholder="password"
            secureTextEntry
            onChangeText={nm => setPassword(nm)}
            style={styles.textInputFull}
          />
        </View>

        <View>
          <Text>add-1</Text>
          <TextInput
            value={add1}
            placeholder="add1"
            onChangeText={nm => setAdd1(nm)}
            style={styles.textInputFull}
          />
        </View>

        <View>
          <Text>add-2</Text>
          <TextInput
            value={add2}
            placeholder="add2"
            onChangeText={nm => setAdd2(nm)}
            style={styles.textInputFull}
          />
        </View>

        <View style={styles.row}>
          {sex.map(val => {
            return (
              <TouchableOpacity
                style={styles.gender}
                onPress={() => handelGender(val)}>
                <Text>{val}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.btnWrapper}
          onPress={() => handelSigup()}>
          <Text>Signup</Text>
        </TouchableOpacity>

        <Text />
      </ScrollView>

      <Modal
        isVisible={stateModal}
        onBackdropPress={() => setStateModal(false)}>
        <View style={styles.modalWrapper}>
          <Text style={styles.modalHeading}>Select state</Text>
          <FlatList
            data={countryState.data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => handelState(item)}>
                  <Text style={styles.state}>{item?.state}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Modal>
      <Modal isVisible={cityModal} onBackdropPress={() => setCityModal(false)}>
        <View style={styles.modalWrapper}>
          <Text style={styles.modalHeading}>Select city</Text>
          <FlatList
            data={cityState}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => handelCity(item)}>
                  <Text style={styles.state}>{item?.city}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 0.3,
    borderRadius: 5,
    color: 'black',
    padding: 10,
    width: 175,
    marginBottom: 15,
    marginRight: 10,
    marginTop: 8,
    fontWeight: '400',
    fontSize: 16,
  },
  textInputFull: {
    borderWidth: 0.3,

    borderRadius: 5,
    color: 'black',
    padding: 10,
    width: '100%',
    marginBottom: 15,
    marginRight: 10,
    marginTop: 8,
  },
  gender: {
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
    borderWidth: 0.3,
    width: '31.5%',
    marginVertical: 10,
  },
  firstRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  btnWrapper: {
    backgroundColor: '#E33653',
    height: 45,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  bottom: {
    paddingBottom: 40,
  },
  modalWrapper: {
    flex: 0.3,
    padding: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '80%',
  },
  modalHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  state: {
    borderWidth: 0.3,
    borderRadius: 5,
    padding: 10,
    margin: 8,
  },
});

export default SignUpApi;
