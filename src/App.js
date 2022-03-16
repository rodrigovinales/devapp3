import React from 'react';

import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';


const App = () =>  {
 

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>BUENA PANTALLA</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: "#C5CFD1"
  }
});

export default App;
