import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Box = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>10:00 am-10:45 am</Text>
      <Text style={styles.text}>John Doe</Text>
      <Text style={styles.time}>Lorem ipsum dolor sit amet, elit consectetur</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 9,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
    color: "#ccc",
  },
});

