import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Superman from './components/Superman';

export default class App extends React.Component {
  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.text}>
              My Practice App
            </Text>
              <Superman/>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d7d3',
    alignItems: 'center',
    justifyContent: 'center',
      marginTop: 50,
  },
    text:{
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold'
    }
});
