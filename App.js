import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import SignIn from './ui/containers/SignIn';
import Main from "./ui/containers/Main";
import {createStackNavigator} from "react-navigation";
import TestContainer from "./ui/containers/TestContainer";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<Props> {
  state = {
    signIn: false,
  };

  _handleSignIn = () => {
    this.setState(prev => ({
      signIn: !prev.signIn,
    }))
  };

  render() {
    const {signIn} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {
          signIn ?
            <RootStack/>
            :
            <SignIn onPressLogIn={this._handleSignIn}/>
        }
      </SafeAreaView>
    );
  }
}

const RootStack = createStackNavigator({
  Main: Main,
  TestContainer: TestContainer,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
