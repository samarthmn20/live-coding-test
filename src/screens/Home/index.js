import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Coding Round</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  text: {
    fontSize: 16,
    textAlign: "center"
  }
});

export default Home;
