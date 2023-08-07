import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'signup' ? 'white' : 'black',
    borderColor: 'black',
    paddingVertical: 22,
    marginBottom: 10,
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: type === 'signup' ? 'black' : 'white',
  }),
});
