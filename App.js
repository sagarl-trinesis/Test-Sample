import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
 
  state={
    mystate:'asdfadsf asdfa sdf asdfasd asdf asdf asdfasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asd'
   
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text> this.state.mystate</Text>
        <Button></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
