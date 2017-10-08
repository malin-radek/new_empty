import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App1 extends React.Component {


  render() {
    const {onPressLearnMore}=this.props; // = this.state.screen

    return (
      <View style={styles.main}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.container}>
      <Button style={styles.button} onPress={onPressLearnMore}
      title="Learn More"
      //color="#841584"
      accessibilityLabel="Learn more about this purple button" />
      </View>
      <View style={styles.container}>
      <Button style={styles.button} onPress={onPressLearnMore}
      title="New modal"
      //color="#841584"
      accessibilityLabel="Learn more about this purple button" />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
main:{
  flex: 1,
  flexDirection: 'row',
  backgroundColor: 'purple',
},
button:{
  backgroundColor: '#bbb',
  alignItems: 'center',
},
  container: {
    flex: 1,
    backgroundColor: '#ffd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
