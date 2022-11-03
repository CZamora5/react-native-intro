import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      text: ''
    };
  }
  onPressLearnMore = () => {
    console.warn('Presionaste el botón!');
    Alert.alert(
      'TextInput',
      this.state.text
    );
  };
  onChange = () => {
    const value = !this.state.switchValue;
    console.warn(`Èl switch cambiará a ${value}`);
    this.setState({ switchValue: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Switch
          style={{ marginTop: 2, marginBottom: 6 }}
          onValueChange={this.onChange}
          value={this.state.switchValue}
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Learn more"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "50%",
    maxWidth: 400,
    paddingHorizontal: 5,
    borderColor: "gray",
    borderWidth: 1
  }
});