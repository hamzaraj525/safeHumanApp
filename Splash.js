import React, {Component, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StatusBar,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  View,
} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Main');
    }, 2000);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#0E0A30"
        />

        <Image
          style={{
            width: 220,
            height: 90,
          }}
          source={require('./assert/logo.png')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    backgroundColor: '#0E0A30',
    justifyContent: 'center',
    flex: 1,
  },

  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '37.8%',
  },
});
