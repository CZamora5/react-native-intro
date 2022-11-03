import { StyleSheet, View } from 'react-native';
import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.middle}></View>
        <View style={styles.middle}></View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  top: {
    height: "30%",
    maxHeight: 200,
    width: "70%",
    maxWidth: 600,
    marginBottom: 32,
    backgroundColor: "red"
  },
  middle: {
    height: "10%",
    maxHeight: 50,
    width: "70%",
    maxWidth: 600,
    marginTop: 20,
    backgroundColor: "orange"
  },
  bottom: {
    height: "10%",
    maxHeight: 50,
    width: "35%",
    maxWidth: 250,
    marginTop: 20,
    backgroundColor: "gray"
  }
});