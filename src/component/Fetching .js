import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Fetching = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={'large'} color={'red'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Fetching;
