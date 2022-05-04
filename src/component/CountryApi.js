import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCity} from '../redux/action/getCity';
import {getCountry} from '../redux/action/getCountry';
import Fetching from './Fetching ';

const CountryApi = () => {
  const dispatch = useDispatch();

  const getCountryState = () => dispatch(getCountry());
  const getUserCity = id => dispatch(getCity(id));

  const countryState = useSelector(state => state?.getCountry?.country);
  const cityState = useSelector(state => state?.getCity?.city);
  const cityFetching = useSelector(state => state?.getCity?.fetching);

  useEffect(() => {
    getCountryState();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Country Api</Text>
      <View>
        <Text>Select State</Text>
      </View>
      <FlatList
        data={countryState.data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => getUserCity(item._id)}>
              <Text>{item?.state}</Text>
            </TouchableOpacity>
          );
        }}
      />
      {cityFetching ? (
        <Fetching />
      ) : (
        <FlatList
          data={cityState}
          renderItem={({item}) => {
            console.log('========item', item);
            return (
              <View>
                <Text>{item?.city}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
  },
});

export default CountryApi;
