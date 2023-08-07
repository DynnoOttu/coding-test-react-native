import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImgSplash} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <Image source={ImgSplash} />
      <Text style={styles.text}>Welcome to MyApps</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 26,
    fontWeight: '600',
    color: '#6c63ff',
  },
});
