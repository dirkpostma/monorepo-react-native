import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme, someMessage, someFunction, SomeComponent} from 'shared';

type Props = {};

const App = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>{someMessage}</Text>
      <Button onPress={someFunction} title="Press me" />
      <SomeComponent
        onPress={() => {
          Alert.alert('Pressed SomeComponent in mobile');
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#bbbbbb',
    padding: 10,
  },
});
