import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import {ImgGetStarted} from '../../assets';

const GetStarted = () => {
  return (
    <ImageBackground source={ImgGetStarted} style={styles.page}>
      <View>
        <Text style={styles.text}>
          Membantu Menemukan Daftar Pertemanan Saya
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="Login" />
        <Button title="Sign Up" type="signup" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
    paddingTop: 26,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 40,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
  },
});
