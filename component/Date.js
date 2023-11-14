import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Date = ({ month, number }) => {
  return (
    <View>
    <Text style={styles.text}>{number}</Text>
    <Text style={styles.month}>{month}</Text>
    </View>
  );
};

export default Date;

const styles = StyleSheet.create({
  text: {
    color: "#0697f0",
    fontSize: 30,
    fontWeight: 'bold',
  },
  month: {
    color: "#0697f0",
    fontWeight: 'bold',
  },
});